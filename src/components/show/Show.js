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
        <h1>Coronation Street</h1>
        <p>
          Max's footage of the school dance uncovers shocking events.
          <br />
          Dev blows Chesney's cover in front of a stunned Linda.
          <br />
          Toyah and Imran consider an opportunity to adopt Elsie.
        </p>
        <button>Play Episode</button>
      </div>
      <div className="show__grad--left"></div>
      <div className="show__grad"></div>
    </div>
  );
}
