import React from "react";
import my_res from "../assets/Resume.pdf";

function Resume() {
  return (
    <div className="w-full min-h-screen bg-slate-900 p-10 text-slate-200">
      <iframe src={my_res} title="resume" className="w-full h-[675px]" />
    </div>
  );
}

export default Resume;
