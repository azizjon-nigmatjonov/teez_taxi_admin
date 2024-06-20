import "./style.scss";
import emptyImage from "/images/website/no-data.png";

const EmptyDataComponent = ({ title = "Ma'lumot mavjud emas", isVisible }: { title?: string; isVisible?: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="EmptyDataComponent">
      <div className="block">
        <div className="icon">
          <img src={emptyImage} alt="emptyImage" />
        </div>
        <p className="text text-[var(--black)]">{title}</p>
      </div>
    </div>
  );
};

export default EmptyDataComponent;
