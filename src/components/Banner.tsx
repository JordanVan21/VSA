import { motion } from "framer-motion";

interface BannerProps {
  message: string;
  onClose?: () => void;
}

const Banner = ({ message }: BannerProps) => {
  return (
    <div className="banner-container">
        <motion.div className ="banner"
      initial={{ x: "320%" }} // Start off-screen to the left
        animate={{ x: "-150%" }} // Slide into view
    //   exit={{ x: "100%" }} // Slide out to the right
      transition={{ 
        duration: 10, 
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: "absolute",
        left: 20,
        backgroundColor: "black",
        color: "white",
        borderRadius: "8px",
        fontSize: "1.2rem",
        zIndex: 1000,
      }}
    >
      {message}
    </motion.div>
    </div>
  );
};

export default Banner;
