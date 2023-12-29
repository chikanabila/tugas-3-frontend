import React from "react";
import { Navbar } from "../../navbar/navbar"
import pic from "../../image/trans.jpg"

const home = () => {
  return (
    <div>
        <Navbar />
        <div className="p-5 text-center bg-image rounded-3" style={{backgroundImage: 'url("https://i.pinimg.com/564x/0b/92/3a/0b923aadba61032bfc3048d03f296742.jpg")', height: 400}}>
          <div className="mask" style={{backgroundColor: 'rgba(249, 210, 184, 0.4)'}}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3"> JASA TRANSLATE DOKUMEN</h1>
                  </div></div></div></div></div>
  );
};

export default home;
