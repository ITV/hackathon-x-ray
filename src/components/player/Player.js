import { useRef, useEffect } from "react";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import timeData from '../../assets/time-data.json';

const lookupTimeEvent = (timeStamp) => {
  let timeEvent;

  timeData.events.forEach( event => { 
    if( timeStamp >= event.start && timeStamp < event.end ){
      timeEvent = event;
    }
  });

  return timeEvent;
}

export default function Player({ show }) {
  const ref = useRef(null);

  useEffect(() => {
    window.getShakaInst = () => ref.current;
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.videoElement.addEventListener("pause", () => {
        console.log("I PAUSED THE THING", ref.current.videoElement.currentTime);
        console.log(lookupTimeEvent(ref.current.videoElement.currentTime));
      });
    }
  }, [show]);

  return show && <ShakaPlayer ref={ref} src="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd" />
}
