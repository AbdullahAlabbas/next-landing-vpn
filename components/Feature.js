  import React, { useMemo } from "react";
  import getScrollAnimation from "../utils/getScrollAnimation";
  import CountdownTimer from "./CountdownTimer";



  const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
      <div
      className="w-full"
        id="feature"
      >
              <CountdownTimer
          targetDate="December 31, 2024 23:59:59"
          scrollAnimation={scrollAnimation}
        />
        </div>

    );
  };

  export default Feature;
