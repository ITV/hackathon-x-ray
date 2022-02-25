import showImage from "../../assets/show-img.jpeg";
import { motion } from "framer-motion";
import "./Show.scss";

export default function Show() {
  return (
    <div className="show">
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
        >
          >Play Episode
        </motion.button>
      </div>
      <div className="show__grad--left"></div>
      <div className="show__grad"></div>
    </div>
  );
}
