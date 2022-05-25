import React from "react";
import "../styles/sidebar-icons.sass"

const HomeIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="style-scope yt-icon"
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
        <path d="M4 10v11h6v-6h4v6h6V10l-8-7Z" className="style-scope yt-icon" />
      </g>
    </svg>
)

const ExploreIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="style-scope yt-icon"
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
          d="m9.8 9.8-3.83 8.23 8.23-3.83 3.83-8.23L9.8 9.8zm3.28 2.97a1.327 1.327 0 0 1-1.08.56c-.28 0-.54-.08-.77-.25-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.7-.23.99zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const ShortsIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="style-scope yt-icon"
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
          d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 0 0-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 0 0 3.51 6.63l8.5-4.5A3.736 3.736 0 0 0 20 13.57a3.762 3.762 0 0 0-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 0 1 5 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const SubscriptionsIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="style-scope yt-icon"
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
          d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)

const LibraryIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      className="style-scope yt-icon"
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
          d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
)
  
  
export {HomeIcon, ExploreIcon, ShortsIcon, SubscriptionsIcon, LibraryIcon}