import React, { useState } from "react";
import Checkbox from "./Checkbox";

function Rememberme() {
      const [checked, setChecked] = useState(false);
  return (
    <div>
          <div className="flex space-x-3 w-1/1">
      <Checkbox
        label="Accept terms"
        checked={checked}
        onChange={(newVal) => setChecked(newVal)}
      />
      <p className="text-dark/60 font-Poppins font-normal text-sm leading-[22px] tracking-normal self-center ">Remember me</p>
    </div>
    </div>
  )
}

export default Rememberme
