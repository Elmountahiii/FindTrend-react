import "./solution.css";
import tab from "../../assets/tab5.png";
import arrow from "../../assets/arrow black.png";

function Solution() {
  return (
    <div className="inside-container solution-container container-padding">
      <div className="solution-headline-container">
        <h1>Open new tabs is sh*t </h1>
      </div>
      <div className="solution-tab-container">
        <div className="solution-arrow-container left">
          <img src={arrow} alt="" />
          <p>solution for discover a trend</p>
        </div>
        <div className="solution-tab">
          <img src={tab} alt="" />
        </div>
        <div className="solution-arrow-container right">
          <p>You just need one tab now</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <p className="solution-p">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  );
}

export default Solution;
