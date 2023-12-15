import React from "react";

import { Img, List } from "components";

const SuccessPaymentPageOnePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-50_02 flex flex-col items-center justify-end p-32 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mt-[7px] w-[33%] md:w-full">
            <Img
              className="h-[30px]"
              src="images/img_vector.svg"
              alt="vector"
            />
            <Img
              className="h-16 mt-[21px]"
              src="images/img_vector_red_900_02.svg"
              alt="vector_One"
            />
            <div className="flex flex-col gap-[37px] items-center justify-start mt-3.5 w-[69%] md:w-full">
              <Img
                className="h-[30px]"
                src="images/img_vector_blue_gray_500_01.svg"
                alt="vector_Two"
              />
              <div className="h-60 relative w-60">
                <Img
                  className="h-60 m-auto object-cover w-60"
                  src="images/img_vector_240x240.png"
                  alt="vector_Three"
                />
                <Img
                  className="absolute h-[198px] inset-[0] justify-center m-auto object-cover w-[198px]"
                  src="images/img_vector_198x198.png"
                  alt="vector_Four"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-9 w-full">
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start w-[76%]"
                    style={{ backgroundImage: "url('images/img_group6.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-start p-[17px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <Img
                        className="h-3 my-0.5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                  <div className="bg-red-900_02 flex flex-col items-center justify-start p-[17px] rounded-md w-[22%]">
                    <Img
                      className="h-[13px]"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_One"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start w-[76%]"
                    style={{ backgroundImage: "url('images/img_group6.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-start p-4 w-full"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <Img
                        className="h-[11px] my-0.5"
                        src="images/img_settings_blue_gray_300_01.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                  <div className="bg-red-900_02 flex flex-col items-center justify-start p-[17px] rounded-md w-[22%]">
                    <Img
                      className="h-[13px]"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_One"
                    />
                  </div>
                </div>
              </List>
              <div className="bg-red-900_02 flex flex-col items-center justify-end mt-14 p-[15px] rounded-md w-full">
                <Img
                  className="h-[18px] mt-0.5"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_Five"
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start mt-2 w-full"
                style={{ backgroundImage: "url('images/img_group8.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start p-[18px] w-full"
                  style={{ backgroundImage: "url('images/img_group11.svg')" }}
                >
                  <Img
                    className="h-[13px]"
                    src="images/img_settings_blue_gray_800_01.svg"
                    alt="settings"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPaymentPageOnePage;
