import { ManIcon, UserIcon, WomenIcon } from "../IconGenerator/Svg";

const ImageFrame = ({
  image = "",
  gender = "",
}: {
  image: any;
  classes?: string;
  gender?: string;
}) => {
  return (
    <div className=" relative">
      <div className={` flex items-center justify-center`}>
        {image ? (
          <div className="w-[40px] h-[40px]">
            <img
              className="rounded-[8px] block object-cover w-[40px] h-[40px]"
              src={image}
              alt={"image"}
            />
          </div>
        ) : (
          <UserIcon />
        )}
        {gender && (
          <div className="absolute right-[-5px] bottom-[-5px] w-[20px] h-[20px] p-[2px] rounded-full bg-white border border-border flex items-center justify-center">
            {gender === "m" ? <ManIcon /> : <WomenIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageFrame;
