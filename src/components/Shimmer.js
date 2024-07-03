import React from "react";

const Shimmer = ({ search = false }) => {
  return (
    <>
      {Array(25)
        .fill("")
        .map((item, index) => (
          <div key={index}>
            <div className={`flex ${search ? "flex-row" : "flex-col"}`}>
              <div
                className={`h-48 bg-gray-200 rounded-xl ${
                  search ? "w-[35%] m-4" : "w-full"
                }`}
              ></div>
              <div className={`flex gap-3 py-1 ${search ? "w-[40%] m-6" : ""}`}>
                <p
                  className={`h-12 w-14 bg-gray-200 rounded-full ${
                    search ? "mt-6" : ""
                  }`}
                ></p>
                <div className="flex flex-col w-full">
                  <p className="py-3 mr-6 my-2 bg-gray-200 rounded-md"></p>
                  <p className="p-3 mr-16 my-2 bg-gray-200 rounded-md"></p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
