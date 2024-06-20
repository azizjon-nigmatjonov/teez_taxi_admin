import { useEffect, useRef, useState } from "react";
import { ImageFrame } from "../../IconGenerator/Svg";
import fileService from "../../../../services/fileService";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress } from "@mui/material";
import CLabel from "../../../CElements/CLabel";

interface Props {
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  text?: string;
  label?: string;
  readOnly?: boolean;
  setValue?: (val?: any, val2?: any) => void;
}

const ImageUploadBtn = ({
  isDelete = false,
  defaultValue = "",
  name,
  setValue = () => { },
  text = "",
  readOnly = false,
  label = "",
}: Props) => {
  const inputRef: any = useRef(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    
    fileService
      .upload(data)
      .then((res: any) => {
        
        
        setValue(name, res?.data?.data?.id);
        
        setImage(res?.data?.data?.original_url);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
  };
  

  // useEffect(() => {
  //   if (defaultValue) setValue(name, defaultValue);
  // }, [defaultValue]);

  return (
    <div className="flex flex-col">
      {label ? <CLabel title={label} /> : ""}
      <div
        onClick={() => {
          if (!readOnly) inputRef.current.click()
        }}
        className="cursor-pointer flex items-center justify-between px-[14px] text-[var(--gray)] font-medium border border-[var(--lineGray)] rounded-[10px] h-[50px]"
      >
        <span>{text}</span>
        {defaultValue || (image && !loading) ? (
          <img
            className="h-[48px] rounded-[4px]"
            src={
              image
                ? image
                : defaultValue
            }
            alt={defaultValue || "image"}
          />
        ) : loading ? (
          <CircularProgress />
        ) : (
          <ImageFrame />
        )}

        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={inputChangeHandler}
        />

        {isDelete ? (
          <button onClick={(e) => deleteImage(e)}>
            <CancelIcon />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ImageUploadBtn;
