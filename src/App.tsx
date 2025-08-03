import { motion } from "motion/react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <motion.div
        style={{
          borderRadius: 10,
          width: 40,
          height: 40,
          backgroundColor: "#fff",
        }}
        animate={{
          y: 300,
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      ></motion.div>
      <motion.div
        style={{
          borderRadius: 10,
          width: 40,
          height: 40,
          backgroundColor: "#fff",
        }}
        animate={{
          y: 300,
        }}
        transition={{
          type: "spring",
          duration: 3,
        }}
      ></motion.div>
      <motion.div
        style={{
          borderRadius: 10,
          width: 40,
          height: 40,
          backgroundColor: "#fff",
        }}
        animate={{
          y: 300,
        }}
        transition={{
          type: "spring",
          duration: 4,
        }}
      ></motion.div>
    </div>
  );
}
