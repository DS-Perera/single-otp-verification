import React from "react";
import line from "../Assets/line.png";
import otp from "../Assets/otp.png";

export default function Web() {
  return (
    <div className="login main-background">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-background p-5 text-center">
            <div className="mt-4"></div>
            <img src={otp} alt="login Asset" className="h-50 py-5 mt-5" />
            <h1>Easy Verification</h1>
            <h3 className="mt-3">
              Easy way to verify your
              <br /> system login
            </h3>
            <img src={line} alt="login Asset" className="w-50 py-2 mt-1 px-4" />
          </div>
          <div className="col-md-6 form p-5 text-center">
            <div className="mt-5 pt-5"></div>
            <h1 className="mt-md-5 pt-md-5">Easy Verification Code</h1>
            <h3 className="mt-3">Easy way to verify your system login</h3>
            <div className="px-5">
              <input className="w-100 px-2" placeholder="Enter OTP code" />
              <button className="btn primary-btn mt-5 px-3 py-3">
                Submit OTP Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
