import { motion } from "framer-motion";
import "./Xray.scss";

export default function Xray({ show, eventData }) {
  if (!eventData.length) {
    return null;
  }

  const list = {
    visible: { transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }, },
    hidden: { transition: {
        when: "afterChildren",
      }, },
  }

  const item = {
    visible: {
      x: 0,
      opacity: 1,
      
    },
    hidden: {
      x: -100,
      opacity: 0,
      
    },
  };

  return (
    show && (
      <div className="xray">
        <motion.div className="xray__items" variants={list} initial="hidden" animate="visible">
          {eventData.map((event, idx) => {
            return (
              <motion.div
                className={`xray__item xray__item--${event.type}`}
                variants={item}
                key={`${event.info} ${idx}`}
              >
                {event.image && <img src={event.image} alt={event.info} />}
                <div className="xray__content">
                  {/* Type: {event.type} */}
                  {event.name && <h2>{event.name}</h2>}
                  {event.info}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    )
  );
}
