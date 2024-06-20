import { useRef, useState } from "react";
import fileService from "../../../services/fileService";
import CancelIcon from "@mui/icons-material/Cancel";
import { ImageData } from "./Logic";
import { ImageViewer } from "../../../components/UI/ImageViewer";

interface Props {
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  classes?: string;
  onChange?: (val?: any) => void;
  setValue?: (val?: any, val2?: any) => void;
}

const CImageUpload = ({
  isDelete = true,
  defaultValue = "",
  name,
  classes = "",
  onChange = () => {},
  setValue = () => {},
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
        setImage(res?.data?.data?.original_url);
        onChange(res?.data?.data?.id);
        setValue(name, res?.data?.data?.id);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
  };

  const { customIcon } = ImageData();
  const [viewer, setViewer] = useState(false);
  return (
    <div
      onClick={() => {
        if (!image) inputRef.current.click();
      }}
      className={`border border-[var(--gray20)] relative rounded-[100%] w-[150px] h-[150px] overflow-hidden bg-[var(--gray20)] flex items-center justify-center cursor-pointer group ${classes}`}
    >
      {defaultValue || (image && !loading) ? (
        <img
          className="w-full h-full object-cover"
          src={image ? `${image}` : defaultValue}
          alt={defaultValue || "image"}
        />
      ) : (
        ""
      )}
      <div
        className={`z-[2] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ${
          image
            ? "w-full h-full bg-[var(--black50)] flex items-center justify-center invisible group-hover:visible"
            : ""
        }`}
        onClick={() => {
          if (image) {
            setViewer(true);
          }
        }}
      >
        {customIcon(loading, image)}
      </div>
      {isDelete && image ? (
        <button
          onClick={(e) => deleteImage(e)}
          className="absolute right-2 top-2 z-[3]"
        >
          <CancelIcon style={{ color: "var(--gray20)" }} />
        </button>
      ) : (
        ""
      )}
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        accept=".jpg, .jpeg, .png, .svg"
        onChange={inputChangeHandler}
      />
      {viewer && <ImageViewer url={image} closeViewer={() => setViewer(false)} />}
    </div>
  );
};

export default CImageUpload;
