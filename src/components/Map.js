import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Map = () => {
  const percentage = 60.33;
  const data = "used";

  return (
    <div>
      <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] max-h-[350px]">
        <div className="mx-2 my-0">
          <h2 className="text-[#000] pb-2">Location-Devices</h2>
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14820.038946060926!2d71.5045284669462!3d21.779884181023696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958bcee3225e799%3A0xed465b89072fb759!2sDhasa%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1686742071535!5m2!1sen!2sin"
              width="100%"
              height="250px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] max-h-[220px] mt-6">
        <div className="mx-2 my-2">
          <h2 className="text-[#000]">Domain Quota</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-2 pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  className="h-[80px] w-[80px] text-[12px]"
                />
                <div>
                  <p className="text-[#C6C6C6] text-[15px] font-bold">
                    Data Used
                  </p>
                  <h4 className="text-[20px] font-bold ">60.33gb/100gb</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <p className="text-[#C6C6C6] text-[10px]">Today</p>
                  <h2 className="text-[10px]">30.00%</h2>
                </div>
                <div>
                  <p className="text-[8px] text-[green]">Data science</p>
                  <p className="text-[#C6C6C6] text-[10px]">+ 15.00</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <p className="text-[#C6C6C6] text-[10px]">This Week</p>
                  <h2 className="text-[10px]">15.00%</h2>
                </div>
                <div>
                  <p className="text-[8px] text-[red]">Data science</p>
                  <p className="text-[#C6C6C6] text-[10px]">- 15.00</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <p className="text-[#C6C6C6] text-[10px]">This Month</p>
                  <h2 className="text-[10px]">55.00%</h2>
                </div>
                <div>
                  <p className="text-[8px] text-[red]">Data science</p>
                  <p className="text-[#C6C6C6] text-[10px]">+ 25.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
