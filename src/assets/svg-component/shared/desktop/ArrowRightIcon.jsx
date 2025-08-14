import React from "react";

const ArrowRightIcon = ({
  width = 43,
  height = 14,
  stroke = "#000",
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 43 14"
      className={className}
      style={style}
    >
      <g fill="none" fillRule="evenodd" stroke={stroke}>
        <path d="M0 7h41.864M35.428 1l6 6-6 6" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default ArrowRightIcon;
