import Image from 'next/image';
import joinHandIcon from '@/public/assets/btn/btn_joinHand.png';

const Tag = ({ children }) => {
  return (
    <p className="highlight text-secondary-dark px-6 py-1 border-[2px] border-secondary-dark rounded-full mr-3 last:mr-0">
      {children}
    </p>
  );
};
const TopicContent = ({
  title,
  position = 'left',
  topic,
  company,
  link,
  index,
  image,
  className = '',
}) => {
  return (
    <div
      className={`w-[80%] flex justify-start mb-8 ${
        position === 'left' ? '' : 'flex-row-reverse'
      } items-start   ${className}`}
    >
      <Image
        src={image}
        alt={'主題照片'}
        width={280}
        height={190}
        className="a"
      />
      <div className="">
        <h2 className="text-highlight mb-2">WEEk{index}</h2>
        <h3 className="text-primary mb-4">{title}</h3>
        <div className="flex mb-5">
          <Tag>{topic}</Tag>
          <Tag>#{company}</Tag>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-gray-0 py-1 px-6 bg-secondary-dark rounded-full"
        >
          查看關卡細節
        </a>
      </div>
    </div>
  );
};

export default TopicContent;
