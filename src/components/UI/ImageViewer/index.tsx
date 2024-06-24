import CancelIcon from "@mui/icons-material/Cancel";
import { Closer } from "../Closer";

interface Props {
  url: string;
  closeViewer: () => void
}

export const ImageViewer = ({ url, closeViewer = () => {} }: Props) => {
  if (!url) return "";

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[var(--black100)] z-[99] flex items-center justify-center">
      <img src={url} alt="image viewer photo" className="max-h-[90vh]" />

      <button
        onClick={() => closeViewer()}
        className="absolute right-10 top-10"
      >
        <CancelIcon style={{ color: "var(--gray20)", fontSize: 34 }} />
      </button>

      <Closer handleClose={() => closeViewer()} />
    </div>
  );
};
