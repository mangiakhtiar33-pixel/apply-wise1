import React, { useState } from "react";
import Checkbox from "./Checkbox";


function Privacy() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex space-x-3 w-5/6">
      <Checkbox
        label="Accept terms"
        checked={checked}
        onChange={(newVal) => setChecked(newVal)}
      />
      <p className="text-dark/60 font-Poppins font-normal text-sm leading-[22px] tracking-normal ">By creating an account, you agree to Applywise <a className="underline decoration-solid" href="#">terms of service</a> and <a className="underline decoration-solid" href="https://www.privacypolicygenerator.info/">privacy policy</a> </p>
    </div>
  );
}

export default Privacy;
