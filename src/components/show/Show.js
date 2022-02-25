import { useState } from "react";
import showImage from "../../assets/show-img.jpeg";
import Player from '../player/Player';
import { motion } from "framer-motion";
import "./Show.scss";

export default function Show() {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
    <motion.div className="show" animate={{ opacity: showPlayer ? 0 : 1 }}>
      <div className="show__image">
        <img alt="Coronation Street" src={showImage} />
      </div>
      <div className="show__content">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 2.8, duration: 0.7, ease: "easeOut" }}
          animate={{ x: 0, opacity: 1 }}
        >
          Coronation Street
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 2.9, duration: 0.7, ease: "easeOut" }}
          animate={{ x: 0, opacity: 1 }}
        >
          Max's footage of the school dance uncovers shocking events.
          <br />
          Dev blows Chesney's cover in front of a stunned Linda.
          <br />
          Toyah and Imran consider an opportunity to adopt Elsie.
        </motion.p>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 3, duration: 0.7, ease: "easeOut" }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setShowPlayer(!showPlayer)}
        >
          Play Episode
        </motion.button>
      </div>
      <div className="show__grad--left"></div>
      <div className="show__grad"></div>
    </motion.div>
    <Player show={showPlayer} />
    </>
  );
}
