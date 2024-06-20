import { ReactNode, useImperativeHandle, FormEvent, useRef } from "react";
interface Props {
  formRef?: any;
  handleSubmit?: (val?: any) => void;
  submit?: (val: any) => void;
  styles?: any;
  children?: ReactNode;
}

const HFormWrapper = ({
  formRef,
  handleSubmit = () => {},
  styles = {},
  children,
}: Props) => {
  const internalFormRef = useRef<HTMLFormElement>(null); 
  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(); // Call handleSubmit when the form is submitted
  };

  useImperativeHandle(formRef, () => ({
    submitForm() {
      internalFormRef.current?.submit()
    },
  }));

  return (
    <form onSubmit={onSubmit} ref={formRef} style={{ ...styles }}>
      {children}
    </form>
  );
};

export default HFormWrapper;
