import "./main.css";
import arrow from "../../assets/arrow white.png";

import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab3 from "../../assets/tab3.png";
import tab4 from "../../assets/tab4.png";

function Main() {
  return (
    <div className="main-container">
      <div className="info-container">
        <div className="headline-container">
          <h1>Minimize your tabs.</h1>
          <h1>Find the trends!</h1>
        </div>
        <p>
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <div className="button-container">
          <span className="get-started-button">Get Started 🔥</span>

          <div className="arrow-container">
            <p>All research start from here</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="tap-container">
        <img className="up tab" src={tab1} alt="" />
        <img className="down tab" src={tab2} alt="" />
        <img className="up tab" src={tab3} alt="" />
        <img className="down tab" src={tab4} alt="" />
      </div>
    </div>
  );
}

export default Main;
