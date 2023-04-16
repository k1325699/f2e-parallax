import Image from "next/image";
import start from "@/public/assets/main/start.png";
import red from "@/public/assets/main/ready_3.png";
import yellow from "@/public/assets/main/ready_2.png";
import green from "@/public/assets/main/ready_1.png";
import logoText from "@/public/assets/logo/logo_text.png";
const Title = () => {
  return (
    <div className="">
      <Image
        src={start}
        alt={"start"}
        width={1430}
        height={1080}
        className="fixed left-1/2 top-0 -translate-x-1/2"
      />
      <Image
        src={logoText}
        alt={"logo"}
        width={680}
        className="fixed left-1/2 top-[44px] -translate-x-1/2"
      />
      {/* 紅綠燈 */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <p className="highlight text-highlight tracking-m">READY?</p>
        <div className="bg-trafficLights bg-cover w-[275px] h-[108px] relative">
          <Image
            src={red}
            alt={"紅燈"}
            width={49}
            height={49}
            className="absolute left-[12.5%] top-1/2 -translate-y-1/2"
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
