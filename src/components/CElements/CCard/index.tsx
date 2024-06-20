import { ReactNode } from "react";

interface Props {
  classes?: string;
  children?: ReactNode;
  style?: any;
  title?: string;
  footer?: ReactNode;
  extra?: ReactNode;
}

const CCard = ({
  classes = "",
  style,
  children,
  title = "",
  footer,
  extra,
}: Props) => {
  return (
    <div
      className={`bg-white rounded-[18px] min-h-[200px] border border-[var(--gray20)] common-shadow ${classes}`}
      style={style}
    >
      {title ? (
        <div className="p-5 border-b border-[var(--gray20)] flex justify-between items-center">
          <h2 className="text-lg font-medium">{title}</h2>
          <div>{extra}</div>
        </div>
      ) : (
        ""
      )}
      <div className="p-5">{children}</div>
      {footer ? (
        <div className="p-5 border-t border-[var(--gray20)]">{footer}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CCard;
