import React, { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "./utils/queryServerApi";

const IAsignin = () => {
  const [error, setError] = useState({
    visible: false,
    message: "",
    severity: "",
  });
  const history = useHistory();
  const videoHeight = 400;
  const videoWidth = 640;

  const [initializing, setInitializing] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);
  // Start Recording process
  const startVideo = () => {
    navigator.getUserMedia(
      { video: {} },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => {
        setError({
          visible: true,
          message:
            "Please Make sure that your camera is activated and reload page",
          severity: "error",
        });
      }
    );
  };
  //Stoping video proccess
  const stopVideo = (e) => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }

    videoRef.current.srcObject = null;
  };

  //Matching
  const loadImage = async () => {
    const [users, err] = await queryServerApi("user/all", null, "GET", false);

    return Promise.all(
      users?.map(async (user) => {
        const imgSrc =
          "https://appcleanit.herokuapp.com/user/Uploads/" + user.img;
        const img = await faceapi.fetchImage(imgSrc);
        var descrptions = [];
        const results = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        if (results.descriptor !== "undefined")
          descrptions.push(results.descriptor);
        console.log(results.descriptor);
        return new faceapi.LabeledFaceDescriptors(user.email, descrptions);
      })
    );
  };
  /// Detecting face from video
  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }

      const labeledFaceDescriptors = await loadImage();
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);

      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      const displaySize = { width: videoWidth, height: videoHeight };
      faceapi.matchDimensions(canvasRef.current, displaySize);

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);

      const resultF = resizedDetections.map((d) =>
        faceMatcher.findBestMatch(d.descriptor)
      );
      resultF.forEach((result, i) => {
        const box = resizedDetections[i].detection.box;
        faceapi.draw.DrawBox(box, { label: result.toString() });
        var resultText = result.toString().split("(");
        var resultClear = resultText[0].replaceAll(" ", "");
        console.log("zeidi", resultClear);

        if (resultClear === "unknown") {
          setError({
            visible: true,
            message:
              "Unknown user please stay stable or try another way to sing in",
            severity: "error",
          });
        } else {
          setError({
            visible: true,
            message: "Welcome , sign in ...",
            severity: "success",
          });
          login(resultClear);
        }
      });
    }, 1000);
  };
  // login with email and redirections :
  const login = async (Email) => {
    const [user, err] = await queryServerApi(
      "user/EmailFace/" + Email,
      null,
      "GET",
      false
    );
    if (user === "UserNotFound") {
      setError({
        visible: true,
        message: `Username or Email doesn't exist  if you registred recently please activate your account`,
        severity: "error",
      });
    } else {
      if (user[0].role === "admin") {
        history.push("/Adminspace/dashboard");
        localStorage.setItem("role", user[0].role);
        localStorage.setItem("id", user[0]._id);
        localStorage.setItem("name", user[0].name);
        history.go(0);
      } else if (user[0].role === "user") {
        console.log(user[0].role);
        history.push("/Clientspace/services");
        localStorage.setItem("role", user[0].role);
        localStorage.setItem("id", user[0]._id);
        localStorage.setItem("name", user[0].name);

        history.go(0);
      }
    }
  };

  return (
    <div className="container">
      {error.visible ? (
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">{error.message}</strong>
          </span>
        </div>
      ) : (
        <span>
          {initializing ? (
            <div className="d-flex align-items-center align-content-center">
              <span>
                <strong className="d-block">Plase wait ...</strong>
              </span>
            </div>
          ) : (
            <div className="d-flex align-items-center align-content-center">
              <span>
                <strong className="d-block">Ready stay stable please!</strong>
              </span>
            </div>
          )}
        </span>
      )}
      <div className="display-flex justify-content-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          width={videoWidth}
          height={videoHeight}
          onPlay={handleVideoOnPlay}
        />
        <canvas ref={canvasRef} className="position-absolute" />
      </div>
      <br />
      <center>
        <button className="btn-outline-danger" onClick={stopVideo}>
          Close Camera
        </button>
      </center>
    </div>
  );
};
export default IAsignin;
