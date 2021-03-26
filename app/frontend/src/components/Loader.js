import React from "react";

const Loader = ({ size = "w-24", caption = true }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        className={`${size} animate-spin`}
        src="https://res.cloudinary.com/dilv93gvb/image/upload/e_bgremoval/v1616555415/kaayo/ih8u9vl2oe9rc7gxxnq7.png"
        alt=""
      />
      {caption && <p>Just a moment...</p>}
    </div>
  );
};

export default Loader;
