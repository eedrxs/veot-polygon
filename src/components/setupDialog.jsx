import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import TitleDesc from "./setup/titleDesc";
import TypeOptions from "./setup/typeOptions";
import Duration from "./setup/duration";
import Participation from "./setup/participation";
import Setup from "./setup/setup";

const SetupDialog = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-llblue/50 backdrop-blur-md z-50">
      <div className="flex flex-col h-[75%] w-[450px] lg:w-[470px] bg-blue rounded-3xl pt-4 pb-8 px-6">
        <div className="flex flex-row justify-between text-white/70">
          <p>prev</p>
          <FontAwesomeIcon icon={solid("xmark-circle")} className="text-2xl" />
        </div>
        <TitleDesc />
        {/* <TypeOptions /> */}
        {/* <Duration /> */}
        {/* <Participation /> */}
        {/* <Setup /> */}
      </div>
    </div>
  );
};

export default SetupDialog;
