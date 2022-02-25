import { useState } from "react";
import showImage from "../../assets/show-img.jpeg";
import Player from "../player/Player";
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
            Star Trek: The Next Generation
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 2.9, duration: 0.7, ease: "easeOut" }}
            animate={{ x: 0, opacity: 1 }}
          >
            Riker, Troi, Data and Yar beam down to a planet ruled
            <br />
            by a matriarchal government in the hopes of locating
            <br />a missing freighter crew.
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
