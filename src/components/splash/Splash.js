import { motion } from "framer-motion";
import "./Splash.scss";

export default function Splash() {
  return (
    <motion.div
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
      className="splash"
    >
      <motion.svg
        width="141"
        height="146"
        viewBox="0 0 141 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 50 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.7, ease: [0.35, 0.6, 0.88, 0.68] }}
      >
        <path
          d="M67.5763 39.3784L16.6272 2.40645C14.9196 1.16731 12.8638 0.5 10.754 0.5H10.3077C5.71906 0.5 1.71923 3.62297 0.606316 8.07464L0.532338 8.37055C0.193057 9.72768 0.437818 11.1649 1.2072 12.3332L38.6665 69.2158C39.7767 70.9017 39.7643 73.0899 38.6349 74.7631L1.22828 130.18C0.44548 131.34 0.184414 132.775 0.508491 134.136L1.17133 136.92C1.99421 140.376 4.58899 143.136 7.98777 144.17L11.5691 145.26C13.0967 145.725 14.7545 145.432 16.0306 144.473L67.5585 105.713C69.308 104.397 71.7102 104.372 73.4866 105.651L127.424 144.504C128.728 145.444 130.403 145.699 131.927 145.191L133.824 144.559C137.579 143.307 140.242 139.959 140.617 136.02L140.831 133.769C140.94 132.625 140.652 131.478 140.014 130.521L102.826 74.7395C101.718 73.0772 101.706 70.9147 102.795 69.2399L139.893 12.202C140.603 11.1109 140.857 9.78538 140.602 8.50905C139.67 3.85213 135.581 0.5 130.832 0.5H129.111C128.064 0.5 127.042 0.829156 126.192 1.44098L73.4325 39.3906C71.682 40.6498 69.3215 40.6448 67.5763 39.3784Z"
        />
      </motion.svg>
    </motion.div>
  );
}