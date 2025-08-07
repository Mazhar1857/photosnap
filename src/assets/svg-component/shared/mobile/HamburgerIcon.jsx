import React from "react";

const HamburgerIcon = ({
  width = 20,
  height = 6,
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 6"
      className={className}
      style={style}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h20v1H0zM0 5h20v1H0z" />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
