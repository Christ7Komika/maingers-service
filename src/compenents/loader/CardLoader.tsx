import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => (
  <ContentLoader backgroundColor="#f0f0f0" foregroundColor="#dedede">
    <rect x="43" y="304" rx="4" ry="4" style={{ width: "100%" }} height="9" />
    <rect x="44" y="323" rx="3" ry="3" style={{ width: "100%" }} height="6" />
    <rect
      x="42"
      y="77"
      rx="10"
      ry="10"
      style={{ width: "100%" }}
      height="217"
    />
  </ContentLoader>
);

export default CardLoader;
