import React, { useEffect, useState } from "react";
import "../styles/activityfeed.css";

const ActivityFeed = () => {
  const weeklyData = [
    [40, 60, 30],
    [70, 20, 50],
    [30, 80, 60],
    [50, 30, 70],
    [60, 40, 50],
    [20, 90, 45],
    [55, 25, 35],
  ];

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); 
  }, []);

  return (
    <div className="activity-feed">
      <div className="heading">
        <h4>Activity</h4>
        <p>3 appointments on this week</p>
      </div>
      <div className="bar-chart">
        {weeklyData.map((bars, index) => (
          <div className="day" key={index}>
            <div className="bar-group">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i} ${animate ? "animate-bar" : ""}`}
                  style={{ "--bar-height": `${height}px` }}
                />
              ))}
            </div>
            <span className="day-label">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
