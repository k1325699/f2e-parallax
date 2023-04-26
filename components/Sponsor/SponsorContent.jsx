import Image from 'next/image';
import sponsor from '@/public/assets/btn/btn_sponsor.png';

const Tag = ({ children }) => {
  return (
    <p className="highlight text-secondary-dark px-6 py-1 border-[2px] border-secondary-dark rounded-full ">
      {children}
    </p>
  );
};
const SponsorContent = ({
  title,

  image,

  className = '',
}) => {
  return (
    <div
      className={`relative text-center flex flex-col items-center  mr-[125.5px] last:mr-0  ${className}`}
    >
      <div className="relative bg-sponsor bg-cover w-[270px] h-[270px] flex justify-center items-center mb-4">
        <Image src={image} alt={`${title} icon`} width={214} className={``} />
      </div>
      <Tag>#{title}</Tag>
    </div>
  );
};

export default SponsorContent;
