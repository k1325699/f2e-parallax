import Image from 'next/image';
import joinHandIcon from '@/public/assets/btn/btn_joinHand.png';

const ThemeContent = ({ title, className = '' }) => {
  return (
    <div
      className={` flex justify-center items-center flex-col w-1/3 group  ${className}`}
    >
      <Image
        src={joinHandIcon}
        alt={'報名按鈕'}
        width={57}
        height={71}
        className="animate-hand invisible group-hover:visible duration-0 "
      />
      <div className="bg-joinButton bg-cover w-[103px] h-[60px] relative "></div>
      <h4 className="mt-[16px] text-primary">{title}</h4>
    </div>
  );
};

export default ThemeContent;
