import Image from 'next/image';

const TroubledContent = ({ title, image, alt, className = '' }) => {
  return (
    <div
      className={` flex justify-center items-center flex-col w-1/3  ${className}`}
    >
      <h4 className="text-highlight">{title}</h4>
      <div
        className="relative max-w-1/3 "
        style={{
          width: 'calc((100vh - 451px)*1.244)',
          maxWidth: '100%',
        }}
      >
        <Image src={image} alt={alt} />
      </div>
    </div>
  );
};

export default TroubledContent;
