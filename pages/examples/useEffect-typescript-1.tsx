import { useEffect, useState } from "react";

const MousePosition = () => {
  const [{x, y}, setCoordinates] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const onMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };
    
    if (window) {
      document.addEventListener("mousemove", onMouseMove);
    }
    return () => { document.removeEventListener("mousemove", onMouseMove) }
  },[]);
  
  return <>
    <div>
      Your cursor coordinates are X: {x}, and Y: {y}
    </div>
  </>;
};

export default MousePosition;
