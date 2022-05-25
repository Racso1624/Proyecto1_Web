import React from "react";
import "../styles/searchbar-icons.sass"

const Menu = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="menuicon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
        fill: "white"
      }}
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const SearchIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    className="searchicon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "24px",
      height: "24px",
      fill: "white"
    }}
    {...props}
  >
    <g className="style-scope yt-icon">
      <path
        d="m20.87 20.17-5.59-5.59A6.956 6.956 0 0 0 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0 0 11.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
        className="style-scope yt-icon"
      />
    </g>
  </svg>
)

const MicIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    className="micicon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "24px",
      height: "24px",
      fill: "white"
    }}
    {...props}
  >
    <g className="style-scope yt-icon">
      <path
        d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3Zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5A5.51 5.51 0 0 1 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41Z"
        className="style-scope yt-icon"
      />
    </g>
  </svg>
)

const Video_Create = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="videoicon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
        fill: "white"
      }}
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const Apps = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="appsicon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
        fill: "white"
      }}
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M16 4v4h4V4h-4zm3 3h-2V5h2v2zm-3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm-9-9v4h4V4h-4zm3 3h-2V5h2v2zm-3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm-9-3v4h4v-4h-4zm3 3h-2v-2h2v2zM4 4v4h4V4H4zm3 3H5V5h2v2zm-3 3v4h4v-4H4zm3 3H5v-2h2v2zm-3 3v4h4v-4H4zm3 3H5v-2h2v2z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const Notification = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="bellicon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
        fill: "white"
      }}
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

export {Video_Create, Menu, Apps, Notification, MicIcon, SearchIcon}