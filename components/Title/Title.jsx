import Image from "next/image";
import start from "@/public/assets/main/start.png";
import red from "@/public/assets/main/ready_3.png";
import yellow from "@/public/assets/main/ready_2.png";
import green from "@/public/assets/main/ready_1.png";
import logoText from "@/public/assets/logo/logo_text.png";
import TitleContent from "./TitleContent";
import { logoWidth } from "@/styles/lengthStyle";
import { useState } from "react";
// const lengthStyle = {
//   logoWidth: "35.4vw",
// };
const titleContentData = [
  { title: "前端工程師", number: 920 },
  { title: "UI設計師", number: 110 },
  { title: "團體組", number: 41 },
];
const Title = () => {
  // const [,set]=useState(0)
  return (
    <div className="h-[150vh]">
      <Image
        src={start}
        alt={"start"}
        width={1430}
        height={1080}
        className="fixed left-1/2 top-0 -translate-x-1/2"
      />
      <div className="fixed left-1/2 top-[44px] -translate-x-1/2 flex flex-col items-center">
        <div
          className={`relative  max-w-[680px] max-h-[236.03px]`}
          style={{
            width: logoWidth,
            height: `calc(${logoWidth} * 0.3471)`,
          }}
        >
          <Image
            src={logoText}
            alt={"logo"}
            fill
            // width={680} className=" "
          />
        </div>
        {/* 文字說明 */}
        <div className="flex flex-col items-center">
          <h1 className="text-gray-0 py-[8px] px-[40px] rounded-full bg-highlight inline-block mb-[47px]">
            互動式網頁設計
          </h1>
          <div className="flex w-[60vw]">
            {titleContentData.map(({ title, number }, i) => (
              <TitleContent title={title} number={number} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* 紅綠燈 */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <p className="highlight text-highlight tracking-m">READY?</p>
        <div className="bg-trafficLights bg-cover w-[275px] h-[108px] relative">
          <Image
            src={red}
            alt={"紅燈"}
            width={49}
            height={49}
            className="absolute left-[12.5%] top-[52%] -translate-y-1/2"
          />
          <Image
            src={yellow}
            alt={"黃燈"}
            width={49}
            height={49}
            className="absolute left-[36%] top-1/2 -translate-y-1/2"
          />
          <Image
            src={green}
            alt={"綠燈"}
            width={49}
            height={49}
            className="absolute left-[60%] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
