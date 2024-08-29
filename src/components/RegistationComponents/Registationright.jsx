import React from "react";
import leftimagefirst from "../../assets/RegistationAsset/firstpagerightimg.png";
export const Registationright = () => {
  return (
    <>
      <div className="w-[40%]">
        <div>
          <picture>
            <img
              src={leftimagefirst}
              alt={leftimagefirst}
              className="h-screen w-full"
            />
          </picture>
        </div>
      </div>
    </>
  );
};
export default Registationright;
