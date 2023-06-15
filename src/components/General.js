import React from "react";

const General = () => {
  return (
    <>
      <div>
        <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] max-h-[220px]">
          <div className="mx-2 my-2">
            <h2 className="text-[#000]">General Information</h2>
            <div className="grid grid-cols-5">
              <div className="pt-5">
                <p className="text-[#C6C6C6] my-2">Projects</p>
                <p className="text-[#C6C6C6] my-2">Users</p>
                <p className="text-[#C6C6C6] my-2">Channels</p>
                <p className="text-[#C6C6C6] my-2">Devices</p>
              </div>
              <div className="col-span-3">
                <div className="pt-9">
                  <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      class="h-4 bg-[#0B3366] rounded-full dark:bg-blue-500"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div className="pt-[15px]">
                    <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700 ">
                      <div
                        class="h-4 bg-[#0B3366] rounded-full dark:bg-blue-500"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700 ">
                      <div
                        class="h-4 bg-[#0B3366] rounded-full dark:bg-blue-500"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-[15px]">
                    <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700 ">
                      <div
                        class="h-4 bg-[#0B3366] rounded-full dark:bg-blue-500"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 ml-5">
                <p className="text-[#C6C6C6] my-2">02/10</p>
                <p className="text-[#C6C6C6] my-2">03/03</p>
                <p className="text-[#C6C6C6] my-2">10/10</p>
                <p className="text-[#C6C6C6] my-2">05/10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-[1px] border-[#C6C6C6] rounded-[2px] bg-[#FFFF] mt-5 max-h-[420px]">
          <div className="mx-2 my-2">
            <h2 className="text-[#000]">Device Status</h2>
          </div>
          <div className="relative overflow-x-auto overflow-y-auto max-h-[200px]">
            <table className="w-full text-sm text-left text-[#C6C6C6]">
              <thead className="text-xs text-[#C6C6C6]">
                <tr>
                  <th scope="col" className="px-1">
                    Device Name
                  </th>
                  <th scope="col" className="px-6 text-center">
                    Status
                  </th>
                  <th scope="col" className="px-1 text-center">
                    Last Response
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[red] text-white flex justify-center items-center w-[65px] h-7">
                     Offline
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
                  </td>
                </tr>
                <tr className="bg-white border-b text-[#545454]">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium text-[#545454] whitespace-nowrap text-ellipsis"
                  >
                    Test Device 01
                  </th>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    <button className="rounded-lg bg-[#009421] text-white flex justify-center items-center w-[65px] h-7">
                      Online
                    </button>
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap text-ellipsis">
                    Web Apr 26 2023 ; 03:00:10
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

export default General;
