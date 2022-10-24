import {useRef} from "react";

const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
            element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullScreen) {
            element.current.webkitRequestFullScreen();
        } else if (element.current.msRequestFullScreen) {
            element.current.msRequestFullScreen();
        }
        
        runCb(true);
      }
    };
    const exitFull = () => {
        if (element.current.exitFullscreen) {
            element.current.exitFullscreen();
        } else if (element.current.mozExitFullScreen) {
            element.current.mozExitFullScreen();
        } else if (element.current.webkitExitFullScreen) {
            element.current.webkitExitFullScreen();
        } else if (element.current.msExitFullScreen) {
            element.current.msExitFullScreen();
        }
      runCb(false);
    };
    return { element, triggerFull, exitFull };
  };

export default useFullScreen;