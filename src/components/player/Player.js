import { useRef, useEffect, useState } from "react";
import ShakaPlayer from "shaka-player-react";
import Xray from "../xray/Xray";
import "shaka-player/dist/controls.css";
import timeData from "../../assets/time-data.json";

const lookupTimeEvent = (timeStamp) => {
  let timeEvent = [];

  timeData.events.forEach((event) => {
    if (timeStamp >= event.start && timeStamp < event.end) {
      timeEvent = event.event;
    }
  });

  return timeEvent;
};

export default function Player({ show }) {
  const [showXray, setShowXray] = useState(false);
  const [xrayData, setXrayData] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    window.getShakaInst = () => ref.current;
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.videoElement.addEventListener("pause", () => {
        setShowXray(true);
        setXrayData(lookupTimeEvent(ref.current.videoElement.currentTime));
      });

      ref.current.videoElement.addEventListener("play", () => {
        setShowXray(false);
      });

      ref.current.videoElement.addEventListener("seeked", () => {
        if (ref.current.videoElement.paused) {
          setXrayData(lookupTimeEvent(ref.current.videoElement.currentTime));
        }
      });
    }
  }, [show]);

  return (
    <>
      {show && (
        <ShakaPlayer
          autoPlay
          ref={ref}
          src="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
        />
      )}
      <Xray show={showXray} eventData={xrayData} />
    </>
  );
}
