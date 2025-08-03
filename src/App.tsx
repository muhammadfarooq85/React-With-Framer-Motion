import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [scale, setScale] = useState(0.1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:10,
        alignItems: "center",
        height: "150vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#212121",
          width: 150,
          height: 300,
          borderRadius: 20,
        }}
      >
        <motion.div
          style={{
            backgroundColor: "#fff537",
            width: "100%",
            height: "100%",
            scaleY: scale,
            borderRadius: 20,
            transformOrigin: "bottom",
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 5 }}
        ></motion.div>
      </div>
      <div>
        <button onClick={() => setScale(0.2)}>Scale Up</button>
        <button onClick={() => setScale(0.3)}>Scale Up</button>
        <button onClick={() => setScale(0.4)}>Scale Up</button>
        <button onClick={() => setScale(0.5)}>Scale Up</button>
        <button onClick={() => setScale(0.6)}>Scale Up</button>
        <button onClick={() => setScale(0.7)}>Scale Up</button>
        <button onClick={() => setScale(0.8)}>Scale Up</button>
        <button onClick={() => setScale(0.9)}>Scale Up</button>
        <button onClick={() => setScale(1)}>Scale Up</button>
      </div>
    </div>
  );
}
