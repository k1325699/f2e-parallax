import Image from "next/image";
import userIcon from "@/public/assets/btn/btn_user.png";
import joinHandIcon from "@/public/assets/btn/btn_joinHand.png";
import mapNowIcon from "@/public/assets/main/map_now.gif";
import road from "@/public/assets/main/road.png";
import dog from "@/public/assets/character/dog.gif";
import pig from "@/public/assets/character/pig.gif";
import cat from "@/public/assets/character/cat.gif";
import { useEffect, useRef, useState } from "react";
import { mapNow } from "@/styles/parallaxStyle";
import Title from "@/components/Title";
import { imageLength, lengthStyle, logoWidth } from "@/styles/lengthStyle";

const Home = () => {
  const [mapNowIndex, setMapNowIndex] = useState(0);
  return (
    <div className="bg-secondary min-h-screen">
      {/* user */}
      <a
        className="fixed right-[15px] top-[30px] z-50"
        href={"https://2022.thef2e.com/users"}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={userIcon} alt={"userIcon"} width={80} height={80} />
      </a>
      <Title />
      {/* 腳色 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2" style={{}}>
        <Image src={road} alt={"跑道"} width={1175} h={135.5} />
        <div
          className="absolute bottom-0 left-1/2  -translate-x-[150%]"
          style={{
            height: `calc(${imageLength.dogHeight})`,
            width: `calc((${imageLength.dogHeight})*0.584)`,
          }}
        >
          <Image
            src={dog}
            alt={"狗狗"}
            // height="5vh"
            // width={351}
            // h={601}
            fill
            // sizes="15vw"
            className=""
          />
        </div>
        <div
          className="absolute  bottom-0 left-1/2  translate-x-1/2"
          style={{
            height: `calc(${imageLength.pigHeight})`,
            width: `calc((${imageLength.pigHeight})*0.666)`,
          }}
        >
          <Image
            src={pig}
            alt={"豬豬"}
            // width={351}
            // h={527}
            fill
            // className="absolute bottom-0 left-[100%] -translate-x-[100%]"
          />
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            height: `calc(${imageLength.dogHeight})`,
            width: `calc((${imageLength.dogHeight})*0.61564)`,
          }}
        >
          <Image
            src={cat}
            alt={"貓貓"}
            // width={370}
            // h={601}
            fill
            // className="absolute bottom-0 left-1/2 -translate-x-1/2 "
          />
        </div>
      </div>
      {/* map */}
      <div className="bg-map fixed w-[260px] h-[170px] left-[30px] bottom-[20px]">
        <Image
          className="absolute "
          src={mapNowIcon}
          alt={"現在位置"}
          width={30}
          height={30}
          style={mapNow[mapNowIndex]}
        />
      </div>
      {/* join Button */}
      <div className="fixed right-[15px] bottom-[20px] highlight flex flex-col items-center justify-center">
        <p className="tracking-m text-primary mb-[4px]">JOIN</p>
        <Image
          src={joinHandIcon}
          alt={"報名按鈕"}
          width={57}
          height={71}
          className="animate-hand"
        />
        <a
          className="bg-joinButton hover:bg-joinButtonHover w-[103px] block h-[60px] bg-cover"
          href="https://2022.thef2e.com/signup"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
};
export default Home;
