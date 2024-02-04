import React, { useState } from "react";

export default function GenderCheckBox() {
  const [checked, setChecked] = useState(null);
  const checkMale = () => {
    setChecked("male");
  };
  const checkFemale = () => {
    setChecked("female");
  };
  return (
    <div className="flex gap-8 mt-4 items-center justify-center">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text font-poppins text-[17px]">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary border-gray-400"
            onClick={checkMale}
            checked={checked === "male" ? true : false}
          />
        </label>
      </div>
      <div className="form-control ">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text font-poppins text-[17px]">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-gray-400"
            onClick={checkFemale}
            checked={checked === "female" ? true : false}
          />
        </label>
      </div>
    </div>
  );
}
