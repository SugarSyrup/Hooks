import { useEffect, useRef, useState } from "react";

// const useFadeIn = (opacity = 1, delay = 3) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       const { current } = element;
//       current.style.transition = `opacity ${opacity}s ease-in-out ${delay}`;
//       current.style.opacity = 1;
//       current.style.color = "yellow";
//     }
//   }, []);
//   return { ref: element, style: { opacity: 0 } };
// };