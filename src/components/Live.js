import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Live = () => {
  const percentage = 15;
  const data = 27;
  const datas = 1;
  return (
    <>
      <div>
        <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] max-h-[220px]">
          <div className="mx-2 my-2">
            <h2 className="text-[#000]">Live Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-0">
              <div className="flex flex-col items-center">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}`}
                  className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]"
                />
                <button className="text-[#0B3366] border-[1px] border-[#0B3366] px-4 py-1 mt-3">
                  Info
                </button>
              </div>
              <div className="flex flex-col items-center mt-5 sm:mt-0">
                <CircularProgressbar
                  value={data}
                  text={`${data}`}
                  className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]"
                />
                <button className="text-[#0B3366] border-[1px] border-[#0B3366] px-4 py-1 mt-3">
                  Warnings
                </button>
              </div>
              <div className="flex flex-col items-center mt-5 sm:mt-0">
                <CircularProgressbar
                  value={datas}
                  text={`${datas}`}
                  className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]"
                />
                <button className="text-[#0B3366] border-[1px] border-[#0B3366] px-4 py-1 mt-3">
                  Errors
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] mt-5  ">
          <div className="mx-2 my-2">
            <h2 className="text-[#000]">Activity Logs</h2>
          </div>
          <div className="relative overflow-x-auto overflow-y-auto max-h-[200px] ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-0 ">
              <tbody>
                <tr className="bg-white border-b dark:border-gray-700  dark:hover:bg-gray-600 flex items-center justify-between">
                  <th
                    scope="row"
                    className="flex  whitespace-nowrap  flex-col mr-18"
                  >
                    <div className="flex">
                      <img
                        className="w-5 h-5 rounded-full mr-2"
                        src="image/monitor-tablet-and-smartohone 2.png"
                        alt="Jese image"
                      />
                      <div className="text-base text-[#545454] font-normal">
                        Device
                      </div>
                    </div>
                    <div className="text-[10px] text-[#545454]">
                      Futurelk-device 1 report generated successfully
                    </div>
                  </th>
                  <td className="py-4 flex flex-col text-[#C6C6C6]">
                    <span>16,Mar 2023,</span>
                    <span>06:30:25 PM</span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-700  dark:hover:bg-gray-600 flex items-center justify-between">
                  <th
                    scope="row"
                    className="flex  whitespace-nowrap  flex-col mr-18"
                  >
                    <div className="flex">
                      <img
                        className="w-5 h-5 rounded-full mr-2"
                        src="image/playlist 3.png"
                        alt="Jese image"
                      />
                      <div className="text-base text-[#545454] font-normal">
                        Campaign
                      </div>
                    </div>
                    <div className="text-[10px] text-[#545454]">
                      Futurelk-cinemas Modified successfully
                    </div>
                  </th>
                  <td className="py-4 flex flex-col text-[#C6C6C6]">
                    <span>16,Mar 2023,</span>
                    <span>06:30:25 PM</span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-700  dark:hover:bg-gray-600 flex items-center justify-between">
                  <th
                    scope="row"
                    className="flex  whitespace-nowrap  flex-col mr-18"
                  >
                    <div className="flex">
                      <img
                        class="w-5 h-5 rounded-full mr-2"
                        src="image/playlist 3.png"
                        alt="Jese image"
                      />
                      <div className="text-base text-[#545454] font-normal">
                        Device
                      </div>
                    </div>
                    <div className="text-[10px] text-[#545454]">
                      Futurelk-Display 1 created successfully
                    </div>
                  </th>
                  <td className="py-4 flex flex-col text-[#C6C6C6]">
                    <span>16,Mar 2023,</span>
                    <span>06:30:25 PM</span>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:border-gray-700  dark:hover:bg-gray-600 flex items-center justify-between">
                  <th
                    scope="row"
                    className="flex  whitespace-nowrap  flex-col mr-18"
                  >
                    <div className="flex">
                      <img
                        class="w-5 h-5 rounded-full mr-2"
                        src="image/playlist 3.png"
                        alt="Jese image"
                      />
                      <div className="text-base text-[#545454] font-normal">
                        Device
                      </div>
                    </div>
                    <div className="text-[10px] text-[#545454]">
                      Futurelk-Display 1 created successfully
                    </div>
                  </th>
                  <td className="py-4 flex flex-col text-[#C6C6C6]">
                    <span>16,Mar 2023,</span>
                    <span>06:30:25 PM</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
