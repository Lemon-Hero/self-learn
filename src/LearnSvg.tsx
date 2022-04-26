import { FC } from "react";
import "./App.css";

const LearnSvg: FC = () => {
  return (
    <ul
      className="learn-svg"
      style={{
        width: 800,
        height: 800,
        listStyle: "none",
      }}
    >
      <li>
        <p>circle:</p>
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
      </li>
      <li>
        <p>circle:</p>
        <svg width="300" height="110">
          <circle cx="30" cy="80" r="25" />
          <circle cx="90" cy="80" r="25" className="red" />
          <circle cx="150" cy="80" r="25" className="fancy" />
        </svg>
      </li>
      <li>
        <p>line:</p>
        <svg width="300" height="100">
          <line
            x1="0"
            y1="30"
            x2="200"
            y2="30"
            style={{ stroke: "rgb(0,0,0)", strokeWidth: 5 }}
          />
        </svg>
      </li>
      <li>
        <p>polyline:</p>
        <svg width="300" height="100">
          <polyline
            points="3,3 30,28 3,53 3,28 3,1"
            fill="red"
            stroke="green"
            strokeWidth="5"
          />
        </svg>
      </li>
      <li>
        <p>rect:</p>
        <svg width="300" height="100">
          <rect
            x="0"
            y="0"
            height="100"
            width="200"
            style={{ stroke: "#70d5dd", fill: "#dd524b" }}
          />
        </svg>
      </li>
      <li>
        <p>ellipse:</p>
        <svg width="300" height="110">
          <ellipse
            cx="60"
            cy="60"
            ry="40"
            rx="20"
            stroke="black"
            strokeWidth="5"
            fill="silver"
          />
        </svg>
      </li>
      <li>
        <p>polygon:</p>
        <svg width="300" height="110">
          <polygon
            fill="green"
            stroke="orange"
            strokeWidth="1"
            points="0,0 100,0 100,100 0,100 0,0"
          />
        </svg>
        <svg width="300" height="110">
          <polygon
            fill="blue"
            stroke="orange"
            strokeWidth="1"
            points="20,0 80,0 100,100 0,100"
          />
        </svg>
        <svg width="300" height="300">
          <polygon
            fill="purple"
            stroke="orange"
            strokeWidth="2"
            points="40,0 110,0 150,100 110,200 40,200 0,100 40,0"
          />
        </svg>
      </li>
      <li>
        <p>path:</p>
        <svg width="300" height="110">
          <path
            fill="white"
            stroke="black"
            d="
              M 18,0
              L 46,0
              L 46,40
              L 61,40
              L 32,68
              L 3,40
              L 18,40
              Z
            "
          ></path>
        </svg>
        <svg width="300" height="110">
          <path
            fill="white"
            stroke="black"
            d="
              M 0,40
              L 100,40
              L 100,10
              L 140,55
              L 100,100
              L 100,70
              L 0,70
              Z
            "
          ></path>
        </svg>
      </li>
      <li>
        <p>text:</p>
        <svg width="300" height="100">
          <text x="50" y="25">
            Hello World
          </text>
        </svg>
      </li>
      <li>
        <p>use:</p>
        <svg>
          <circle id="myCircle" cx="15" cy="15" r="10" />
          <use href="#myCircle" x="40" y="0" fill="blue" />
          <use href="#myCircle" x="170" y="0" fill="red" stroke="blue" />
        </svg>
      </li>
      <li>
        <p>g(group):</p>
        <svg width="300" height="100">
          <g id="myCustomG">
            <text x="25" y="20">
              圆形
            </text>
            <circle cx="50" cy="50" r="20" />
          </g>

          <use href="#myCustomG" x="100" y="0" fill="blue" />
          <use href="#myCustomG" x="200" y="0" fill="white" stroke="blue" />
        </svg>
      </li>
      <li>
        <p>defs:</p>
        <svg width="300" height="100">
          <defs>
            <g id="myDefs">
              <text x="25" y="20">
                圆形2
              </text>
              <circle cx="50" cy="50" r="20" />
            </g>
          </defs>
          <use href="#myDefs" x="0" y="0" />
          <use href="#myDefs" x="100" y="0" fill="blue" />
          <use href="#myDefs" x="200" y="0" fill="white" stroke="blue" />
        </svg>
      </li>
      <li>
        <p>pattern:</p>
        <svg width="300" height="300">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#bee9e8" cx="50" cy="50" r="35" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </li>
      {/* <li>
        <p>image:</p>
        <svg viewBox="0 0 100 100" width="100" height="100">
          <image xlinkHref="./assets/LOL.png" width="50%" height="50%" />
        </svg>
      </li> */}
      <li>
        <p>animate:</p>
        <svg width="500px" height="200px">
          <rect x="0" y="0" width="100" height="100" fill="#feac5e">
            <animate
              attributeName="x"
              from="0"
              to="500"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              from="0"
              to="500"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </li>
      <li>
        <p>animateTransform:</p>
        <svg width="500px" height="500px">
          <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              begin="0s"
              dur="10s"
              from="0 200 200"
              to="360 400 400"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </li>
      <li>JavaScript操作：</li>
      <li>
        <p>DOM操作</p>
        <svg
          id="mySvgDom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
          onClick={() => {
            const mycircle = document.getElementById("mycircle");

            mycircle?.addEventListener(
              "click",
              function (e) {
                console.log("circle clicked - enlarging");
                mycircle.setAttribute("r", "60");
              },
              false
            );
          }}
        >
          <circle id="mycircle" cx="400" cy="300" r="50" />
        </svg>
      </li>
      <li>
        <p>SVG DOM:</p>
        {/* 使用<object>、<iframe>、<embed>标签插入 SVG 文件，可以获取 SVG DOM。 */}
        <svg width="600" height="300">
          <text x="50" y="25">
            var svgObject = document.getElementById('object').contentDocument;
          </text>
          <text x="50" y="45">
            var svgIframe = document.getElementById('iframe').contentDocument;
          </text>
          <text x="50" y="65">
            var svgEmbed = document.getElementById('embed').getSVGDocument();
          </text>
        </svg>
      </li>
      <li>
        <svg width="350" height="160">
          <g className="layer" transform="translate(60,10)">
            <circle r="5" cx="0" cy="105" />
            <circle r="5" cx="90" cy="90" />
            <circle r="5" cx="180" cy="60" />
            <circle r="5" cx="270" cy="0" />
            <polyline
              points="0,105 90,90 180,60 270,0"
              fill="none"
              stroke="black"
              strokeWidth="1"
            />
            <g className="y axis">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="120"
                style={{ stroke: "rgb(0,0,0)", strokeWidth: 1 }}
              />
              <text x="-40" y="105" dy="5">
                $10
              </text>
              <text x="-40" y="0" dy="5">
                $80
              </text>
            </g>
            <g className="x axis" transform="translate(0, 120)">
              <line
                x1="0"
                y1="0"
                x2="270"
                y2="0"
                style={{ stroke: "rgb(0,0,0)", strokeWidth: 1 }}
              />
              <text x="-30" y="20">
                January 2014
              </text>
              <text x="240" y="20">
                April
              </text>
            </g>
          </g>
        </svg>
      </li>
    </ul>
  );
};

export default LearnSvg;
