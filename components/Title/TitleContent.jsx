import Image from "next/image";

import userIcon from "@/public/assets/ic/ic_users.svg";

const TitleContent = ({ title, number }) => {
  return (
    <div className=" flex justify-center items-center flex-col w-1/3">
      <h5 className="text-primary mb-2">{title}</h5>
      <div className="flex items-center py-1 px-7 rounded-full bg-primary ">
        <Image src={userIcon} alt={"user Icon"} width={22} className="mr-3" />
        <span className="text-gray-0 ">{number}</span>
      </div>
    </div>
  );
};

export default TitleContent;
