import Image from 'next/image';
import joinHandIcon from '@/public/assets/btn/btn_joinHand.png';

const ContestContent = ({
  title,
  startContest,
  endContest,
  image = '',
  children,
  height,
  className = '',
}) => {
  return (
    <div
      className={`relative text-center flex flex-col items-center w-1/3  ${className}`}
    >
      <div
        className="absolute bottom-[calc(100%+9px)] left-1/2 -translate-x-1/2
      "
      >
        {image ? (
          <Image src={image} alt={`${title} icon`} width={140} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-hand bg-HandIcon w-[57px] h-[71px] bg-cover"></div>
            <a
              className="bg-joinButton  w-[103px] block h-[60px] bg-cover"
              href="https://2022.thef2e.com/signup"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        )}
      </div>
      <h2 className="text-highlight mb-3">{title}</h2>
      <h4 className="py-2 px-[28px] text-gray-0 bg-primary rounded-full">
        {startContest + '-' + endContest}
      </h4>
      <div className="text-secondary-dark">{children}</div>
      <div
        className={`absolute top-[100%] bg-dateWeekLine  bg-bottom bg-[length:32px_140px] bg-no-repeat w-[32px] ${height}`}
      ></div>
    </div>
  );
};

export default ContestContent;
