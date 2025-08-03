import { motion } from "motion/react";

// export default function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,
//       }}
//     >
//       <motion.div
//         style={{
//           borderRadius: 10,
//           width: 40,
//           height: 40,
//           backgroundColor: "#fff",
//         }}
//         animate={{
//           y: 300,
//         }}
//         transition={{
//           type: "spring",
//           duration: 2,
//         }}
//       ></motion.div>
//       <motion.div
//         style={{
//           borderRadius: 10,
//           width: 40,
//           height: 40,
//           backgroundColor: "#fff",
//         }}
//         animate={{
//           y: 300,
//         }}
//         transition={{
//           type: "spring",
//           duration: 3,
//         }}
//       ></motion.div>
//       <motion.div
//         style={{
//           borderRadius: 10,
//           width: 40,
//           height: 40,
//           backgroundColor: "#fff",
//         }}
//         animate={{
//           y: 300,
//         }}
//         transition={{
//           type: "spring",
//           duration: 4,
//         }}
//       ></motion.div>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <motion.div
        style={{
          backgroundColor: "white",
          width: 200,
          height: 200,
          borderRadius: 20,
          cursor: "grab",
        }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 300, 
          bottom: 300,
        }}
        drag
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      ></motion.div>
    </div>
  );
}
