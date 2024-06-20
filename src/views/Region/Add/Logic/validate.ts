import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    phone: yup.string().required("Majbiriy maydon"),
    start: yup.string().required("Majbiriy maydon"),
  });
};
