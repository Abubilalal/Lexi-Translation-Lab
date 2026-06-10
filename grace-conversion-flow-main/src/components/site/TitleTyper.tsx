import { useEffect } from "react";

const FULL = "Lexi Translation Lab";

const TYPE_SPEED = 120;   // ms per letter while typing
const ERASE_SPEED = 60;   // ms per letter while erasing
const HOLD_FULL = 3000;   // ms to hold the complete title
const HOLD_EMPTY = 600;   // ms to pause before typing again

export function TitleTyper() {
  useEffect(() => {
    let i = 0;
    let erasing = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (!erasing) {
        i++;
        document.title = FULL.slice(0, i) || " ";
        if (i < FULL.length) {
          timer = setTimeout(step, TYPE_SPEED);
        } else {
          erasing = true;
          timer = setTimeout(step, HOLD_FULL); // hold full title
        }
      } else {
        i--;
        document.title = FULL.slice(0, i) || " ";
        if (i > 0) {
          timer = setTimeout(step, ERASE_SPEED);
        } else {
          erasing = false;
          timer = setTimeout(step, HOLD_EMPTY); // pause, then retype
        }
      }
    };

    step();
    return () => clearTimeout(timer);
  }, []);

  return null;
}