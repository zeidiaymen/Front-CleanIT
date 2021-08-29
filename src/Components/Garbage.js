import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import { queryServerApi } from "./utils/queryServerApi";
function Register() {
  const formik = useFormik({
    initialValues: {
      name: "zeidi",
      last_name: "aymen",
      email: "test",
      password: "test",
      address: "bardo",
      phonr_number: "545454",
      img: "",
    },
    onSubmit: async (values) => {
      console.log("Values", values.img);
      const [res, err] = await queryServerApi(
        "user/register",
        values,
        "POST",
        true
      );
      console.log(err);
      console.log("res = ", res);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="file"
          name="img"
          onChange={(event) => {
            formik.setFieldValue("img", event.target.files[0]);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Register;
