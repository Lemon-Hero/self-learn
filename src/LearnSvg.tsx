/*
 * @Author: <limeng.a@mininglamp.com>
 * @Date: 2021-11-19 17:09:27
 * @LastEditors: <limeng.a@mininglamp.com>
 * @LastEditTime: 2021-11-19 18:52:43
 * @Description: svg
 * @FilePath: /self-learn/src/LearnSvg.tsx
 */
import { FC } from "react";
import "./App.css";

const LearnSvg: FC = () => {
  return (
    <div className="learn-svg" style={{ width: 800, height: 800 }}>
      <svg
        id="mysvg"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="50 50 50 50"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle id="myCircle" cx="50" cy="50" r="50" />
      </svg>
      <svg width="300" height="180">
        <circle cx="30" cy="50" r="25" />
        <circle cx="90" cy="50" r="25" className="red" />
        <circle cx="150" cy="50" r="25" className="fancy" />
      </svg>
      <svg width="300" height="180">
        <line
          x1="0"
          y1="30"
          x2="200"
          y2="30"
          style={{ stroke: "rgb(0,0,0)", strokeWidth: 5 }}
        />
      </svg>
    </div>
  );
};

export default LearnSvg;
