import { ColorConstants } from "../../../../constants/website";

interface ArrowIconProps {
  isOpen: boolean;
}

export const ExcelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="24px"
    height="24px"
    fill="#0a8245"
  >
    <path d="M 28.8125 0.03125 L 0.8125 5.34375 C 0.339844 5.433594 0 5.863281 0 6.34375 L 0 43.65625 C 0 44.136719 0.339844 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.296875 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.394531 0.0273438 29.105469 -0.0234375 28.8125 0.03125 Z M 32 6 L 32 13 L 34 13 L 34 15 L 32 15 L 32 20 L 34 20 L 34 22 L 32 22 L 32 27 L 34 27 L 34 29 L 32 29 L 32 35 L 34 35 L 34 37 L 32 37 L 32 44 L 47 44 C 48.101563 44 49 43.101563 49 42 L 49 8 C 49 6.898438 48.101563 6 47 6 Z M 36 13 L 44 13 L 44 15 L 36 15 Z M 6.6875 15.6875 L 11.8125 15.6875 L 14.5 21.28125 C 14.710938 21.722656 14.898438 22.265625 15.0625 22.875 L 15.09375 22.875 C 15.199219 22.511719 15.402344 21.941406 15.6875 21.21875 L 18.65625 15.6875 L 23.34375 15.6875 L 17.75 24.9375 L 23.5 34.375 L 18.53125 34.375 L 15.28125 28.28125 C 15.160156 28.054688 15.035156 27.636719 14.90625 27.03125 L 14.875 27.03125 C 14.8125 27.316406 14.664063 27.761719 14.4375 28.34375 L 11.1875 34.375 L 6.1875 34.375 L 12.15625 25.03125 Z M 36 20 L 44 20 L 44 22 L 36 22 Z M 36 27 L 44 27 L 44 29 L 36 29 Z M 36 35 L 44 35 L 44 37 L 36 37 Z" />
  </svg>
);

export const LineChartBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 962 310"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.1">
      <path
        d="M21.8017 62.8223L0 68.374V309.458H962V0.936523L941.561 10.157H919.759L909.54 18.7907H895.914C892.28 20.2296 884.74 23.1075 883.65 23.1075C882.56 23.1075 875.475 24.8342 872.068 25.6976L842.772 28.2877L825.739 31.7412L798.487 28.2877L784.18 25.6976L763.741 31.7412H742.62L724.907 25.6976C718.094 24.8342 704.195 23.1075 703.105 23.1075C702.015 23.1075 693.112 21.3808 688.797 20.5174H677.897L652.007 23.1075L629.524 25.6976L619.305 31.7412L588.646 34.3313L572.976 36.9214L555.262 41.2382L538.229 51.5986H530.735L510.296 49.0085L490.538 41.2382L473.506 36.9214H463.286L445.572 34.3313L420.364 36.9214H396.518L372.673 41.2382L348.827 46.4184L331.113 51.5986L312.037 54.1887L286.147 51.5986L265.708 54.1887L245.269 56.7788L226.193 54.1887L200.303 60.2322L178.501 56.7788L156.7 60.2322H135.579L113.096 62.8223H89.932L66.7677 65.4124L44.2847 60.2322L21.8017 62.8223Z"
        fill="url(#paint0_linear_7209_73620)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_7209_73620"
        x1="481"
        y1="0.936523"
        x2="481"
        y2="242.155"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC4901" />
        <stop offset="1" stopColor="#CC4901" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
export const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 6C11 8.76 8.76 11 6 11C3.24 11 1 8.76 1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6Z"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.85641 7.58988L6.30641 6.66488C6.03641 6.50488 5.81641 6.11988 5.81641 5.80488V3.75488"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneIcon = ({ stroke = "white" }: { stroke?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3096 15.2753C18.3096 15.5753 18.243 15.8837 18.1013 16.1837C17.9596 16.4837 17.7763 16.767 17.5346 17.0337C17.1263 17.4837 16.6763 17.8087 16.168 18.017C15.668 18.2253 15.1263 18.3337 14.543 18.3337C13.693 18.3337 12.7846 18.1337 11.8263 17.7253C10.868 17.317 9.90964 16.767 8.95964 16.0753C8.0013 15.3753 7.09297 14.6003 6.2263 13.742C5.36797 12.8753 4.59297 11.967 3.9013 11.017C3.21797 10.067 2.66797 9.11699 2.26797 8.17533C1.86797 7.22533 1.66797 6.31699 1.66797 5.45033C1.66797 4.88366 1.76797 4.34199 1.96797 3.84199C2.16797 3.33366 2.48464 2.86699 2.9263 2.45033C3.45964 1.92533 4.04297 1.66699 4.65964 1.66699C4.89297 1.66699 5.1263 1.71699 5.33464 1.81699C5.5513 1.91699 5.74297 2.06699 5.89297 2.28366L7.8263 5.00866C7.9763 5.21699 8.08464 5.40866 8.15964 5.59199C8.23464 5.76699 8.2763 5.94199 8.2763 6.10033C8.2763 6.30033 8.21797 6.50033 8.1013 6.69199C7.99297 6.88366 7.83464 7.08366 7.63464 7.28366L7.0013 7.94199C6.90964 8.03366 6.86797 8.14199 6.86797 8.27533C6.86797 8.34199 6.8763 8.40033 6.89297 8.46699C6.91797 8.53366 6.94297 8.58366 6.95964 8.63366C7.10964 8.90866 7.36797 9.26699 7.73464 9.70033C8.10964 10.1337 8.50964 10.5753 8.94297 11.017C9.39297 11.4587 9.8263 11.867 10.268 12.242C10.7013 12.6087 11.0596 12.8587 11.343 13.0087C11.3846 13.0253 11.4346 13.0503 11.493 13.0753C11.5596 13.1003 11.6263 13.1087 11.7013 13.1087C11.843 13.1087 11.9513 13.0587 12.043 12.967L12.6763 12.342C12.8846 12.1337 13.0846 11.9753 13.2763 11.8753C13.468 11.7587 13.6596 11.7003 13.868 11.7003C14.0263 11.7003 14.193 11.7337 14.3763 11.8087C14.5596 11.8837 14.7513 11.992 14.9596 12.1337L17.718 14.092C17.9346 14.242 18.0846 14.417 18.1763 14.6253C18.2596 14.8337 18.3096 15.042 18.3096 15.2753Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.97396 18.3337C14.5763 18.3337 18.3073 14.6027 18.3073 10.0003C18.3073 5.39795 14.5763 1.66699 9.97396 1.66699C5.37159 1.66699 1.64062 5.39795 1.64062 10.0003C1.64062 14.6027 5.37159 18.3337 9.97396 18.3337Z"
      stroke="#475467"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.28516 10.1912V8.79953C7.28516 7.0662 8.51016 6.35787 10.0102 7.22453L11.2185 7.92453L12.4268 8.62453C13.9268 9.4912 13.9268 10.9079 12.4268 11.7745L11.2185 12.4745L10.0102 13.1745C8.51016 14.0412 7.28516 13.3329 7.28516 11.5995V10.1912Z"
      stroke="#475467"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ListIcon = ({ stroke = "#98A2B3" }: { stroke?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66797 1.66699V4.16699"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.332 1.66699V4.16699"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66797 9.16699H13.3346"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66797 13.333H10.0013"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 11.875V16.25C17.5 16.5815 17.3683 16.8995 17.1339 17.1339C16.8995 17.3683 16.5815 17.5 16.25 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V11.875C2.5 11.7092 2.56585 11.5503 2.68306 11.4331C2.80027 11.3158 2.95924 11.25 3.125 11.25C3.29076 11.25 3.44973 11.3158 3.56694 11.4331C3.68415 11.5503 3.75 11.7092 3.75 11.875V16.25H16.25V11.875C16.25 11.7092 16.3158 11.5503 16.4331 11.4331C16.5503 11.3158 16.7092 11.25 16.875 11.25C17.0408 11.25 17.1997 11.3158 17.3169 11.4331C17.4342 11.5503 17.5 11.7092 17.5 11.875ZM9.55781 12.3172C9.61586 12.3753 9.68479 12.4214 9.76066 12.4529C9.83654 12.4843 9.91787 12.5005 10 12.5005C10.0821 12.5005 10.1635 12.4843 10.2393 12.4529C10.3152 12.4214 10.3841 12.3753 10.4422 12.3172L13.5672 9.19219C13.6253 9.13412 13.6713 9.06518 13.7027 8.98931C13.7342 8.91344 13.7503 8.83212 13.7503 8.75C13.7503 8.66788 13.7342 8.58656 13.7027 8.51069C13.6713 8.43482 13.6253 8.36588 13.5672 8.30781C13.5091 8.24974 13.4402 8.20368 13.3643 8.17225C13.2884 8.14083 13.2071 8.12465 13.125 8.12465C13.0429 8.12465 12.9616 8.14083 12.8857 8.17225C12.8098 8.20368 12.7409 8.24974 12.6828 8.30781L10.625 10.3664V3.125C10.625 2.95924 10.5592 2.80027 10.4419 2.68306C10.3247 2.56585 10.1658 2.5 10 2.5C9.83424 2.5 9.67527 2.56585 9.55806 2.68306C9.44085 2.80027 9.375 2.95924 9.375 3.125V10.3664L7.31719 8.30781C7.19991 8.19054 7.04085 8.12465 6.875 8.12465C6.70915 8.12465 6.55009 8.19054 6.43281 8.30781C6.31554 8.42509 6.24965 8.58415 6.24965 8.75C6.24965 8.91585 6.31554 9.07491 6.43281 9.19219L9.55781 12.3172Z"
      fill="#475467"
    />
  </svg>
);

export const SearchIcon = ({ fill = "#9092A3" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 16.5L15 15"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DotsIcon = ({ fill = "#9092A3" }) => (
  <svg
    width="17"
    height="4"
    viewBox="0 0 17 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6082 2.33784H14.633"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.1958 2.33784H8.21235"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.23682 2.33784H2.25336"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NotificationIcon = ({ fill = "#858592" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.44V9.77"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65004 21.17C9.05004 20.57 8.67004 19.73 8.67004 18.82"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export const ArrowDownFilled = ({ fill = "#858592" }: { fill?: string }) => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.92 0.18H6.68999H1.07999C0.119992 0.18 -0.360007 1.34 0.319993 2.02L5.49999 7.2C6.32999 8.03 7.67999 8.03 8.50999 7.2L10.48 5.23L13.69 2.02C14.36 1.34 13.88 0.18 12.92 0.18Z"
      fill={fill}
    />
  </svg>
);

export const PlusIcon = ({ fill = "white" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 9H13.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.5V4.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = ({
  fill = "white",
  width = 18,
}: {
  fill?: string;
  width?: number;
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.94501 2.70041L3.78751 9.21791C3.55501 9.46541 3.33001 9.95291 3.28501 10.2904L3.00751 12.7204C2.91001 13.5979 3.54001 14.1979 4.41001 14.0479L6.82501 13.6354C7.16251 13.5754 7.63501 13.3279 7.86751 13.0729L14.025 6.55541C15.09 5.43041 15.57 4.14791 13.9125 2.58041C12.2625 1.02791 11.01 1.57541 9.94501 2.70041Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.91748 3.78711C9.23998 5.85711 10.92 7.43961 13.005 7.64961"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.25 16.5H15.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeleteIcon = ({ fill = "#E82F0F" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.74756 12.375H10.2451"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.125 9.375H10.875"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({
  width = 20,
  fill = ColorConstants.black,
}: {
  width?: number;
  fill?: string;
  className?: any;
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.48">
      <path
        d="M6 14L14 6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14L6 6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const CarIcon = ({ fill = "#667085" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6325 2.1225H6.3675C4.5 2.1225 4.0875 3.0525 3.8475 4.1925L3 8.25H15L14.1525 4.1925C13.9125 3.0525 13.5 2.1225 11.6325 2.1225Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4925 14.865C16.575 15.7425 15.87 16.5 14.97 16.5H13.56C12.75 16.5 12.6375 16.155 12.495 15.7275L12.345 15.2775C12.135 14.6625 12 14.25 10.92 14.25H7.08005C6.00005 14.25 5.84255 14.715 5.65505 15.2775L5.50505 15.7275C5.36255 16.155 5.25005 16.5 4.44005 16.5H3.03005C2.13005 16.5 1.42505 15.7425 1.50755 14.865L1.92755 10.2975C2.03255 9.1725 2.25005 8.25 4.21505 8.25H13.785C15.75 8.25 15.9675 9.1725 16.0725 10.2975L16.4925 14.865Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H2.25"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 6H15"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 2.25V3.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 3.75H10.125"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 11.25H6.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 11.25H13.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExchangeIcon = ({ fill = "#DD431F" }: { fill?: string }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM22.3125 17.625C22.2625 17.7375 22.2 17.8375 22.1125 17.925L18.3125 21.725C18.125 21.9125 17.8875 22 17.65 22C17.4125 22 17.175 21.9125 16.9875 21.725C16.625 21.3625 16.625 20.7625 16.9875 20.4L19.1875 18.2H8.5625C8.05 18.2 7.625 17.775 7.625 17.2625C7.625 16.75 8.05 16.325 8.5625 16.325H21.45C21.575 16.325 21.6875 16.35 21.8125 16.4C22.0375 16.5 22.225 16.675 22.325 16.9125C22.4 17.1375 22.4 17.4 22.3125 17.625ZM21.4375 13.6625H8.5625C8.4375 13.6625 8.3125 13.6375 8.2 13.5875C7.975 13.4875 7.7875 13.3125 7.6875 13.075C7.5875 12.85 7.5875 12.5875 7.6875 12.3625C7.7375 12.25 7.8 12.15 7.8875 12.0625L11.6875 8.2625C12.05 7.9 12.65 7.9 13.0125 8.2625C13.375 8.625 13.375 9.225 13.0125 9.5875L10.825 11.7875H21.45C21.9625 11.7875 22.3875 12.2125 22.3875 12.725C22.3875 13.2375 21.9625 13.6625 21.4375 13.6625Z"
      fill={fill}
    />
  </svg>
);

export const LockIcon = ({ fill = "white" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SaveIcon = ({
  fill = ColorConstants.ink,
  width = 24,
}: {
  fill?: string;
  width?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z" />
  </svg>
);

export const UserIconOutline = ({
  stroke = "var(--primary)",
}: {
  stroke?: string;
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2931 11C10.2931 9.065 8.36812 7.5 5.99812 7.5C3.62812 7.5 1.70312 9.065 1.70312 11"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon = ({
  fill = "#858592",
  width = 24,
}: {
  fill?: string;
  width?: number;
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16003 14.56C4.74003 16.18 4.74003 18.82 7.16003 20.43C9.91003 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92003 12.73 7.16003 14.56Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PasswordIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1017 18.875H7.87502C7.30669 18.875 6.80252 18.8567 6.35335 18.7925C3.94252 18.5267 3.29169 17.39 3.29169 14.2917V9.70833C3.29169 6.61 3.94252 5.47333 6.35335 5.2075C6.80252 5.14333 7.30669 5.125 7.87502 5.125H11.0467"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7684 5.125H16.125C16.6934 5.125 17.1975 5.14333 17.6467 5.2075C20.0575 5.47333 20.7084 6.61 20.7084 9.70833V14.2917C20.7084 17.39 20.0575 18.5267 17.6467 18.7925C17.1975 18.8567 16.6934 18.875 16.125 18.875H14.7684"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 2.83301V21.1663"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1701 12.0003H11.1783"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50359 12.0003H7.51182"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckLine = ({ fill = "white" }: { fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
      fill={fill}
    ></path>
  </svg>
);

export const WarningIcon = () => (
  <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
      fill={ColorConstants.main}
    ></path>
  </svg>
);

export const PhotoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6ZM10.5002 7.25H13.5002C13.9102 7.25 14.2502 7.59 14.2502 8C14.2502 8.41 13.9102 8.75 13.5002 8.75H10.5002C10.0902 8.75 9.75017 8.41 9.75017 8C9.75017 7.59 10.0902 7.25 10.5002 7.25ZM12.0002 18.12C10.1402 18.12 8.62017 16.61 8.62017 14.74C8.62017 12.87 10.1302 11.36 12.0002 11.36C13.8702 11.36 15.3802 12.87 15.3802 14.74C15.3802 16.61 13.8602 18.12 12.0002 18.12Z"
      fill="white"
    />
  </svg>
);

export const EyeIcon = ({ fill = "var(--gray20)", width = 18 }) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88501 16.5074 8.10751 15.8324 7.05001C14.1149 4.35001 11.6474 2.79001 8.99988 2.79001C6.35238 2.79001 3.88488 4.35001 2.16738 7.05001C1.49238 8.10751 1.49238 9.88501 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ImageFrame = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7275 6H13.5225C12.57 6 12 5.43 12 4.4775V2.2725C12 1.32 12.57 0.75 13.5225 0.75H15.7275C16.68 0.75 17.25 1.32 17.25 2.2725V4.4775C17.25 5.43 16.68 6 15.7275 6ZM15.8925 3.5175C15.8025 3.4275 15.6825 3.3825 15.5625 3.3825C15.4425 3.3825 15.3225 3.4275 15.2325 3.5175L15.0975 3.6525V1.9725C15.0975 1.71 14.8875 1.5 14.625 1.5C14.3625 1.5 14.1525 1.71 14.1525 1.9725V3.6525L14.0175 3.5175C13.8375 3.3375 13.5375 3.3375 13.3575 3.5175C13.1775 3.6975 13.1775 3.9975 13.3575 4.1775L14.295 5.115C14.3325 5.1525 14.385 5.1825 14.4375 5.205C14.4525 5.2125 14.4675 5.2125 14.4825 5.22C14.52 5.235 14.5575 5.2425 14.6025 5.2425C14.6175 5.2425 14.6325 5.2425 14.6475 5.2425C14.7 5.2425 14.745 5.235 14.7975 5.2125C14.805 5.2125 14.805 5.2125 14.8125 5.2125C14.865 5.19 14.91 5.16 14.9475 5.1225C14.955 5.115 14.955 5.115 14.9625 5.115L15.9 4.1775C16.08 3.9975 16.08 3.6975 15.8925 3.5175Z"
      fill="#AAACB9"
    />
    <path
      d="M6.74984 7.78509C7.73567 7.78509 8.53484 6.98592 8.53484 6.00009C8.53484 5.01426 7.73567 4.21509 6.74984 4.21509C5.76402 4.21509 4.96484 5.01426 4.96484 6.00009C4.96484 6.98592 5.76402 7.78509 6.74984 7.78509Z"
      fill="#AAACB9"
    />
    <path
      d="M15.7275 6H15.375V9.4575L15.2775 9.375C14.6925 8.8725 13.7475 8.8725 13.1625 9.375L10.0425 12.0525C9.4575 12.555 8.5125 12.555 7.9275 12.0525L7.6725 11.8425C7.14 11.3775 6.2925 11.3325 5.6925 11.7375L2.8875 13.62C2.7225 13.2 2.625 12.7125 2.625 12.1425V5.8575C2.625 3.7425 3.7425 2.625 5.8575 2.625H12V2.2725C12 1.9725 12.0525 1.7175 12.1725 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.1425C1.5 12.96 1.6425 13.6725 1.92 14.2725C2.565 15.6975 3.945 16.5 5.8575 16.5H12.1425C14.8725 16.5 16.5 14.8725 16.5 12.1425V5.8275C16.2825 5.9475 16.0275 6 15.7275 6Z"
      fill="#AAACB9"
    />
  </svg>
);

export const LogoutIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6 1.5H10.65C8.25 1.5 6.75 3 6.75 5.4V8.4375H11.4375C11.745 8.4375 12 8.6925 12 9C12 9.3075 11.745 9.5625 11.4375 9.5625H6.75V12.6C6.75 15 8.25 16.5 10.65 16.5H12.5925C14.9925 16.5 16.4925 15 16.4925 12.6V5.4C16.5 3 15 1.5 12.6 1.5Z"
      fill="white"
    />
    <path
      d="M3.42008 8.43751L4.97258 6.88501C5.08508 6.77251 5.13758 6.63 5.13758 6.4875C5.13758 6.345 5.08508 6.195 4.97258 6.09C4.75508 5.8725 4.39508 5.8725 4.17758 6.09L1.66508 8.60251C1.44758 8.82001 1.44758 9.18 1.66508 9.3975L4.17758 11.91C4.39508 12.1275 4.75508 12.1275 4.97258 11.91C5.19008 11.6925 5.19008 11.3325 4.97258 11.115L3.42008 9.56251H6.75008V8.43751H3.42008Z"
      fill="white"
    />
  </svg>
);

export const PartnersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="vuesax/linear/format-circle">
      <g id="format-circle">
        <path
          id="Vector"
          d="M14.3334 3.56699C14.3334 4.17366 14.0468 4.71366 13.6068 5.06033C13.2868 5.31366 12.8801 5.46699 12.4334 5.46699C11.3801 5.46699 10.5334 4.62033 10.5334 3.56699C10.5334 3.12033 10.6868 2.72033 10.9401 2.39366H10.9468C11.2868 1.95366 11.8268 1.66699 12.4334 1.66699C13.4868 1.66699 14.3334 2.51366 14.3334 3.56699Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M5.46675 3.56699C5.46675 4.62033 4.62008 5.46699 3.56675 5.46699C3.12008 5.46699 2.72008 5.31366 2.39341 5.06033C1.95341 4.71366 1.66675 4.17366 1.66675 3.56699C1.66675 2.51366 2.51341 1.66699 3.56675 1.66699C4.17341 1.66699 4.71342 1.95366 5.06008 2.39366C5.31342 2.72033 5.46675 3.12033 5.46675 3.56699Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M14.3334 12.4332C14.3334 13.4865 13.4868 14.3332 12.4334 14.3332C11.8268 14.3332 11.2868 14.0465 10.9468 13.6065H10.9401C10.6868 13.2865 10.5334 12.8799 10.5334 12.4332C10.5334 11.3799 11.3801 10.5332 12.4334 10.5332C12.8801 10.5332 13.2801 10.6865 13.6068 10.9399V10.9465C14.0468 11.2865 14.3334 11.8265 14.3334 12.4332Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M5.46675 12.4332C5.46675 12.8799 5.31342 13.2799 5.06008 13.6065C4.71342 14.0532 4.17341 14.3332 3.56675 14.3332C2.51341 14.3332 1.66675 13.4865 1.66675 12.4332C1.66675 11.8265 1.95341 11.2865 2.39341 10.9465V10.9399C2.71341 10.6865 3.12008 10.5332 3.56675 10.5332C4.62008 10.5332 5.46675 11.3799 5.46675 12.4332Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M14.3334 8.00033C14.3334 9.06699 14.0734 10.0603 13.6067 10.9403C13.2867 10.687 12.8801 10.5337 12.4334 10.5337C11.3801 10.5337 10.5334 11.3803 10.5334 12.4337C10.5334 12.8803 10.6867 13.2803 10.9401 13.607C10.0601 14.0737 9.06675 14.3337 8.00008 14.3337C6.94008 14.3337 5.94008 14.0737 5.06008 13.607C5.31341 13.287 5.46675 12.8803 5.46675 12.4337C5.46675 11.3803 4.62008 10.5337 3.56675 10.5337C3.12008 10.5337 2.72008 10.687 2.39341 10.9403C1.92675 10.0603 1.66675 9.06699 1.66675 8.00033C1.66675 6.94033 1.92675 5.94033 2.39341 5.06033C2.72008 5.31366 3.12008 5.46699 3.56675 5.46699C4.62008 5.46699 5.46675 4.62033 5.46675 3.56699C5.46675 3.12033 5.31341 2.72033 5.06008 2.39366C5.94008 1.92699 6.94008 1.66699 8.00008 1.66699C9.06675 1.66699 10.0601 1.92699 10.9401 2.39366C10.6867 2.71366 10.5334 3.12033 10.5334 3.56699C10.5334 4.62033 11.3801 5.46699 12.4334 5.46699C12.8801 5.46699 13.2801 5.31366 13.6067 5.06033C14.0734 5.94033 14.3334 6.94033 14.3334 8.00033Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const ArrowUp = ({ fill }: { fill?: any }) => (
  // <svg
  //   width="18"
  //   height="18"
  //   viewBox="0 0 18 18"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <rect opacity="0.1" y="0.5" width="36" height="36" rx="8" fill="#0BD976"/>
  //   <path
  //     d="M13.5523 7.1775L8.99977 2.625L4.44727 7.1775"
  //     stroke={fill}
  //     strokeWidth="2"
  //     strokeMiterlimit="10"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  //   <path
  //     d="M9 15.3749V2.75244"
  //     stroke={fill}
  //     strokeWidth="2"
  //     strokeMiterlimit="10"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  // </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
  >
    {fill && (
      <rect
        opacity="0.1"
        y="0.5"
        width="36"
        height="36"
        rx="8"
        fill="#0BD976"
      />
    )}
    <path
      d="M22.5523 16.6775L17.9998 12.125L13.4473 16.6775"
      stroke="#0BD976"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 24.8754V12.2529"
      stroke="#0BD976"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownOutline = ({
  width = 19,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1403 6.71289L10.2503 11.6029C9.67275 12.1804 8.72775 12.1804 8.15025 11.6029L3.26025 6.71289"
      stroke="#667085"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDown = ({ fill }: { fill?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    {fill && (
      <rect
        opacity="0.1"
        x="0.666992"
        y="0.5"
        width="36"
        height="36"
        rx="8"
        fill="#E82F0F"
      />
    )}
    <path
      d="M13.4477 19.8225L18.0002 24.375L22.5527 19.8225"
      stroke="#E82F0F"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 11.625L18 24.2475"
      stroke="#E82F0F"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ManIcon = ({ width = 24 }: { width?: any }) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 2.5L16 8"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2.5H21.5V9"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WomenIcon = ({ width = 24 }: { width?: any }) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V22"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 19H9"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PassengerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89994 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6171 16.1498C14.1338 17.5081 12.1671 18.3331 10.0005 18.3331C7.83379 18.3331 5.86712 17.5081 4.38379 16.1498C4.46712 15.3665 4.96712 14.5998 5.85879 13.9998C8.14212 12.4831 11.8755 12.4831 14.1421 13.9998C15.0338 14.5998 15.5338 15.3665 15.6171 16.1498Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DriverIcon = ({ width = 20, fill = "var(--black)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM2.205 11.81C2.55496 13.3124 3.33129 14.6817 4.44071 15.7536C5.55013 16.8254 6.94545 17.554 8.459 17.852C8.266 15.227 7.403 13.652 6.313 12.781C5.269 11.946 3.853 11.623 2.205 11.809V11.81ZM13.687 12.78C12.597 13.653 11.734 15.227 11.541 17.852C13.0547 17.554 14.4501 16.8252 15.5595 15.7531C16.669 14.6811 17.4452 13.3116 17.795 11.809C16.147 11.623 14.731 11.946 13.687 12.781V12.78ZM10 2C8.13617 2.00025 6.33088 2.65102 4.89559 3.84004C3.46029 5.02907 2.48501 6.68176 2.138 8.513L2.095 8.761L4.305 8.319C4.887 8.203 5.44 7.896 6.058 7.479L6.535 7.147C7.332 6.581 8.513 6 10 6C11.388 6 12.509 6.506 13.3 7.034L13.942 7.479C14.482 7.844 14.974 8.124 15.478 8.267L15.695 8.319L17.905 8.761C17.6092 6.87693 16.6503 5.16044 15.2009 3.92084C13.7516 2.68124 11.9071 2.00004 10 2Z"
      fill={fill}
    />
  </svg>
);

export const PassengerVehicleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M1.72537 3.8334C2.39204 0.950065 6.73371 0.950065 7.39204 3.8334C7.78371 5.52507 6.70871 6.9584 5.77537 7.85007C5.09204 8.50007 4.01704 8.49173 3.33371 7.85007C2.40871 6.9584 1.33371 5.52507 1.72537 3.8334Z"
      stroke="#858592"
      strokeWidth="1.5"
    />
    <path
      d="M12.5583 13.8334C13.225 10.9501 17.5917 10.9501 18.2583 13.8334C18.65 15.5251 17.575 16.9584 16.6333 17.8501C15.95 18.5001 14.8667 18.4917 14.1833 17.8501C13.2417 16.9584 12.1667 15.5251 12.5583 13.8334Z"
      stroke="#858592"
      strokeWidth="1.5"
    />
    <path
      d="M10.0004 4.16699H12.2337C13.7754 4.16699 14.4921 6.07533 13.3337 7.09199L6.6754 12.917C5.51707 13.9253 6.23373 15.8337 7.76707 15.8337H10.0004"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.57209 4.58366H4.58172"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4051 14.5837H15.4147"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DriverVehicleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M14.3502 1.66699H7.46695C7.13362 1.66699 6.81693 1.78366 6.5586 1.98366L4.73359 3.442C4.00026 4.02533 4.00026 5.13365 4.73359 5.71698L6.5586 7.17531C6.81693 7.38365 7.14195 7.49198 7.46695 7.49198H14.3502C15.1586 7.49198 15.8086 6.84198 15.8086 6.03365V3.11698C15.8086 2.31698 15.1586 1.66699 14.3502 1.66699Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.66634 10H12.5497C12.883 10 13.1997 10.1167 13.458 10.3167L15.283 11.775C16.0164 12.3583 16.0164 13.4667 15.283 14.05L13.458 15.5083C13.1997 15.7167 12.8747 15.825 12.5497 15.825H5.66634C4.85801 15.825 4.20801 15.175 4.20801 14.3667V11.45C4.20801 10.65 4.85801 10 5.66634 10Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10V7.5"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 18.333V15.833"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 18.333H12.5"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M12.0133 8.71967L11.2 7.90634C11.0067 7.73967 10.8933 7.49301 10.8867 7.21967C10.8733 6.91967 10.9933 6.61967 11.2133 6.39967L12.0133 5.59967C12.7067 4.90634 12.9667 4.23967 12.7467 3.71301C12.5333 3.19301 11.8733 2.90634 10.9 2.90634H3.93333V2.33301C3.93333 2.05967 3.70667 1.83301 3.43333 1.83301C3.16 1.83301 2.93333 2.05967 2.93333 2.33301V14.6663C2.93333 14.9397 3.16 15.1663 3.43333 15.1663C3.70667 15.1663 3.93333 14.9397 3.93333 14.6663V11.413H10.9C11.86 11.413 12.5067 11.1197 12.7267 10.593C12.9467 10.0663 12.6933 9.40634 12.0133 8.71967Z"
      fill="#AAACB9"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M14.6667 14.6668H14V7.15348C14 6.74014 13.8133 6.35348 13.4867 6.10014L12.6667 5.46014L12.6533 3.82681C12.6533 3.46014 12.3533 3.16681 11.9867 3.16681H9.71334L8.82001 2.47348C8.34001 2.09348 7.66001 2.09348 7.18001 2.47348L2.51334 6.10014C2.18668 6.35348 2.00001 6.74014 2.00001 7.14681L1.96668 14.6668H1.33334C1.06001 14.6668 0.833344 14.8935 0.833344 15.1668C0.833344 15.4401 1.06001 15.6668 1.33334 15.6668H14.6667C14.94 15.6668 15.1667 15.4401 15.1667 15.1668C15.1667 14.8935 14.94 14.6668 14.6667 14.6668ZM4.33334 9.00014V8.00014C4.33334 7.63348 4.63334 7.33348 5.00001 7.33348H6.33334C6.70001 7.33348 7.00001 7.63348 7.00001 8.00014V9.00014C7.00001 9.36681 6.70001 9.66681 6.33334 9.66681H5.00001C4.63334 9.66681 4.33334 9.36681 4.33334 9.00014ZM9.66668 14.6668H6.33334V12.8335C6.33334 12.2801 6.78001 11.8335 7.33334 11.8335H8.66668C9.22001 11.8335 9.66668 12.2801 9.66668 12.8335V14.6668ZM11.6667 9.00014C11.6667 9.36681 11.3667 9.66681 11 9.66681H9.66668C9.30001 9.66681 9.00001 9.36681 9.00001 9.00014V8.00014C9.00001 7.63348 9.30001 7.33348 9.66668 7.33348H11C11.3667 7.33348 11.6667 7.63348 11.6667 8.00014V9.00014Z"
      fill="#AAACB9"
    />
  </svg>
);

export const HorizontalLineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="116"
    height="7"
    viewBox="0 0 116 7"
    fill="none"
  >
    <line
      x1="4.5"
      y1="3.5"
      x2="111.5"
      y2="3.5"
      stroke="#151515"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <circle cx="3.5" cy="3.5" r="2.5" fill="white" stroke="#FF5B01" />
    <circle cx="112.5" cy="3.5" r="2.5" fill="white" stroke="#FF5B01" />
  </svg>
);

export const FlashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M17.91 11.2199H14.82V4.0199C14.82 2.3399 13.91 1.9999 12.8 3.2599L12 4.1699L5.23001 11.8699C4.30001 12.9199 4.69001 13.7799 6.09001 13.7799H9.18001V20.9799C9.18001 22.6599 10.09 22.9999 11.2 21.7399L12 20.8299L18.77 13.1299C19.7 12.0799 19.31 11.2199 17.91 11.2199Z"
      fill="#FFBA09"
    />
  </svg>
);

export const PassengerManIcon = ({
  width = 12,
  height = 13,
  color = "white",
}: {
  width?: any;
  height?: any;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 13"
    fill="none"
  >
    <path
      d="M1.74165 12.3337H10.2C10.9 12.3337 11.425 11.5754 11.1333 10.8754C10.3166 8.65872 8.39164 7.02539 5.94165 7.02539C3.49164 7.02539 1.56665 8.65872 0.749979 10.8754C0.574978 11.5754 1.04165 12.3337 1.74165 12.3337Z"
      fill={color}
    />
    <path
      d="M8.91665 3.58366C8.91665 5.21699 7.63331 6.50033 5.99998 6.50033C4.36665 6.50033 3.08331 5.21699 3.08331 3.58366C3.08331 1.95033 4.36665 0.666992 5.99998 0.666992C7.63331 0.666992 8.91665 1.95033 8.91665 3.58366Z"
      fill={color}
    />
  </svg>
);

export const PassangerFemaleIcon = ({
  width = 12,
  height = 13,
  color = "white",
}: {
  width?: any;
  height?: any;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 13"
    fill="none"
  >
    <path
      d="M3.95839 6.26699C4.83339 6.44199 5.53339 6.50033 6.00006 6.50033C6.46672 6.50033 7.16672 6.44199 7.98339 6.26699C8.80006 6.09199 8.97506 5.62533 8.85839 5.33366C8.74172 4.86699 8.45006 3.64199 8.10006 2.35866C7.75006 1.07533 6.70006 0.666992 6.00006 0.666992C5.30006 0.666992 4.25006 1.07533 3.84172 2.35866C3.49172 3.64199 3.20006 4.92533 3.08339 5.39199C3.02506 5.68366 3.14172 6.09199 3.95839 6.26699Z"
      fill={color}
    />
    <path
      d="M10.2584 7.02539H1.7417C1.0417 7.02539 0.516697 7.78372 0.808363 8.48372C1.62503 10.7004 3.60836 12.3337 6.00003 12.3337C8.3917 12.3337 10.375 10.7004 11.1917 8.48372C11.425 7.78372 10.9584 7.02539 10.2584 7.02539Z"
      fill={color}
    />
  </svg>
);

export const FlagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
  >
    <g clipPath="url(#clip0_3974_43579)">
      <path d="M0 4H8V6.00039H0V4Z" fill="#1EB53A" />
      <path d="M0 0H8V2.00039H0V0Z" fill="#0099B5" />
      <path d="M0 1.91992H8V4.08086H0V1.91992Z" fill="#CE1126" />
      <path d="M0 2.03906H8V3.96094H0V2.03906Z" fill="white" />
      <path
        d="M1.49377 1.6793C1.847 1.6793 2.13335 1.35715 2.13335 0.959766C2.13335 0.56238 1.847 0.240234 1.49377 0.240234C1.14054 0.240234 0.854187 0.56238 0.854187 0.959766C0.854187 1.35715 1.14054 1.6793 1.49377 1.6793Z"
        fill="white"
      />
      <path
        d="M1.70623 1.6793C2.05947 1.6793 2.34582 1.35715 2.34582 0.959766C2.34582 0.56238 2.05947 0.240234 1.70623 0.240234C1.353 0.240234 1.06665 0.56238 1.06665 0.959766C1.06665 1.35715 1.353 1.6793 1.70623 1.6793Z"
        fill="#0099B5"
      />
      <path d="M2.90107 1.3916L2.86053 1.5284L2.9224 1.5524" fill="white" />
      <path d="M2.90106 1.3916L2.94159 1.5284L2.87972 1.5524" fill="white" />
      <path d="M3.02158 1.49519L2.89412 1.48363L2.89716 1.56315" fill="white" />
      <path d="M3.02041 1.49309L2.92281 1.57738L2.88028 1.51061" fill="white" />
      <path d="M2.78171 1.49309L2.87932 1.57738L2.92184 1.51061" fill="white" />
      <path d="M2.78061 1.49519L2.90806 1.48363L2.90502 1.56315" fill="white" />
      <path d="M2.97781 1.65272L2.93566 1.51464L2.87503 1.5326" fill="white" />
      <path d="M2.97709 1.65392L2.87237 1.56542L2.90724 1.50771" fill="white" />
      <path d="M2.82654 1.65027L2.93041 1.57016L2.89057 1.50771" fill="white" />
      <path d="M2.82715 1.65149L2.86278 1.5145L2.9271 1.53886" fill="white" />
      <path d="M2.90107 0.81543L2.86053 0.95223L2.9224 0.97623" fill="white" />
      <path d="M2.90106 0.81543L2.94159 0.95223L2.87972 0.97623" fill="white" />
      <path
        d="M3.02158 0.919015L2.89412 0.907455L2.89716 0.986977"
        fill="white"
      />
      <path
        d="M3.02041 0.916922L2.92281 1.0012L2.88028 0.934441"
        fill="white"
      />
      <path
        d="M2.78171 0.916922L2.87932 1.0012L2.92184 0.934441"
        fill="white"
      />
      <path
        d="M2.78061 0.919015L2.90806 0.907455L2.90502 0.986977"
        fill="white"
      />
      <path
        d="M2.97781 1.07655L2.93566 0.938468L2.87503 0.956427"
        fill="white"
      />
      <path
        d="M2.97709 1.07775L2.87237 0.989249L2.90724 0.931539"
        fill="white"
      />
      <path d="M2.82654 1.0741L2.93041 0.99399L2.89057 0.931539" fill="white" />
      <path
        d="M2.82715 1.07531L2.86278 0.938326L2.9271 0.962689"
        fill="white"
      />
      <path
        d="M2.90107 0.239258L2.86053 0.376058L2.9224 0.400058"
        fill="white"
      />
      <path
        d="M2.90106 0.239258L2.94159 0.376058L2.87972 0.400058"
        fill="white"
      />
      <path
        d="M3.02158 0.342843L2.89412 0.331283L2.89716 0.410805"
        fill="white"
      />
      <path
        d="M3.02041 0.34075L2.92281 0.425033L2.88028 0.358269"
        fill="white"
      />
      <path
        d="M2.78171 0.34075L2.87932 0.425033L2.92184 0.358269"
        fill="white"
      />
      <path
        d="M2.78061 0.342843L2.90806 0.331283L2.90502 0.410805"
        fill="white"
      />
      <path
        d="M2.97781 0.500374L2.93566 0.362296L2.87503 0.380255"
        fill="white"
      />
      <path
        d="M2.97709 0.501579L2.87237 0.413077L2.90724 0.355367"
        fill="white"
      />
      <path
        d="M2.82654 0.497928L2.93041 0.417818L2.89057 0.355367"
        fill="white"
      />
      <path
        d="M2.82715 0.499142L2.86278 0.362154L2.9271 0.386517"
        fill="white"
      />
      <path d="M3.41309 1.3916L3.37256 1.5284L3.43443 1.5524" fill="white" />
      <path d="M3.41308 1.3916L3.45361 1.5284L3.39175 1.5524" fill="white" />
      <path d="M3.5336 1.49519L3.40615 1.48363L3.40919 1.56315" fill="white" />
      <path d="M3.53244 1.49309L3.43483 1.57738L3.39231 1.51061" fill="white" />
      <path d="M3.29373 1.49309L3.39134 1.57738L3.43386 1.51061" fill="white" />
      <path d="M3.29263 1.49519L3.42009 1.48363L3.41705 1.56315" fill="white" />
      <path d="M3.48983 1.65272L3.44769 1.51464L3.38705 1.5326" fill="white" />
      <path d="M3.48911 1.65392L3.38439 1.56542L3.41926 1.50771" fill="white" />
      <path d="M3.33856 1.65027L3.44243 1.57016L3.40259 1.50771" fill="white" />
      <path d="M3.33917 1.65149L3.3748 1.5145L3.43912 1.53886" fill="white" />
      <path d="M3.41309 0.81543L3.37256 0.95223L3.43443 0.97623" fill="white" />
      <path d="M3.41308 0.81543L3.45361 0.95223L3.39175 0.97623" fill="white" />
      <path
        d="M3.5336 0.919015L3.40615 0.907455L3.40919 0.986977"
        fill="white"
      />
      <path
        d="M3.53244 0.916922L3.43483 1.0012L3.39231 0.934441"
        fill="white"
      />
      <path
        d="M3.29373 0.916922L3.39134 1.0012L3.43386 0.934441"
        fill="white"
      />
      <path
        d="M3.29263 0.919015L3.42009 0.907455L3.41705 0.986977"
        fill="white"
      />
      <path
        d="M3.48983 1.07655L3.44769 0.938468L3.38705 0.956427"
        fill="white"
      />
      <path
        d="M3.48911 1.07775L3.38439 0.989249L3.41926 0.931539"
        fill="white"
      />
      <path d="M3.33856 1.0741L3.44243 0.99399L3.40259 0.931539" fill="white" />
      <path
        d="M3.33917 1.07531L3.3748 0.938326L3.43912 0.962689"
        fill="white"
      />
      <path
        d="M3.41309 0.239258L3.37256 0.376058L3.43443 0.400058"
        fill="white"
      />
      <path
        d="M3.41308 0.239258L3.45361 0.376058L3.39175 0.400058"
        fill="white"
      />
      <path
        d="M3.5336 0.342843L3.40615 0.331283L3.40919 0.410805"
        fill="white"
      />
      <path
        d="M3.53244 0.34075L3.43483 0.425033L3.39231 0.358269"
        fill="white"
      />
      <path
        d="M3.29373 0.34075L3.39134 0.425033L3.43386 0.358269"
        fill="white"
      />
      <path
        d="M3.29263 0.342843L3.42009 0.331283L3.41705 0.410805"
        fill="white"
      />
      <path
        d="M3.48983 0.500374L3.44769 0.362296L3.38705 0.380255"
        fill="white"
      />
      <path
        d="M3.48911 0.501579L3.38439 0.413077L3.41926 0.355367"
        fill="white"
      />
      <path
        d="M3.33856 0.497928L3.44243 0.417818L3.40259 0.355367"
        fill="white"
      />
      <path
        d="M3.33917 0.499142L3.3748 0.362154L3.43912 0.386517"
        fill="white"
      />
      <path d="M3.92505 1.3916L3.88452 1.5284L3.94639 1.5524" fill="white" />
      <path d="M3.92504 1.3916L3.96558 1.5284L3.90371 1.5524" fill="white" />
      <path d="M4.04557 1.49519L3.91811 1.48363L3.92115 1.56315" fill="white" />
      <path d="M4.0444 1.49309L3.9468 1.57738L3.90427 1.51061" fill="white" />
      <path d="M3.8057 1.49309L3.9033 1.57738L3.94583 1.51061" fill="white" />
      <path d="M3.80459 1.49519L3.93205 1.48363L3.92901 1.56315" fill="white" />
      <path d="M4.0018 1.65272L3.95965 1.51464L3.89902 1.5326" fill="white" />
      <path d="M4.00107 1.65392L3.89636 1.56542L3.93122 1.50771" fill="white" />
      <path d="M3.85052 1.65027L3.95439 1.57016L3.91455 1.50771" fill="white" />
      <path d="M3.85114 1.65149L3.88677 1.5145L3.95108 1.53886" fill="white" />
      <path d="M3.92505 0.81543L3.88452 0.95223L3.94639 0.97623" fill="white" />
      <path d="M3.92504 0.81543L3.96558 0.95223L3.90371 0.97623" fill="white" />
      <path
        d="M4.04557 0.919015L3.91811 0.907455L3.92115 0.986977"
        fill="white"
      />
      <path d="M4.0444 0.916922L3.9468 1.0012L3.90427 0.934441" fill="white" />
      <path d="M3.8057 0.916922L3.9033 1.0012L3.94583 0.934441" fill="white" />
      <path
        d="M3.80459 0.919015L3.93205 0.907455L3.92901 0.986977"
        fill="white"
      />
      <path
        d="M4.0018 1.07655L3.95965 0.938468L3.89902 0.956427"
        fill="white"
      />
      <path
        d="M4.00107 1.07775L3.89636 0.989249L3.93122 0.931539"
        fill="white"
      />
      <path d="M3.85052 1.0741L3.95439 0.99399L3.91455 0.931539" fill="white" />
      <path
        d="M3.85114 1.07531L3.88677 0.938326L3.95108 0.962689"
        fill="white"
      />
      <path
        d="M3.92505 0.239258L3.88452 0.376058L3.94639 0.400058"
        fill="white"
      />
      <path
        d="M3.92504 0.239258L3.96558 0.376058L3.90371 0.400058"
        fill="white"
      />
      <path
        d="M4.04557 0.342843L3.91811 0.331283L3.92115 0.410805"
        fill="white"
      />
      <path d="M4.0444 0.34075L3.9468 0.425033L3.90427 0.358269" fill="white" />
      <path d="M3.8057 0.34075L3.9033 0.425033L3.94583 0.358269" fill="white" />
      <path
        d="M3.80459 0.342843L3.93205 0.331283L3.92901 0.410805"
        fill="white"
      />
      <path
        d="M4.0018 0.500374L3.95965 0.362296L3.89902 0.380255"
        fill="white"
      />
      <path
        d="M4.00107 0.501579L3.89636 0.413077L3.93122 0.355367"
        fill="white"
      />
      <path
        d="M3.85052 0.497928L3.95439 0.417818L3.91455 0.355367"
        fill="white"
      />
      <path
        d="M3.85114 0.499142L3.88677 0.362154L3.95108 0.386517"
        fill="white"
      />
      <path d="M1.87708 1.3916L1.83655 1.5284L1.89841 1.5524" fill="white" />
      <path d="M1.87707 1.3916L1.9176 1.5284L1.85574 1.5524" fill="white" />
      <path d="M1.99759 1.49519L1.87013 1.48363L1.87317 1.56315" fill="white" />
      <path d="M1.99643 1.49309L1.89882 1.57738L1.8563 1.51061" fill="white" />
      <path d="M1.75772 1.49309L1.85533 1.57738L1.89785 1.51061" fill="white" />
      <path d="M1.75662 1.49519L1.88408 1.48363L1.88104 1.56315" fill="white" />
      <path d="M1.95382 1.65272L1.91168 1.51464L1.85104 1.5326" fill="white" />
      <path d="M1.9531 1.65392L1.84838 1.56542L1.88325 1.50771" fill="white" />
      <path d="M1.80255 1.65027L1.90642 1.57016L1.86658 1.50771" fill="white" />
      <path d="M1.80316 1.65149L1.83879 1.5145L1.90311 1.53886" fill="white" />
      <path d="M2.38911 1.3916L2.34857 1.5284L2.41044 1.5524" fill="white" />
      <path d="M2.38909 1.3916L2.42963 1.5284L2.36776 1.5524" fill="white" />
      <path d="M2.50962 1.49519L2.38216 1.48363L2.3852 1.56315" fill="white" />
      <path d="M2.50845 1.49309L2.41085 1.57738L2.36832 1.51061" fill="white" />
      <path d="M2.26975 1.49309L2.36735 1.57738L2.40988 1.51061" fill="white" />
      <path d="M2.26864 1.49519L2.3961 1.48363L2.39306 1.56315" fill="white" />
      <path d="M2.46585 1.65272L2.4237 1.51464L2.36307 1.5326" fill="white" />
      <path d="M2.46512 1.65392L2.36041 1.56542L2.39527 1.50771" fill="white" />
      <path d="M2.31457 1.65027L2.41844 1.57016L2.3786 1.50771" fill="white" />
      <path d="M2.31519 1.65149L2.35082 1.5145L2.41513 1.53886" fill="white" />
      <path d="M2.38911 0.81543L2.34857 0.95223L2.41044 0.97623" fill="white" />
      <path d="M2.38909 0.81543L2.42963 0.95223L2.36776 0.97623" fill="white" />
      <path
        d="M2.50962 0.919015L2.38216 0.907455L2.3852 0.986977"
        fill="white"
      />
      <path
        d="M2.50845 0.916922L2.41085 1.0012L2.36832 0.934441"
        fill="white"
      />
      <path
        d="M2.26975 0.916922L2.36735 1.0012L2.40988 0.934441"
        fill="white"
      />
      <path
        d="M2.26864 0.919015L2.3961 0.907455L2.39306 0.986977"
        fill="white"
      />
      <path
        d="M2.46585 1.07655L2.4237 0.938468L2.36307 0.956427"
        fill="white"
      />
      <path
        d="M2.46512 1.07775L2.36041 0.989249L2.39527 0.931539"
        fill="white"
      />
      <path d="M2.31457 1.0741L2.41844 0.99399L2.3786 0.931539" fill="white" />
      <path
        d="M2.31519 1.07531L2.35082 0.938326L2.41513 0.962689"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3974_43579">
        <rect width="8" height="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4.50667 14.6663H11.4933C13.3333 14.6663 14.0667 13.5397 14.1533 12.1663L14.5 6.65967C14.5933 5.21967 13.4467 3.99967 12 3.99967C11.5933 3.99967 11.22 3.76634 11.0333 3.40634L10.5533 2.43967C10.2467 1.83301 9.44667 1.33301 8.76667 1.33301H7.24C6.55333 1.33301 5.75333 1.83301 5.44667 2.43967L4.96667 3.40634C4.78 3.76634 4.40667 3.99967 4 3.99967C2.55333 3.99967 1.40667 5.21967 1.5 6.65967L1.84667 12.1663C1.92667 13.5397 2.66667 14.6663 4.50667 14.6663Z"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 5.33301H9"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12.0003C9.19333 12.0003 10.1667 11.027 10.1667 9.83366C10.1667 8.64033 9.19333 7.66699 8 7.66699C6.80667 7.66699 5.83333 8.64033 5.83333 9.83366C5.83333 11.027 6.80667 12.0003 8 12.0003Z"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon = ({
  fill = "#858592",
  size = 20,
}: {
  fill?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 1.6665C5.40833 1.6665 1.66666 5.40817 1.66666 9.99984C1.66666 14.5915 5.40833 18.3332 10 18.3332C14.5917 18.3332 18.3333 14.5915 18.3333 9.99984C18.3333 5.40817 14.5917 1.6665 10 1.6665ZM9.375 6.6665C9.375 6.32484 9.65833 6.0415 10 6.0415C10.3417 6.0415 10.625 6.32484 10.625 6.6665V10.8332C10.625 11.1748 10.3417 11.4582 10 11.4582C9.65833 11.4582 9.375 11.1748 9.375 10.8332V6.6665ZM10.7667 13.6498C10.725 13.7582 10.6667 13.8415 10.5917 13.9248C10.5083 13.9998 10.4167 14.0582 10.3167 14.0998C10.2167 14.1415 10.1083 14.1665 10 14.1665C9.89166 14.1665 9.78333 14.1415 9.68333 14.0998C9.58333 14.0582 9.49166 13.9998 9.40833 13.9248C9.33333 13.8415 9.275 13.7582 9.23333 13.6498C9.19166 13.5498 9.16666 13.4415 9.16666 13.3332C9.16666 13.2248 9.19166 13.1165 9.23333 13.0165C9.275 12.9165 9.33333 12.8248 9.40833 12.7415C9.49166 12.6665 9.58333 12.6082 9.68333 12.5665C9.88333 12.4832 10.1167 12.4832 10.3167 12.5665C10.4167 12.6082 10.5083 12.6665 10.5917 12.7415C10.6667 12.8248 10.725 12.9165 10.7667 13.0165C10.8083 13.1165 10.8333 13.2248 10.8333 13.3332C10.8333 13.4415 10.8083 13.5498 10.7667 13.6498Z"
      fill={fill}
    />
  </svg>
);

export const InfoErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M14.5067 11.113L10.24 3.43301C9.66667 2.39967 8.87333 1.83301 8 1.83301C7.12667 1.83301 6.33333 2.39967 5.76 3.43301L1.49333 11.113C0.953334 12.093 0.893334 13.033 1.32667 13.773C1.76 14.513 2.61333 14.9197 3.73333 14.9197H12.2667C13.3867 14.9197 14.24 14.513 14.6733 13.773C15.1067 13.033 15.0467 12.0863 14.5067 11.113ZM7.5 6.49967C7.5 6.22634 7.72667 5.99967 8 5.99967C8.27333 5.99967 8.5 6.22634 8.5 6.49967V9.83301C8.5 10.1063 8.27333 10.333 8 10.333C7.72667 10.333 7.5 10.1063 7.5 9.83301V6.49967ZM8.47333 12.3063C8.44 12.333 8.40667 12.3597 8.37333 12.3863C8.33333 12.413 8.29333 12.433 8.25333 12.4463C8.21333 12.4663 8.17333 12.4797 8.12667 12.4863C8.08667 12.493 8.04 12.4997 8 12.4997C7.96 12.4997 7.91333 12.493 7.86667 12.4863C7.82667 12.4797 7.78667 12.4663 7.74667 12.4463C7.70667 12.433 7.66667 12.413 7.62667 12.3863C7.59333 12.3597 7.56 12.333 7.52667 12.3063C7.40667 12.1797 7.33333 12.0063 7.33333 11.833C7.33333 11.6597 7.40667 11.4863 7.52667 11.3597C7.56 11.333 7.59333 11.3063 7.62667 11.2797C7.66667 11.253 7.70667 11.233 7.74667 11.2197C7.78667 11.1997 7.82667 11.1863 7.86667 11.1797C7.95333 11.1597 8.04667 11.1597 8.12667 11.1797C8.17333 11.1863 8.21333 11.1997 8.25333 11.2197C8.29333 11.233 8.33333 11.253 8.37333 11.2797C8.40667 11.3063 8.44 11.333 8.47333 11.3597C8.59333 11.4863 8.66667 11.6597 8.66667 11.833C8.66667 12.0063 8.59333 12.1797 8.47333 12.3063Z"
      fill="#E82F0F"
    />
  </svg>
);

export const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <svg
    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="vuesax/bold/arrow-down">
      <g id="arrow-down">
        <path
          id="Vector"
          d="M7.79316 5.95312H11.9465C12.1396 5.95312 12.2404 6.18851 12.1046 6.32791C12.1043 6.32823 12.104 6.32855 12.1037 6.32887L9.96628 8.46624L8.65295 9.77957C8.29487 10.1376 7.71146 10.1376 7.35339 9.77957L3.90005 6.32624C3.76078 6.18696 3.85993 5.95312 4.05317 5.95312H7.79316Z"
          fill="#98A2B3"
          stroke="#98A2B3"
        />
      </g>
    </g>
  </svg>
);

export const IncreaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="66"
    viewBox="0 0 130 66"
    fill="none"
  >
    <path
      d="M129 1C108.204 2.73299 106.916 44.2218 86.3333 49C69.3602 52.9402 60.7655 30.5738 43.6667 33C25.1204 35.6316 19.1855 58.9382 1 65H129V1Z"
      fill="#ECFDF3"
    />
    <path
      d="M129 1C108.204 2.73299 106.916 44.2218 86.3333 49C69.3602 52.9402 60.7655 30.5738 43.6667 33C25.1204 35.6316 19.1855 58.9382 1 65H129V1Z"
      fill="url(#paint0_linear_4561_48119)"
    />
    <path
      d="M1 65C19.1855 58.9382 25.1204 35.6316 43.6667 33C60.7655 30.5738 69.3602 52.9402 86.3333 49C106.916 44.2218 108.204 2.73299 129 1"
      stroke="#12B76A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4561_48119"
        x1="65"
        y1="1"
        x2="65"
        y2="65"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.641167" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

export const DecreaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="66"
    viewBox="0 0 130 66"
    fill="none"
  >
    <path
      d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
      fill="#FEF3F2"
    />
    <path
      d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
      fill="url(#paint0_linear_4561_48147)"
    />
    <path
      d="M129 65C110.815 58.9382 104.88 35.6316 86.3333 33C69.2345 30.5738 60.6398 52.9402 43.6667 49C23.0837 44.2218 21.7959 2.73299 0.999996 1"
      stroke="#F04438"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4561_48147"
        x1="65"
        y1="1"
        x2="65"
        y2="65"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.641167" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

export const BallanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
  >
    <path
      d="M16.5 9.5V13.25C16.5 15.5 15 17 12.75 17H5.25C3 17 1.5 15.5 1.5 13.25V9.5C1.5 7.46 2.73 6.035 4.6425 5.795C4.8375 5.765 5.04 5.75 5.25 5.75H12.75C12.945 5.75 13.1325 5.75749 13.3125 5.78749C15.2475 6.01249 16.5 7.445 16.5 9.5Z"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3136 5.7875C13.1336 5.7575 12.9461 5.75001 12.7511 5.75001H5.25105C5.04105 5.75001 4.83855 5.76501 4.64355 5.79501C4.74855 5.58501 4.89855 5.39001 5.07855 5.21001L7.51606 2.765C8.54356 1.745 10.2086 1.745 11.2361 2.765L12.5486 4.09251C13.0286 4.56501 13.2836 5.165 13.3136 5.7875Z"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 9.875H14.25C13.425 9.875 12.75 10.55 12.75 11.375C12.75 12.2 13.425 12.875 14.25 12.875H16.5"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TaxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <path
      d="M14.9585 9.875C14.9585 8.84 15.7985 8 16.8335 8V7.25C16.8335 4.25 16.0835 3.5 13.0835 3.5H5.5835C2.5835 3.5 1.8335 4.25 1.8335 7.25V7.625C2.8685 7.625 3.7085 8.465 3.7085 9.5C3.7085 10.535 2.8685 11.375 1.8335 11.375V11.75C1.8335 14.75 2.5835 15.5 5.5835 15.5H13.0835C16.0835 15.5 16.8335 14.75 16.8335 11.75C15.7985 11.75 14.9585 10.91 14.9585 9.875Z"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.0835 11.5625L11.5835 7.0625"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5794 11.5625H11.5861"
      stroke="#DD431F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.07938 7.4375H7.08611"
      stroke="#DD431F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SallaryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <path
      d="M7.7915 10.8122C7.7915 11.5397 8.35401 12.1247 9.04401 12.1247H10.454C11.054 12.1247 11.5415 11.6147 11.5415 10.9772C11.5415 10.2947 11.2415 10.0472 10.799 9.88969L8.5415 9.10218C8.099 8.94468 7.79901 8.70469 7.79901 8.01469C7.79901 7.38469 8.2865 6.86719 8.8865 6.86719H10.2965C10.9865 6.86719 11.549 7.45219 11.549 8.17969"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.6665 6.125V12.875"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1665 9.5C17.1665 13.64 13.8065 17 9.6665 17C5.5265 17 2.1665 13.64 2.1665 9.5C2.1665 5.36 5.5265 2 9.6665 2"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4165 2.75V5.75H16.4165"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1665 2L13.4165 5.75"
      stroke="#DD431F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserTagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z"
      stroke="#039855"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9999 9.99982C13.2868 9.99982 14.33 8.95662 14.33 7.6698C14.33 6.38298 13.2868 5.33984 11.9999 5.33984C10.7131 5.33984 9.66992 6.38298 9.66992 7.6698C9.66992 8.95662 10.7131 9.99982 11.9999 9.99982Z"
      stroke="#039855"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 15.6594C16 13.8594 14.21 12.3994 12 12.3994C9.79 12.3994 8 13.8594 8 15.6594"
      stroke="#039855"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20.6198 8.7C19.5798 4.07 15.5398 2 11.9998 2C11.9998 2 11.9998 2 11.9897 2C8.45975 2 4.42975 4.07 3.37975 8.69C2.19975 13.85 5.35975 18.22 8.21975 20.98C9.27975 22 10.6398 22.51 11.9998 22.51C13.3597 22.51 14.7198 22 15.7698 20.98C18.6298 18.22 21.7898 13.86 20.6198 8.7ZM15.2797 9.53L11.2797 13.53C11.1298 13.68 10.9398 13.75 10.7498 13.75C10.5598 13.75 10.3698 13.68 10.2198 13.53L8.71975 12.03C8.42975 11.74 8.42975 11.26 8.71975 10.97C9.00975 10.68 9.48975 10.68 9.77975 10.97L10.7498 11.94L14.2198 8.47C14.5098 8.18 14.9897 8.18 15.2797 8.47C15.5697 8.76 15.5697 9.24 15.2797 9.53Z"
      fill="#151515"
    />
  </svg>
);

export const CircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="12" fill="#EAEAEB" />
    <circle cx="12" cy="12" r="7.5" fill="#151515" />
  </svg>
);

export const CloseModalIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.315 0C4.62737 0 0 4.62737 0 10.315C0 16.0026 4.62737 20.63 10.315 20.63C16.0026 20.63 20.63 16.0026 20.63 10.315C20.63 4.62737 16.0026 0 10.315 0ZM14.0497 12.928C14.1265 13.0009 14.1879 13.0885 14.2303 13.1855C14.2727 13.2826 14.2952 13.3872 14.2966 13.4931C14.298 13.599 14.2781 13.7041 14.2382 13.8022C14.1983 13.9003 14.1392 13.9894 14.0643 14.0643C13.9894 14.1392 13.9003 14.1983 13.8022 14.2382C13.7041 14.2781 13.599 14.298 13.4931 14.2966C13.3872 14.2952 13.2826 14.2727 13.1855 14.2303C13.0885 14.1879 13.0009 14.1265 12.928 14.0497L10.315 11.4373L7.70203 14.0497C7.55202 14.1922 7.35226 14.2705 7.14536 14.2679C6.93846 14.2652 6.74077 14.1819 6.59446 14.0355C6.44814 13.8892 6.36477 13.6915 6.36212 13.4846C6.35947 13.2777 6.43775 13.078 6.58028 12.928L9.19275 10.315L6.58028 7.70203C6.43775 7.55202 6.35947 7.35226 6.36212 7.14536C6.36477 6.93846 6.44814 6.74077 6.59446 6.59446C6.74077 6.44814 6.93846 6.36477 7.14536 6.36212C7.35226 6.35947 7.55202 6.43775 7.70203 6.58028L10.315 9.19275L12.928 6.58028C13.078 6.43775 13.2777 6.35947 13.4846 6.36212C13.6915 6.36477 13.8892 6.44814 14.0355 6.59446C14.1819 6.74077 14.2652 6.93846 14.2679 7.14536C14.2705 7.35226 14.1922 7.55202 14.0497 7.70203L11.4373 10.315L14.0497 12.928Z"
      fill="#5C5C5C"
    />
  </svg>
);

export const Empty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_5451_11610)">
      <rect width="24" height="24" rx="6" fill="#EAEAEB" />
    </g>
    <defs>
      <clipPath id="clip0_5451_11610">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PessenerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4234_5465)">
      <rect width="24" height="24" rx="6" fill="#151515" />
      <path
        d="M7.74165 17.8333H16.2C16.9 17.8333 17.425 17.075 17.1333 16.375C16.3166 14.1583 14.3916 12.525 11.9416 12.525C9.49164 12.525 7.56665 14.1583 6.74998 16.375C6.57498 17.075 7.04165 17.8333 7.74165 17.8333Z"
        fill="white"
      />
      <path
        d="M14.9166 9.08332C14.9166 10.7167 13.6333 12 12 12C10.3666 12 9.08331 10.7167 9.08331 9.08332C9.08331 7.44999 10.3666 6.16666 12 6.16666C13.6333 6.16666 14.9166 7.44999 14.9166 9.08332Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4234_5465">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const NoteAvatar = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 122 122"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="122" height="122" rx="61" fill="#EAEAEB" />
    <path
      d="M46.4 81H75.4C77.8 81 79.6 78.4 78.6 76C75.8 68.4 69.2 62.8 60.8 62.8C52.4 62.8 45.8 68.4 43 76C42.4 78.4 44 81 46.4 81Z"
      fill="#AAACB9"
    />
    <path
      d="M71 51C71 56.6 66.6 61 61 61C55.4 61 51 56.6 51 51C51 45.4 55.4 41 61 41C66.6 41 71 45.4 71 51Z"
      fill="#AAACB9"
    />
  </svg>
);

export const WomenIconP = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_6881_51620)">
      <rect width="24" height="24" rx="6" fill="#151515" />
      <path
        d="M9.95839 11.7667C10.8334 11.9417 11.5334 12 12.0001 12C12.4667 12 13.1667 11.9417 13.9834 11.7667C14.8001 11.5917 14.9751 11.125 14.8584 10.8333C14.7417 10.3667 14.4501 9.14166 14.1001 7.85832C13.7501 6.57499 12.7001 6.16666 12.0001 6.16666C11.3001 6.16666 10.2501 6.57499 9.84172 7.85832C9.49172 9.14166 9.20006 10.425 9.08339 10.8917C9.02506 11.1833 9.14172 11.5917 9.95839 11.7667Z"
        fill="white"
      />
      <path
        d="M16.2584 12.525H7.7417C7.0417 12.525 6.5167 13.2833 6.80836 13.9833C7.62503 16.2 9.60836 17.8333 12 17.8333C14.3917 17.8333 16.375 16.2 17.1917 13.9833C17.425 13.2833 16.9584 12.525 16.2584 12.525Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6881_51620">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MenIconP = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4234_5465)">
      <rect width="24" height="24" rx="6" fill="#151515" />
      <path
        d="M7.74165 17.8333H16.2C16.9 17.8333 17.425 17.075 17.1333 16.375C16.3166 14.1583 14.3916 12.525 11.9416 12.525C9.49164 12.525 7.56665 14.1583 6.74998 16.375C6.57498 17.075 7.04165 17.8333 7.74165 17.8333Z"
        fill="white"
      />
      <path
        d="M14.9166 9.08332C14.9166 10.7167 13.6333 12 12 12C10.3666 12 9.08331 10.7167 9.08331 9.08332C9.08331 7.44999 10.3666 6.16666 12 6.16666C13.6333 6.16666 14.9166 7.44999 14.9166 9.08332Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4234_5465">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ProgressCarIcon = () => (
  <svg
    width="34"
    height="19"
    viewBox="0 0 34 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="car_top" filter="url(#filter0_d_3890_38570)">
      <path
        id="color"
        d="M25.8923 13.013L26.9109 12.9501C27.8287 12.8924 28.72 12.6093 29.4787 12.1006C30.8634 11.1673 31.4204 9.80393 31.5 7.7956V6.20677C31.4204 4.20369 30.8634 2.8351 29.4787 1.90697C28.72 1.39833 27.8287 1.11517 26.9109 1.05749L25.8923 0.99457C25.2345 0.952621 24.5713 0.963108 23.9134 1.03128L23.7649 1.04701L7.19648 1.04701C6.23092 1.08896 5.72692 1.262 4.93112 1.56613C3.61541 2.1272 3.02652 3.29654 3.01061 6.44798V7.56488C3.02652 10.7163 3.62072 11.8857 4.93112 12.4467C5.72692 12.7509 6.23092 12.9187 7.19648 12.9659H23.7596L23.9081 12.9816C24.566 13.0393 25.2292 13.0498 25.8923 13.013ZM23.0115 11.8332L19.4039 11.1358C19.1599 11.0886 18.9159 11.0467 18.6718 11.01C19.3403 7.92145 19.4093 6.05995 18.6718 2.93473C18.9159 2.89802 19.1599 2.85607 19.4039 2.80888L23.0115 2.11147C23.7914 1.9594 24.5713 2.37365 24.8631 3.10252C25.2504 4.06736 25.4201 5.18426 25.4626 6.6787V7.2555C25.4201 8.74995 25.2451 9.87209 24.8578 10.8317C24.5713 11.571 23.7914 11.9853 23.0115 11.8332Z"
        fill="black"
      />
      <g id="lines">
        <path
          id="Vector"
          d="M30.7148 4.11827L25.0382 3.62012V3.68304L30.683 4.38045C30.683 4.25985 30.6777 4.1707 30.7148 4.11827Z"
          fill="#E7E7E7"
        />
        <path
          id="Vector_2"
          d="M30.7148 9.88096L25.0382 10.3791V10.3162L30.683 9.62402C30.683 9.73938 30.6777 9.82853 30.7148 9.88096Z"
          fill="#E7E7E7"
        />
      </g>
      <g id="window">
        <path
          id="Vector_3"
          d="M8.16791 11.4861C7.53128 11.4861 7.01667 11.4179 6.60285 11.2606C6.6453 11.2501 6.68774 11.2291 6.73018 11.2029C6.58163 11.1453 6.4437 11.0823 6.31106 11.0194C5.89195 10.8097 5.58424 10.4374 5.43569 9.99689C5.20756 9.30472 5.12268 8.65451 5.05902 7.75784C5.0431 7.53237 5.03779 7.31213 5.03779 7.08666V6.93983C5.03779 6.7196 5.0431 6.49937 5.05902 6.28437C5.12268 5.38246 5.20756 4.73225 5.43569 4.03484C5.57893 3.59438 5.89195 3.22732 6.31106 3.01233C6.4437 2.94416 6.58163 2.88648 6.73549 2.82356C6.70366 2.80258 6.67182 2.78685 6.63469 2.77112C7.04319 2.60857 7.5472 2.53516 8.16791 2.53516C8.43848 2.53516 8.71436 2.55089 8.99023 2.57711V11.4389C8.70905 11.4756 8.43848 11.4861 8.16791 11.4861Z"
          fill="#4B545A"
        />
        <g id="Vector_4">
          <path
            d="M8.16791 11.4861C7.53128 11.4861 7.01667 11.4179 6.60285 11.2606C6.6453 11.2501 6.68774 11.2291 6.73018 11.2029C6.58163 11.1453 6.4437 11.0823 6.31106 11.0194C5.89195 10.8097 5.58424 10.4374 5.43569 9.99689C5.20756 9.30472 5.12268 8.65451 5.05902 7.75784C5.0431 7.53237 5.03779 7.31213 5.03779 7.08666V6.93983C5.03779 6.7196 5.0431 6.49937 5.05902 6.28437C5.12268 5.38246 5.20756 4.73225 5.43569 4.03484C5.57893 3.59438 5.89195 3.22732 6.31106 3.01233C6.4437 2.94416 6.58163 2.88648 6.73549 2.82356C6.70366 2.80258 6.67182 2.78685 6.63469 2.77112C7.04319 2.60857 7.5472 2.53516 8.16791 2.53516C8.43848 2.53516 8.71436 2.55089 8.99023 2.57711V11.4389C8.70905 11.4756 8.43848 11.4861 8.16791 11.4861Z"
            fill="#4388FC"
            fillOpacity="0.1"
          />
          <path
            d="M8.16791 11.4861C7.53128 11.4861 7.01667 11.4179 6.60285 11.2606C6.6453 11.2501 6.68774 11.2291 6.73018 11.2029C6.58163 11.1453 6.4437 11.0823 6.31106 11.0194C5.89195 10.8097 5.58424 10.4374 5.43569 9.99689C5.20756 9.30472 5.12268 8.65451 5.05902 7.75784C5.0431 7.53237 5.03779 7.31213 5.03779 7.08666V6.93983C5.03779 6.7196 5.0431 6.49937 5.05902 6.28437C5.12268 5.38246 5.20756 4.73225 5.43569 4.03484C5.57893 3.59438 5.89195 3.22732 6.31106 3.01233C6.4437 2.94416 6.58163 2.88648 6.73549 2.82356C6.70366 2.80258 6.67182 2.78685 6.63469 2.77112C7.04319 2.60857 7.5472 2.53516 8.16791 2.53516C8.43848 2.53516 8.71436 2.55089 8.99023 2.57711V11.4389C8.70905 11.4756 8.43848 11.4861 8.16791 11.4861Z"
            fill="url(#paint0_radial_3890_38570)"
            fillOpacity="0.77"
          />
        </g>
      </g>
      <g id="window_2">
        <path
          id="Vector_5"
          d="M10.3747 2.73339C9.88666 2.7229 9.38266 2.71241 8.8256 2.70192C8.78316 2.70192 8.74072 2.69144 8.70358 2.67046C8.53381 2.58132 8.47545 2.45547 8.51259 2.25621C8.60278 1.96781 8.87335 1.82099 9.35083 1.8105L22.683 1.52734C22.6936 1.52734 22.7042 1.52734 22.7148 1.52734C22.7095 1.53259 22.6989 1.53783 22.6883 1.54307L22.3912 1.69514C22.3276 1.7266 22.2586 1.75282 22.1843 1.76855L19.8924 2.19853C18.269 2.50267 16.8313 2.66522 15.4837 2.68619C13.42 2.79631 12.0088 2.77009 10.3747 2.73339Z"
          fill="#4B545A"
        />
        <g id="Vector_6">
          <path
            d="M10.3747 2.73339C9.88666 2.7229 9.38266 2.71241 8.8256 2.70192C8.78316 2.70192 8.74071 2.69144 8.70358 2.67046C8.53381 2.58132 8.47545 2.45547 8.51259 2.25621C8.60278 1.96781 8.87335 1.82099 9.35082 1.8105L22.683 1.52734C22.6936 1.52734 22.7042 1.52734 22.7148 1.52734C22.7095 1.53259 22.6989 1.53783 22.6883 1.54307L22.3912 1.69514C22.3276 1.7266 22.2586 1.75282 22.1843 1.76855L19.8924 2.19853C18.269 2.50267 16.8313 2.66522 15.4837 2.68619C13.42 2.79631 12.0088 2.77009 10.3747 2.73339Z"
            fill="#4388FC"
            fillOpacity="0.1"
          />
          <path
            d="M10.3747 2.73339C9.88666 2.7229 9.38266 2.71241 8.8256 2.70192C8.78316 2.70192 8.74071 2.69144 8.70358 2.67046C8.53381 2.58132 8.47545 2.45547 8.51259 2.25621C8.60278 1.96781 8.87335 1.82099 9.35082 1.8105L22.683 1.52734C22.6936 1.52734 22.7042 1.52734 22.7148 1.52734C22.7095 1.53259 22.6989 1.53783 22.6883 1.54307L22.3912 1.69514C22.3276 1.7266 22.2586 1.75282 22.1843 1.76855L19.8924 2.19853C18.269 2.50267 16.8313 2.66522 15.4837 2.68619C13.42 2.79631 12.0088 2.77009 10.3747 2.73339Z"
            fill="url(#paint1_radial_3890_38570)"
            fillOpacity="0.77"
          />
        </g>
        <path
          id="Vector_7"
          d="M14.6194 1.70041C14.4284 2.04125 14.3595 2.29294 14.3064 2.73865L15.1181 2.70719C15.3357 2.30867 15.5479 2.01503 15.9033 1.66895L14.6194 1.70041Z"
          fill="#4B545A"
        />
        <path
          id="Vector_8"
          d="M21.049 1.98318L21.1604 1.56369L22.683 1.53223C22.6936 1.53223 22.7042 1.53223 22.7148 1.53223C22.7095 1.53747 22.6989 1.54271 22.6883 1.54796L22.3912 1.70002C22.3276 1.73149 22.2586 1.7577 22.1843 1.77344L21.049 1.98318Z"
          fill="#4B545A"
        />
      </g>
      <g id="window_3">
        <path
          id="Vector_9"
          d="M10.3747 11.2724C9.88666 11.2829 9.38266 11.2934 8.8256 11.3039C8.78316 11.3039 8.74072 11.3144 8.70358 11.3354C8.53381 11.4245 8.47545 11.5503 8.51259 11.7496C8.60278 12.038 8.87335 12.1848 9.35083 12.1953L22.683 12.4785C22.6936 12.4785 22.7042 12.4785 22.7148 12.4785C22.7095 12.4732 22.6989 12.468 22.6883 12.4627L22.3912 12.3107C22.3276 12.2792 22.2586 12.253 22.1843 12.2373L19.8818 11.802C18.2584 11.4979 16.8207 11.3354 15.4731 11.3144C13.42 11.2043 12.0088 11.2357 10.3747 11.2724Z"
          fill="#4B545A"
        />
        <g id="Vector_10">
          <path
            d="M10.3747 11.2724C9.88665 11.2829 9.38265 11.2934 8.8256 11.3039C8.78316 11.3039 8.74071 11.3144 8.70358 11.3354C8.53381 11.4245 8.47545 11.5503 8.51259 11.7496C8.60278 12.038 8.87335 12.1848 9.35082 12.1953L22.683 12.4785C22.6936 12.4785 22.7042 12.4785 22.7148 12.4785C22.7095 12.4732 22.6989 12.468 22.6883 12.4627L22.3912 12.3107C22.3276 12.2792 22.2586 12.253 22.1843 12.2373L19.8818 11.802C18.2584 11.4979 16.8207 11.3354 15.4731 11.3144C13.42 11.2043 12.0088 11.2357 10.3747 11.2724Z"
            fill="#4388FC"
            fillOpacity="0.1"
          />
          <path
            d="M10.3747 11.2724C9.88665 11.2829 9.38265 11.2934 8.8256 11.3039C8.78316 11.3039 8.74071 11.3144 8.70358 11.3354C8.53381 11.4245 8.47545 11.5503 8.51259 11.7496C8.60278 12.038 8.87335 12.1848 9.35082 12.1953L22.683 12.4785C22.6936 12.4785 22.7042 12.4785 22.7148 12.4785C22.7095 12.4732 22.6989 12.468 22.6883 12.4627L22.3912 12.3107C22.3276 12.2792 22.2586 12.253 22.1843 12.2373L19.8818 11.802C18.2584 11.4979 16.8207 11.3354 15.4731 11.3144C13.42 11.2043 12.0088 11.2357 10.3747 11.2724Z"
            fill="url(#paint2_radial_3890_38570)"
            fillOpacity="0.77"
          />
        </g>
        <path
          id="Vector_11"
          d="M14.6136 12.3058C14.4226 11.965 14.3536 11.7133 14.3006 11.2676L15.1123 11.299C15.3298 11.6976 15.542 11.9912 15.8975 12.3373L14.6136 12.3058Z"
          fill="#4B545A"
        />
        <path
          id="Vector_12"
          d="M21.0431 12.0225L21.1545 12.442L22.6772 12.4734C22.6878 12.4734 22.6984 12.4734 22.709 12.4734C22.7037 12.4682 22.6931 12.4629 22.6825 12.4577L22.3854 12.3056C22.3217 12.2742 22.2527 12.2479 22.1785 12.2322L21.0431 12.0225Z"
          fill="#4B545A"
        />
      </g>
      <g id="mirror ">
        <path
          id="Vector_13"
          d="M21.9492 1.70671C21.8219 1.73817 21.7476 1.73293 21.6256 1.70671V1.27148H21.9492V1.70671Z"
          fill="#594F4F"
        />
        <path
          id="Vector_14"
          d="M21.8593 1.34471L21.4137 1.33946C21.3659 1.33946 21.3235 1.308 21.3076 1.26081L20.9256 0.128178C20.915 0.0914728 20.9362 0.0495235 20.9734 0.0390362C21.0317 0.0233052 21.0954 0.00757418 21.175 0.00233052C21.228 -0.00291315 21.2811 0.00233052 21.3235 0.00233052C21.4349 0.0128178 21.541 0.0547672 21.6259 0.122935C21.7002 0.185859 21.7745 0.264514 21.8328 0.385118C21.9071 0.537184 21.9495 0.741687 21.9548 0.94619C21.9601 1.04058 21.9548 1.16118 21.9495 1.25557C21.9495 1.308 21.9071 1.34471 21.8593 1.34471Z"
          fill="#594F4F"
        />
      </g>
      <g id="mirror _2">
        <path
          id="Vector_15"
          d="M21.9512 12.2932C21.8238 12.2617 21.7496 12.2669 21.6275 12.2932V12.7284H21.9512V12.2932Z"
          fill="#594F4F"
        />
        <path
          id="Vector_16"
          d="M21.8554 12.6553L21.4098 12.6605C21.362 12.6605 21.3196 12.692 21.3037 12.7392L20.9217 13.8718C20.9111 13.9085 20.9323 13.9505 20.9694 13.9609C21.0278 13.9767 21.0915 13.9924 21.171 13.9976C21.2241 14.0029 21.2772 13.9976 21.3196 13.9976C21.431 13.9872 21.5371 13.9452 21.622 13.877C21.6963 13.8141 21.7705 13.7355 21.8289 13.6149C21.9032 13.4628 21.9456 13.2583 21.9509 13.0538C21.9562 12.9594 21.9509 12.8388 21.9456 12.7444C21.9456 12.692 21.9085 12.6553 21.8554 12.6553Z"
          fill="#594F4F"
        />
      </g>
      <g id="light">
        <path
          id="Vector_17"
          d="M30.5234 3.72605C29.8391 2.61964 29.038 1.99564 27.7647 1.67578H28.4013C28.778 1.67578 29.1388 1.80163 29.4252 2.04284C29.977 2.51477 30.3378 2.97621 30.5234 3.72605Z"
          fill="url(#paint3_linear_3890_38570)"
        />
        <path
          id="Vector_18"
          d="M30.5234 3.72605C29.8391 2.61964 29.038 1.99564 27.7647 1.67578H28.4013C28.778 1.67578 29.1388 1.80163 29.4252 2.04284C29.977 2.51477 30.3378 2.97621 30.5234 3.72605Z"
          fill="url(#paint4_linear_3890_38570)"
        />
        <path
          id="Vector_19"
          d="M27.77 1.68066H28.4013C28.778 1.68066 29.1388 1.80651 29.4252 2.04772C29.977 2.51441 30.3378 2.97585 30.5234 3.72569C29.8391 2.61928 29.0433 1.99528 27.77 1.68066Z"
          fill="#D5E3F0"
        />
      </g>
      <g id="light_2">
        <path
          id="Vector_20"
          d="M30.5234 10.2275C29.8391 11.334 29.038 11.9579 27.7647 12.2778H28.4013C28.778 12.2778 29.1388 12.152 29.4252 11.9108C29.977 11.4441 30.3378 10.9774 30.5234 10.2275Z"
          fill="url(#paint5_linear_3890_38570)"
        />
        <path
          id="Vector_21"
          d="M30.5234 10.2275C29.8391 11.334 29.038 11.9579 27.7647 12.2778H28.4013C28.778 12.2778 29.1388 12.152 29.4252 11.9108C29.977 11.4441 30.3378 10.9774 30.5234 10.2275Z"
          fill="url(#paint6_linear_3890_38570)"
        />
        <path
          id="Vector_22"
          d="M27.7705 12.2778H28.4019C28.7786 12.2778 29.1393 12.152 29.4258 11.9108C29.9829 11.4441 30.3436 10.9774 30.5293 10.2275C29.8396 11.334 29.0438 11.9579 27.7705 12.2778Z"
          fill="#D5E3F0"
        />
      </g>
      <g id="light_3">
        <path
          id="Vector_23"
          d="M3.28764 3.60521C3.58474 2.47782 4.12057 1.90627 4.92698 1.56018C5.16041 1.47104 5.37262 1.39239 5.57422 1.32422L5.54239 1.42909C5.43098 1.78042 5.17102 2.06358 4.83148 2.2104C4.27973 2.44636 4.04099 2.69282 3.66962 3.40595C3.59535 3.54753 3.4415 3.62619 3.28764 3.60521Z"
          fill="#D8394C"
        />
      </g>
      <g id="light_4">
        <path
          id="Vector_24"
          d="M3.28764 10.3959C3.58474 11.5233 4.12057 12.0949 4.92698 12.441C5.16041 12.5301 5.37262 12.6088 5.57422 12.6769L5.54239 12.5721C5.43098 12.2207 5.17102 11.9376 4.83148 11.7907C4.27973 11.5548 4.04099 11.3083 3.66962 10.5952C3.59535 10.4536 3.4415 10.375 3.28764 10.3959Z"
          fill="#D8394C"
        />
      </g>
      <path
        id="Vector_25"
        d="M24.1677 7.2592C24.1253 8.79035 23.9396 9.88104 23.5735 10.7882C23.4144 11.1815 23.0961 11.4856 22.6982 11.6324L19.4301 10.9979C19.2338 10.9612 19.0322 10.9245 18.8359 10.8931C19.1861 9.24131 19.3346 8.03527 19.3346 6.8869C19.3346 5.72281 19.1808 4.52726 18.8359 3.0433C19.0322 3.01184 19.2338 2.98038 19.4301 2.93843L22.6982 2.30919C23.0961 2.45601 23.4144 2.76014 23.5735 3.15342C23.9396 4.06581 24.12 5.15125 24.1677 6.6824V7.2592ZM24.3057 7.2592V6.6824C24.2632 5.18796 24.0881 4.06581 23.7062 3.10622C23.5258 2.65527 23.1544 2.31967 22.7141 2.17285L19.4036 2.81258C19.1595 2.85977 18.9155 2.90172 18.6714 2.93843C19.0322 4.46433 19.1967 5.68611 19.1967 6.89739C19.1967 8.1716 19.011 9.43008 18.6714 11.0189C18.9155 11.0556 19.1595 11.0976 19.4036 11.1448L22.7088 11.7845C23.1491 11.6324 23.5205 11.3021 23.7009 10.8511C24.0881 9.87579 24.2632 8.75365 24.3057 7.2592Z"
        fill="black"
      />
      <path
        id="Vector_26"
        d="M22.7092 11.7753L19.404 11.1356C19.16 11.0884 18.9159 11.0465 18.6719 11.0098C19.3403 7.92124 19.4093 6.05974 18.6719 2.93452C18.9159 2.89781 19.16 2.85587 19.404 2.80867L22.7092 2.16895C23.1495 2.32101 23.5209 2.65136 23.7013 3.10232C24.0886 4.06715 24.2583 5.18405 24.3008 6.6785V7.2553C24.2583 8.74974 24.0833 9.87189 23.696 10.8315C23.5209 11.2929 23.1495 11.6233 22.7092 11.7753Z"
        fill="#4B545A"
      />
      <g id="Vector_27">
        <path
          d="M22.7092 11.7753L19.404 11.1356C19.16 11.0884 18.9159 11.0465 18.6719 11.0098C19.3403 7.92124 19.4093 6.05974 18.6719 2.93452C18.9159 2.89781 19.16 2.85587 19.404 2.80867L22.7092 2.16895C23.1495 2.32101 23.5209 2.65136 23.7013 3.10232C24.0886 4.06715 24.2583 5.18405 24.3008 6.6785V7.2553C24.2583 8.74974 24.0833 9.87189 23.696 10.8315C23.5209 11.2929 23.1495 11.6233 22.7092 11.7753Z"
          fill="#4388FC"
          fillOpacity="0.1"
        />
        <path
          d="M22.7092 11.7753L19.404 11.1356C19.16 11.0884 18.9159 11.0465 18.6719 11.0098C19.3403 7.92124 19.4093 6.05974 18.6719 2.93452C18.9159 2.89781 19.16 2.85587 19.404 2.80867L22.7092 2.16895C23.1495 2.32101 23.5209 2.65136 23.7013 3.10232C24.0886 4.06715 24.2583 5.18405 24.3008 6.6785V7.2553C24.2583 8.74974 24.0833 9.87189 23.696 10.8315C23.5209 11.2929 23.1495 11.6233 22.7092 11.7753Z"
          fill="url(#paint7_radial_3890_38570)"
          fillOpacity="0.77"
        />
      </g>
      <path
        id="Vector_28"
        d="M23.0114 11.8324C23.7913 11.9844 24.5712 11.5702 24.863 10.8413C25.2503 9.87648 25.42 8.75958 25.4678 7.26514V6.68834C25.4253 5.19389 25.2503 4.07175 24.8683 3.11216C24.5765 2.38329 23.7966 1.96904 23.0167 2.12111L22.7143 2.17879C23.1547 2.33085 23.526 2.6612 23.7064 3.11216C24.0937 4.07699 24.2635 5.19389 24.3059 6.68834V7.26514C24.2635 8.75958 24.0884 9.88173 23.7011 10.8413C23.5207 11.2923 23.1494 11.6279 22.709 11.7747L23.0114 11.8324Z"
        fill="#4B545A"
      />
      <path
        id="Vector_29"
        d="M30.8054 9.83405C30.8001 9.83405 30.7895 9.81308 30.7895 9.7554V4.24955C30.7895 4.19187 30.8054 4.1709 30.8054 4.1709C30.8107 4.1709 30.8426 4.18139 30.885 4.24431L30.9168 4.2915C31.1131 4.56942 31.2564 4.77392 31.3943 5.11476C31.4474 5.4556 31.4792 5.81741 31.4951 6.20544V7.79427C31.4792 8.1823 31.4474 8.54411 31.3943 8.88495C31.3943 8.88495 31.3943 8.88495 31.3943 8.8902C31.2564 9.23103 31.1131 9.43554 30.9168 9.71345L30.885 9.76064C30.8426 9.82357 30.8107 9.83405 30.8054 9.83405Z"
        fill="#4B545A"
      />
      <path
        id="Rectangle"
        d="M9.6416 2.70287V11.3025C9.6416 11.3025 9.01753 11.3719 8.34181 11.0141C6.85633 10.2275 6.93591 3.56807 8.34181 2.96505C9.04503 2.66343 9.6416 2.70287 9.6416 2.70287Z"
        fill="#F2F2F2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3890_38570"
        x="0.94792"
        y="0"
        width="32.6042"
        height="18.1042"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.05208" />
        <feGaussianBlur stdDeviation="1.02604" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3890_38570"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3890_38570"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_3890_38570"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.2714 7.23873) rotate(180) scale(4.53602 14.8138)"
      >
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_3890_38570"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.39008 2.15518) rotate(-179.967) scale(15.5349 1.95146)"
      >
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_3890_38570"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.39008 11.8673) rotate(-179.967) scale(15.5349 1.95525)"
      >
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </radialGradient>
      <linearGradient
        id="paint3_linear_3890_38570"
        x1="29.1469"
        y1="1.67883"
        x2="29.1469"
        y2="3.72851"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1548" stopColor="#A1A1A1" />
        <stop offset="0.9205" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_3890_38570"
        x1="29.1469"
        y1="1.67883"
        x2="29.1469"
        y2="3.72851"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#333333" />
        <stop offset="0.1883" />
        <stop offset="0.3849" stopColor="#333333" />
        <stop offset="0.5983" />
        <stop offset="0.8033" stopColor="#333333" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_3890_38570"
        x1="29.1469"
        y1="12.2783"
        x2="29.1469"
        y2="10.2287"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1548" stopColor="#A1A1A1" />
        <stop offset="0.9205" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_3890_38570"
        x1="29.1469"
        y1="12.2783"
        x2="29.1469"
        y2="10.2287"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#333333" />
        <stop offset="0.1883" />
        <stop offset="0.3849" stopColor="#333333" />
        <stop offset="0.5983" />
        <stop offset="0.8033" stopColor="#333333" />
        <stop offset="1" />
      </linearGradient>
      <radialGradient
        id="paint7_radial_3890_38570"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.2316 7.04155) rotate(-179.354) scale(6.15285 15.1442)"
      >
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </radialGradient>
    </defs>
  </svg>
);
export const StandarCarImgIcon = () => (
  <svg
    width="120"
    height="44"
    viewBox="0 0 120 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5618_67539)">
      <ellipse
        cx="104.406"
        cy="35.8203"
        rx="9.27436"
        ry="7.48436"
        fill="black"
      />
      <ellipse
        cx="48.3526"
        cy="34.8796"
        rx="10.189"
        ry="8.42553"
        fill="black"
      />
      <path
        d="M112.05 38.2084C112.05 38.2084 95.4035 38.0338 84.7367 38.0046C78.5278 37.9875 75.0466 38.027 68.8378 38.0046C59.8425 37.9721 54.8 37.8387 45.8047 37.8007C37.6059 37.7661 33.0071 37.9768 24.81 37.8007C18.5184 37.6656 14.8222 37.3931 8.70728 37.1892C7.95253 37.1641 7.52567 36.9572 6.87279 36.5777C6.33529 36.2653 6.00633 36.0679 5.6498 35.5586C4.22297 33.5203 3.81493 32.3206 3.81531 30.0551C3.81544 29.2399 3.81531 28.2206 3.81531 28.2206C3.81531 28.2206 3.81531 22.9211 4.22297 19.252C4.29546 18.5996 4.28641 18.1803 4.63064 17.6214C5.04808 16.9436 5.47811 16.5407 6.26129 16.3984C8.50345 15.9908 11.1533 15.583 11.1533 15.583C11.1533 15.583 18.2346 15.5478 22.7717 15.583C30.4149 15.6423 34.6977 15.838 42.3396 15.9907C50.6976 16.1577 55.3826 16.3223 63.742 16.3984C71.3834 16.4679 75.6694 16.5416 83.3098 16.3984C88.4059 16.3028 96.3551 15.9907 96.3551 15.9907C96.3551 15.9907 101.865 16.4823 105.324 17.2137C108.479 17.8811 110.42 18.4367 113.273 19.4558C113.803 19.6452 114.292 20.475 114.292 20.475C114.292 20.475 115.124 21.6717 115.515 22.5133C115.802 23.1299 115.907 23.5002 116.127 24.144L116.132 24.1604C116.397 24.9368 116.548 25.3793 116.738 26.1823C117.565 29.6685 116.738 31.4819 116.534 35.3547C116.502 35.9662 115.776 36.5323 115.515 36.7816C114.973 37.3009 114.611 37.4745 113.885 37.8007C113.215 38.1015 112.05 38.2084 112.05 38.2084Z"
        fill="#F6E2DB"
      />
      <path
        d="M17.0643 11.7107C14.7061 13.1442 11.1532 15.5835 11.1532 15.5835L69.227 16.5067L96.355 15.9911L78.5028 7.38896C78.5028 7.38896 76.3428 6.42428 73.9173 6.09901C67.0955 5.18414 61.8157 5.18414 61.8157 5.18414C61.8157 5.18414 54.4959 5.00938 49.8048 5.00168C44.5461 4.99306 41.305 5.00179 35.8151 5.42938C32.9165 5.65513 31.5909 5.68868 28.4786 6.5524C25.3663 7.41612 24.8538 7.47928 20.9371 9.46851C18.6487 10.6308 18.5577 10.8029 17.0643 11.7107Z"
        fill="#F6E2DB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0643 11.7105C14.7142 13.1391 11.1775 15.5666 11.1533 15.5832L11.1533 15.5832C11.1533 15.5832 8.50345 15.9909 6.26129 16.3985C5.47811 16.5409 5.04808 16.9437 4.63064 17.6215C4.33716 18.098 4.30047 18.4731 4.25111 18.9776C4.24258 19.0649 4.23366 19.156 4.22297 19.2522C3.81531 22.9212 3.81531 28.2208 3.81531 28.2208C3.81531 28.2208 3.81544 29.24 3.81531 30.0553C3.81493 32.3208 4.22297 33.5205 5.6498 35.5588C6.00633 36.0681 6.33529 36.2655 6.87279 36.5779C7.52567 36.9574 7.95253 37.1642 8.70728 37.1894C8.70757 37.1894 8.70785 37.1894 8.70814 37.1894H8.91111L25.0138 37.5971H45.3971L21.5006 9.15332C21.3179 9.25508 21.1303 9.35999 20.9371 9.46833C19.4128 10.3231 18.5577 10.8027 17.0643 11.7105Z"
        fill="#FF5B01"
      />
      <path
        d="M23.2078 11.8351C22.1419 12.7722 20.8843 14.2948 20.2066 15.1495C19.9993 15.4109 20.1834 15.7897 20.517 15.7943L64.8724 16.4059C65.224 16.4108 65.4133 16.0012 65.1772 15.7407C64.7668 15.2879 64.2117 14.6938 63.7258 14.2367C62.6165 13.1931 61.898 12.7151 60.6659 11.8212C58.8473 10.5017 57.8234 9.76397 55.8855 8.6343C54.8916 8.05495 53.4868 7.34129 52.6448 6.92222C52.1712 6.68652 51.6519 6.56219 51.123 6.5527C49.8949 6.53066 47.5238 6.4922 45.9372 6.49219C43.5805 6.49218 40.1966 6.56769 40.1966 6.56769C40.1966 6.56769 35.6308 6.66218 32.8143 7.35234C30.7057 7.86906 29.4096 8.16682 27.4493 9.10291C25.6549 9.95974 24.7455 10.4834 23.2078 11.8351Z"
        fill="url(#paint0_linear_5618_67539)"
      />
      <path
        d="M40.5211 16.0701L41.0218 6.56836H43.7699V16.1172C43.7699 16.1172 42.7706 16.1074 42.1304 16.0948C41.5021 16.0825 40.5211 16.0701 40.5211 16.0701Z"
        fill="url(#paint1_linear_5618_67539)"
      />
      <ellipse
        cx="76.991"
        cy="33.5203"
        rx="8.76478"
        ry="9.78394"
        fill="black"
      />
      <path
        d="M87.2547 39.0241C87.2496 39.0333 87.2443 39.0426 87.2388 39.0521C87.123 39.2544 86.9435 39.5411 86.6907 39.8738C86.1849 40.5392 85.3873 41.387 84.2213 42.1124C83.0083 42.8671 81.1701 43.1217 79.6042 43.1801C79.1735 43.1962 78.7665 43.1973 78.4032 43.1906C78.4359 43.1826 78.4687 43.1746 78.5019 43.1663C79.4342 42.9345 80.5838 42.5714 81.3831 42.0484C82.0934 41.5836 82.8229 40.7992 83.3676 40.144C83.6419 39.8142 83.8728 39.5127 84.0352 39.2937C84.1165 39.1841 84.1807 39.0951 84.2247 39.0332C84.2269 39.0301 84.229 39.0271 84.2311 39.0241H87.2547Z"
        fill="black"
        stroke="black"
        strokeWidth="0.407664"
      />
      <ellipse
        cx="17.0643"
        cy="33.5203"
        rx="8.76478"
        ry="9.78394"
        fill="black"
      />
      <path
        d="M27.328 39.0241C27.3228 39.0333 27.3175 39.0426 27.3121 39.0521C27.1963 39.2544 27.0167 39.5411 26.7639 39.8738C26.2582 40.5392 25.4605 41.387 24.2946 42.1124C23.0815 42.8671 21.2434 43.1217 19.6775 43.1801C19.2467 43.1962 18.8397 43.1973 18.4765 43.1906C18.5091 43.1826 18.542 43.1746 18.5751 43.1663C19.5075 42.9345 20.657 42.5714 21.4564 42.0484C22.1667 41.5836 22.8962 40.7992 23.4409 40.144C23.7151 39.8142 23.946 39.5127 24.1085 39.2937C24.1897 39.1841 24.2539 39.0951 24.298 39.0332C24.3001 39.0301 24.3023 39.0271 24.3044 39.0241H27.328Z"
        fill="black"
        stroke="black"
        strokeWidth="0.407664"
      />
      <ellipse
        cx="76.9911"
        cy="33.7242"
        rx="7.94945"
        ry="9.17245"
        fill="#303644"
      />
      <ellipse
        cx="76.7872"
        cy="33.5206"
        rx="6.11496"
        ry="7.33796"
        fill="#EFEFEF"
      />
      <ellipse
        cx="76.7872"
        cy="33.7241"
        rx="5.29963"
        ry="6.3188"
        fill="url(#paint2_linear_5618_67539)"
      />
      <ellipse
        cx="17.0643"
        cy="33.7242"
        rx="7.94945"
        ry="9.17245"
        fill="#303644"
      />
      <ellipse
        cx="16.8606"
        cy="33.5206"
        rx="6.11496"
        ry="7.33796"
        fill="#EFEFEF"
      />
      <ellipse
        cx="16.8605"
        cy="33.7241"
        rx="5.29963"
        ry="6.3188"
        fill="url(#paint3_linear_5618_67539)"
      />
      <rect
        x="3"
        y="43.3047"
        width="114.146"
        height="0.815328"
        fill="#D9D9D9"
      />
      <path
        d="M84.7734 38.0049H113.273L112.254 38.8202H84.1251L84.7734 38.0049Z"
        fill="black"
      />
      <path
        d="M25.0138 37.5977H69.0416L69.653 38.8206H24.1985L25.0138 37.5977Z"
        fill="black"
      />
      <path
        d="M61.4997 10.4879C59.1338 8.96374 54.9771 6.61513 54.9771 6.61513C54.9771 6.61513 62.1836 6.5099 66.7993 6.61513C71.8186 6.72956 78.5093 7.40798 78.5093 7.40798C78.5093 7.40798 83.0741 9.03093 85.4883 10.1848C89.7379 12.2158 96.355 15.9914 96.355 15.9914L81.4752 16.3991H69.4491C69.4491 16.3991 65.0215 12.7569 61.4997 10.4879Z"
        fill="#191919"
      />
      <g clipPath="url(#clip1_5618_67539)">
        <rect
          x="29.8392"
          y="22.5527"
          width="9.67406"
          height="9.67406"
          rx="2.41852"
          fill="url(#paint4_linear_5618_67539)"
        />
        <g filter="url(#filter0_d_5618_67539)">
          <path
            d="M31.0759 32.0413L31.7621 30.8135C32.1138 30.1841 32.7784 29.7943 33.4993 29.7943H35.9082C36.6291 29.7943 37.2937 30.1841 37.6454 30.8135L38.3202 32.0209C38.2923 32.0343 38.2641 32.0471 38.2355 32.0592C38.5605 31.9207 38.8434 31.7026 39.0599 31.4295L34.9708 24.2389C34.961 24.2216 34.9426 24.2109 34.9227 24.2109H34.4295C34.4096 24.2109 34.3912 24.2216 34.3814 24.2389L30.2924 31.4295C30.4997 31.6911 30.768 31.9023 31.0759 32.0413Z"
            fill="url(#paint5_linear_5618_67539)"
          />
        </g>
      </g>
      <path
        d="M44.3547 29.4496C44.1666 29.4496 43.9972 29.4161 43.8464 29.3491C43.697 29.2808 43.5785 29.1803 43.4909 29.0476C43.4046 28.9149 43.3614 28.7513 43.3614 28.5568C43.3614 28.3893 43.3923 28.2508 43.4542 28.1413C43.516 28.0318 43.6004 27.9442 43.7073 27.8785C43.8142 27.8128 43.9347 27.7632 44.0687 27.7297C44.2039 27.6949 44.3437 27.6698 44.488 27.6543C44.6619 27.6363 44.803 27.6202 44.9112 27.606C45.0194 27.5906 45.098 27.5674 45.147 27.5365C45.1972 27.5043 45.2223 27.4547 45.2223 27.3877V27.3761C45.2223 27.2305 45.1792 27.1178 45.0928 27.0379C45.0065 26.958 44.8822 26.9181 44.7199 26.9181C44.5486 26.9181 44.4126 26.9555 44.3122 27.0302C44.213 27.1049 44.146 27.1931 44.1112 27.2949L43.458 27.2022C43.5096 27.0218 43.5946 26.8711 43.7131 26.75C43.8316 26.6276 43.9766 26.5361 44.1479 26.4756C44.3192 26.4137 44.5086 26.3828 44.716 26.3828C44.859 26.3828 45.0014 26.3996 45.1431 26.4331C45.2848 26.4666 45.4143 26.522 45.5315 26.5993C45.6487 26.6753 45.7428 26.779 45.8136 26.9104C45.8858 27.0418 45.9218 27.206 45.9218 27.4031V29.3896H45.2494V28.9819H45.2262C45.1837 29.0644 45.1238 29.1417 45.0465 29.2138C44.9705 29.2847 44.8745 29.342 44.7585 29.3858C44.6439 29.4283 44.5093 29.4496 44.3547 29.4496ZM44.5363 28.9355C44.6767 28.9355 44.7985 28.9078 44.9015 28.8524C45.0046 28.7958 45.0838 28.721 45.1392 28.6283C45.1959 28.5355 45.2242 28.4344 45.2242 28.3249V27.9751C45.2023 27.9932 45.165 28.0099 45.1122 28.0254C45.0606 28.0408 45.0027 28.0544 44.9383 28.0659C44.8738 28.0775 44.8101 28.0878 44.7469 28.0969C44.6838 28.1059 44.6291 28.1136 44.5827 28.1201C44.4783 28.1342 44.3849 28.1574 44.3025 28.1896C44.22 28.2218 44.155 28.2669 44.1073 28.3249C44.0597 28.3816 44.0358 28.455 44.0358 28.5452C44.0358 28.674 44.0828 28.7713 44.1769 28.837C44.2709 28.9027 44.3907 28.9355 44.5363 28.9355ZM47.2629 28.4582L47.261 27.6138H47.3731L48.4398 26.4215H49.2572L47.9451 27.8824H47.8001L47.2629 28.4582ZM46.6252 29.3896V25.4321H47.3248V29.3896H46.6252ZM48.4881 29.3896L47.5219 28.0389L47.9934 27.5461L49.3248 29.3896H48.4881ZM50.5775 29.4496C50.3894 29.4496 50.22 29.4161 50.0693 29.3491C49.9198 29.2808 49.8013 29.1803 49.7137 29.0476C49.6274 28.9149 49.5842 28.7513 49.5842 28.5568C49.5842 28.3893 49.6152 28.2508 49.677 28.1413C49.7388 28.0318 49.8232 27.9442 49.9301 27.8785C50.0371 27.8128 50.1575 27.7632 50.2915 27.7297C50.4268 27.6949 50.5666 27.6698 50.7108 27.6543C50.8848 27.6363 51.0258 27.6202 51.134 27.606C51.2423 27.5906 51.3208 27.5674 51.3698 27.5365C51.42 27.5043 51.4452 27.4547 51.4452 27.3877V27.3761C51.4452 27.2305 51.402 27.1178 51.3157 27.0379C51.2294 26.958 51.1051 26.9181 50.9427 26.9181C50.7714 26.9181 50.6355 26.9555 50.535 27.0302C50.4358 27.1049 50.3688 27.1931 50.334 27.2949L49.6809 27.2022C49.7324 27.0218 49.8174 26.8711 49.9359 26.75C50.0545 26.6276 50.1994 26.5361 50.3707 26.4756C50.5421 26.4137 50.7315 26.3828 50.9389 26.3828C51.0819 26.3828 51.2242 26.3996 51.3659 26.4331C51.5076 26.4666 51.6371 26.522 51.7543 26.5993C51.8716 26.6753 51.9656 26.779 52.0365 26.9104C52.1086 27.0418 52.1447 27.206 52.1447 27.4031V29.3896H51.4722V28.9819H51.449C51.4065 29.0644 51.3466 29.1417 51.2693 29.2138C51.1933 29.2847 51.0973 29.342 50.9814 29.3858C50.8667 29.4283 50.7321 29.4496 50.5775 29.4496ZM50.7591 28.9355C50.8996 28.9355 51.0213 28.9078 51.1244 28.8524C51.2274 28.7958 51.3067 28.721 51.3621 28.6283C51.4187 28.5355 51.4471 28.4344 51.4471 28.3249V27.9751C51.4252 27.9932 51.3878 28.0099 51.335 28.0254C51.2835 28.0408 51.2255 28.0544 51.1611 28.0659C51.0967 28.0775 51.0329 28.0878 50.9698 28.0969C50.9067 28.1059 50.8519 28.1136 50.8055 28.1201C50.7012 28.1342 50.6078 28.1574 50.5253 28.1896C50.4429 28.2218 50.3778 28.2669 50.3302 28.3249C50.2825 28.3816 50.2587 28.455 50.2587 28.5452C50.2587 28.674 50.3057 28.7713 50.3997 28.837C50.4938 28.9027 50.6136 28.9355 50.7591 28.9355Z"
        fill="#101F5F"
      />
      <path
        d="M56.1919 26.4215V26.9625H54.4856V26.4215H56.1919ZM54.9069 25.7103H55.6064V28.4969C55.6064 28.5909 55.6206 28.6631 55.6489 28.7133C55.6786 28.7623 55.7172 28.7958 55.7649 28.8138C55.8125 28.8318 55.8653 28.8408 55.9233 28.8408C55.9671 28.8408 56.0071 28.8376 56.0431 28.8312C56.0805 28.8247 56.1088 28.8189 56.1282 28.8138L56.246 29.3607C56.2087 29.3735 56.1552 29.3877 56.0856 29.4032C56.0174 29.4186 55.9336 29.4277 55.8344 29.4302C55.6592 29.4354 55.5014 29.409 55.361 29.351C55.2206 29.2917 55.1091 29.2003 55.0267 29.0766C54.9455 28.9529 54.9056 28.7983 54.9069 28.6128V25.7103ZM57.6311 29.4496C57.443 29.4496 57.2736 29.4161 57.1229 29.3491C56.9734 29.2808 56.8549 29.1803 56.7673 29.0476C56.681 28.9149 56.6378 28.7513 56.6378 28.5568C56.6378 28.3893 56.6687 28.2508 56.7306 28.1413C56.7924 28.0318 56.8768 27.9442 56.9837 27.8785C57.0907 27.8128 57.2111 27.7632 57.3451 27.7297C57.4804 27.6949 57.6201 27.6698 57.7644 27.6543C57.9383 27.6363 58.0794 27.6202 58.1876 27.606C58.2958 27.5906 58.3744 27.5674 58.4234 27.5365C58.4736 27.5043 58.4987 27.4547 58.4987 27.3877V27.3761C58.4987 27.2305 58.4556 27.1178 58.3693 27.0379C58.283 26.958 58.1586 26.9181 57.9963 26.9181C57.825 26.9181 57.6891 26.9555 57.5886 27.0302C57.4894 27.1049 57.4224 27.1931 57.3876 27.2949L56.7345 27.2022C56.786 27.0218 56.871 26.8711 56.9895 26.75C57.108 26.6276 57.253 26.5361 57.4243 26.4756C57.5957 26.4137 57.785 26.3828 57.9924 26.3828C58.1354 26.3828 58.2778 26.3996 58.4195 26.4331C58.5612 26.4666 58.6907 26.522 58.8079 26.5993C58.9252 26.6753 59.0192 26.779 59.0901 26.9104C59.1622 27.0418 59.1983 27.206 59.1983 27.4031V29.3896H58.5258V28.9819H58.5026C58.4601 29.0644 58.4002 29.1417 58.3229 29.2138C58.2469 29.2847 58.1509 29.342 58.035 29.3858C57.9203 29.4283 57.7857 29.4496 57.6311 29.4496ZM57.8127 28.9355C57.9532 28.9355 58.0749 28.9078 58.178 28.8524C58.281 28.7958 58.3602 28.721 58.4156 28.6283C58.4723 28.5355 58.5007 28.4344 58.5007 28.3249V27.9751C58.4788 27.9932 58.4414 28.0099 58.3886 28.0254C58.3371 28.0408 58.2791 28.0544 58.2147 28.0659C58.1503 28.0775 58.0865 28.0878 58.0234 28.0969C57.9602 28.1059 57.9055 28.1136 57.8591 28.1201C57.7548 28.1342 57.6614 28.1574 57.5789 28.1896C57.4965 28.2218 57.4314 28.2669 57.3837 28.3249C57.3361 28.3816 57.3122 28.455 57.3122 28.5452C57.3122 28.674 57.3593 28.7713 57.4533 28.837C57.5474 28.9027 57.6672 28.9355 57.8127 28.9355ZM60.4737 26.4215L61.0727 27.5171L61.6814 26.4215H62.4215L61.5268 27.9056L62.437 29.3896H61.7007L61.0727 28.321L60.4505 29.3896H59.7084L60.6128 27.9056L59.7316 26.4215H60.4737ZM62.9626 29.3896V26.4215H63.6621V29.3896H62.9626ZM63.3143 26.0002C63.2035 26.0002 63.1082 25.9635 63.0283 25.8901C62.9484 25.8153 62.9085 25.7258 62.9085 25.6215C62.9085 25.5158 62.9484 25.4263 63.0283 25.3528C63.1082 25.2781 63.2035 25.2408 63.3143 25.2408C63.4264 25.2408 63.5217 25.2781 63.6003 25.3528C63.6802 25.4263 63.7201 25.5158 63.7201 25.6215C63.7201 25.7258 63.6802 25.8153 63.6003 25.8901C63.5217 25.9635 63.4264 26.0002 63.3143 26.0002Z"
        fill="#FF5B01"
      />
      <path
        d="M41.9984 16.0713C41.9984 16.0713 41.6093 17.7296 41.6091 18.8113C41.6075 25.4279 41.8905 35.961 41.8905 35.961"
        stroke="url(#paint6_linear_5618_67539)"
        strokeWidth="0.0815329"
      />
      <path
        d="M20.2727 15.6504L27.0778 30.1081C28.4227 32.9654 31.2967 34.7891 34.4548 34.7891H40.4885H65.121"
        stroke="url(#paint7_linear_5618_67539)"
        strokeWidth="0.0815329"
      />
      <path
        d="M75.119 17.2784C66.6875 15.929 27.3542 16.1241 27.3542 16.1241L29.3685 16.6706L43.291 17.2784C43.291 17.2784 52.3314 17.1615 58.0434 17.9576C61.3187 18.4141 61.8791 18.4322 65.1751 19.2188C67.389 19.7471 69.4756 20.2481 70.4034 21.7947C70.9475 22.7017 71.0749 23.3676 71.0489 24.425C71.015 25.8039 69.7602 27.7134 69.7602 27.7134L71.0489 26.0397L72.7059 24.7509L75.1161 23.7969L77.6266 23.5793L79.7355 23.9977L81.8611 25.1191L83.2503 26.4079L84.2211 27.613L85.1929 29.7448C85.1929 29.7448 86.4068 27.682 89.2166 26.4079C94.0314 24.2245 99.9371 24.025 105.609 23.6935C109.173 23.4852 112.653 22.9799 114.363 22.7058C114.907 22.6186 115.202 22.0216 114.922 21.5468C114.805 21.3471 114.679 21.1449 114.526 20.9126C114.438 20.7778 114.28 20.7093 114.121 20.736C113.078 20.9112 109.071 21.5511 105.609 21.6504C100.843 21.7871 97.2122 21.8746 91.891 21.2356C85.2093 20.4333 83.7257 18.6558 75.119 17.2784Z"
        fill="#FFEAE3"
      />
      <path
        d="M89.5155 21.8226L90.9611 23.2612C90.9611 23.2612 103.829 23.4811 108.571 23.2612C113.344 23.0399 115.322 22.1287 115.322 22.1287C115.322 22.1287 115.093 21.722 114.936 21.4665C114.771 21.2 114.506 20.7881 114.506 20.7881C114.506 20.7881 112.285 21.6203 107.394 21.8226C102.526 22.0239 89.5155 21.8226 89.5155 21.8226Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5618_67539"
        x="26.6646"
        y="21.7924"
        width="16.023"
        height="15.1042"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.20926" />
        <feGaussianBlur stdDeviation="1.81389" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0832289 0 0 0 0 0.113137 0 0 0 0 0.234342 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5618_67539"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5618_67539"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5618_67539"
        x1="43.2567"
        y1="5.92886"
        x2="43.2567"
        y2="16.6026"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#191919" />
        <stop offset="1" stopColor="#3D3D3D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5618_67539"
        x1="42.146"
        y1="6.56836"
        x2="42.146"
        y2="16.0246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C1C1C" />
        <stop offset="1" stopColor="#191919" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_5618_67539"
        x1="72.099"
        y1="24.3478"
        x2="77.8063"
        y2="39.0237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_5618_67539"
        x1="12.1724"
        y1="24.3478"
        x2="17.8797"
        y2="39.0237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_5618_67539"
        x1="33.1284"
        y1="22.0414"
        x2="37.7858"
        y2="33.1527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#213482" />
        <stop offset="1" stopColor="#041660" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_5618_67539"
        x1="34.1786"
        y1="23.9207"
        x2="36.4451"
        y2="32.4201"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5A00" />
        <stop offset="1" stopColor="#DB4E00" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_5618_67539"
        x1="41.9578"
        y1="16.0711"
        x2="41.8521"
        y2="36.858"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_5618_67539"
        x1="42.6969"
        y1="15.6504"
        x2="63.1197"
        y2="37.1977"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A3939" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_5618_67539">
        <rect width="120" height="44" fill="white" />
      </clipPath>
      <clipPath id="clip1_5618_67539">
        <rect
          x="29.8392"
          y="22.5527"
          width="9.67406"
          height="9.67406"
          rx="2.41852"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ConfortCarImgIcon = () => (
  <svg
    width="118"
    height="35"
    viewBox="0 0 118 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="105.886" cy="27.8704" rx="8.80645" ry="7.10676" fill="black" />
    <ellipse cx="47.2603" cy="26.977" rx="9.67496" ry="8.00045" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.42769 9.32852L12.0483 7.16729L19.1805 3.77574C19.1805 3.77574 22.3348 2.32474 24.4674 1.73083C26.5817 1.14199 27.95 1.00991 29.8675 0.824822C30.3196 0.781176 30.8023 0.734584 31.3325 0.67836C36.1481 0.167693 38.9594 0.132555 42.7987 0.0845659C43.7812 0.0722861 44.831 0.0591649 45.9989 0.0370194C50.3916 -0.0462742 57.2491 0.0370194 57.2491 0.0370194C57.2491 0.0370194 65.038 0.149784 69.9829 0.744246C73.048 1.11273 77.7879 1.99898 77.7879 1.99898C77.7879 1.99898 83.9238 4.0197 87.7204 5.6528C91.378 7.22605 96.8131 10.1379 97.0854 10.2841C97.3282 10.3162 102.577 11.0133 105.154 11.5591C108.903 12.3535 113.674 14.342 113.674 14.342C113.674 14.342 115.049 14.9643 115.839 15.8881C116.078 16.1676 116.217 16.3254 116.33 16.5003C116.523 16.7984 116.639 17.1461 117.04 18.2303C117.206 19.883 117.161 20.7022 117.083 22.1008C117.069 22.3443 117.055 22.6054 117.04 22.8916C117.017 23.3455 117.006 23.8256 116.994 24.3037C116.961 25.7231 116.928 27.125 116.585 27.7745C116.272 28.3691 116.018 28.6883 115.487 29.1001C114.239 30.0677 110.651 29.9451 110.651 29.9451H103.519C103.519 29.9451 95.4912 29.9729 84.3715 29.9451C81.2698 29.9373 78.8211 29.9419 76.3996 29.9464C73.7679 29.9513 71.1684 29.9562 67.7976 29.9451C63.0213 29.9294 59.314 29.8888 55.5867 29.848C51.9964 29.8087 48.3875 29.7692 43.7866 29.7515C40.3776 29.7384 37.5655 29.7624 34.8744 29.7853C30.8186 29.8198 27.0373 29.852 21.9005 29.7515C15.3418 29.6232 12.1001 29.6671 12.1001 29.6671L4.45922 27.7466C4.45922 27.7466 2.36759 26.8671 1.46483 25.8054C1.31589 25.6302 1.17764 25.479 1.05046 25.3398C0.377414 24.6035 0.0141151 24.206 0.0144462 22.3967C0.0144858 22.1803 0.0119897 21.8931 0.00907076 21.5572C0.00154784 20.6916 -0.00878377 19.5028 0.014246 18.3701C0.0638538 15.9303 0.221385 12.5187 0.221385 12.5187C0.221385 12.5187 0.612539 11.0767 1.29428 10.6283C1.89831 10.231 3.29968 9.97169 3.29968 9.97169L8.42769 9.32852Z"
      fill="#E4E4E4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.3578 1.76172L49.7503 29.7889C47.9155 29.7732 45.9619 29.7599 43.7865 29.7516C40.3774 29.7385 37.5654 29.7624 34.8743 29.7853C30.8184 29.8199 27.0372 29.8521 21.9004 29.7516C15.3417 29.6232 12.1 29.6671 12.1 29.6671L4.4591 27.7466C4.4591 27.7466 2.36746 26.8671 1.4647 25.8054C1.31577 25.6302 1.17753 25.479 1.05035 25.3399L1.05034 25.3398C0.377292 24.6035 0.013993 24.206 0.0143241 22.3967C0.0143637 22.1803 0.0118676 21.8931 0.00894869 21.5572C0.00142578 20.6916 -0.00890585 19.5028 0.0141239 18.3702C0.0637318 15.9303 0.221263 12.5187 0.221263 12.5187C0.221263 12.5187 0.612416 11.0767 1.29416 10.6283C1.89819 10.231 3.29956 9.9717 3.29956 9.9717L8.42785 9.3285L8.42748 9.32849L12.0482 7.16721L19.1804 3.77565C19.1804 3.77565 22.2285 2.3735 24.3578 1.76172Z"
      fill="#FF5B01"
    />
    <path
      d="M20.9625 8.19335L22.3086 9.47308C22.3782 9.53933 22.4701 9.57728 22.5662 9.57953L64.5443 10.5635C64.5443 10.5635 60.8396 7.61845 59.0299 6.47042C57.5309 5.51945 55.7412 4.48172 54.1409 3.71325C52.6743 3.00893 52.0956 2.8482 50.5351 2.38756C47.8786 1.60337 45.6013 1.56787 43.4901 1.56786C41.2523 1.56785 30.7834 1.36123 27.5252 2.38566C25.9782 3.0525 25.1344 3.50987 23.742 4.45802C22.9657 4.98663 21.8586 5.82405 21.0485 6.44777C20.4883 6.87907 20.4501 7.7062 20.9625 8.19335Z"
      fill="url(#paint0_linear_5618_67595)"
    />
    <path
      d="M40.9344 9.98018L41.4099 1.55078H44.0194V10.0219C44.0194 10.0219 43.0705 10.0132 42.4626 10.0021C41.866 9.99112 40.9344 9.98018 40.9344 9.98018Z"
      fill="url(#paint1_linear_5618_67595)"
    />
    <ellipse cx="20.2476" cy="25.5979" rx="8.32258" ry="9.29032" fill="black" />
    <path
      d="M30.1417 30.7346C30.1314 30.7488 30.1208 30.7635 30.1098 30.7787C29.9548 30.9917 29.7228 31.2885 29.4169 31.6208C28.8041 32.2863 27.8993 33.0887 26.7261 33.6483C25.4003 34.2807 23.7636 34.5433 22.4466 34.6458C22.2727 34.6593 22.1046 34.67 21.944 34.6784C22.8305 34.4376 23.8851 34.0816 24.6117 33.6062C25.2862 33.1649 25.9789 32.42 26.4961 31.798C26.7565 31.4847 26.9758 31.1985 27.13 30.9905C27.2071 30.8865 27.2681 30.8019 27.3099 30.7431C27.312 30.7402 27.314 30.7374 27.316 30.7346H30.1417Z"
      fill="black"
      stroke="black"
      strokeWidth="0.387097"
    />
    <ellipse
      cx="20.2604"
      cy="25.8806"
      rx="7.54839"
      ry="8.70968"
      fill="#303644"
    />
    <ellipse
      cx="20.0669"
      cy="25.6875"
      rx="5.80645"
      ry="6.96774"
      fill="#EFEFEF"
    />
    <ellipse
      cx="20.0669"
      cy="25.8809"
      rx="5.03226"
      ry="6"
      fill="url(#paint2_linear_5618_67595)"
    />
    <ellipse cx="77.9377" cy="25.6868" rx="8.32258" ry="9.29032" fill="black" />
    <path
      d="M87.6834 30.9123C87.6785 30.921 87.6735 30.9298 87.6683 30.9388C87.5584 31.131 87.3879 31.4032 87.1478 31.7191C86.6676 32.351 85.9102 33.1559 84.8031 33.8447C83.6512 34.5614 81.9058 34.8032 80.4189 34.8586C80.0098 34.8738 79.6234 34.8749 79.2785 34.8685C79.3095 34.861 79.3407 34.8533 79.3722 34.8455C80.2575 34.6254 81.349 34.2805 82.108 33.7839C82.7825 33.3427 83.4752 32.5978 83.9924 31.9757C84.2528 31.6625 84.4721 31.3762 84.6263 31.1683C84.7035 31.0642 84.7645 30.9796 84.8063 30.9209C84.8083 30.918 84.8104 30.9151 84.8124 30.9123H87.6834Z"
      fill="black"
      stroke="black"
      strokeWidth="0.387097"
    />
    <ellipse
      cx="77.9375"
      cy="25.8806"
      rx="7.54839"
      ry="8.70968"
      fill="#303644"
    />
    <ellipse
      cx="77.7439"
      cy="25.6875"
      rx="5.80645"
      ry="6.96774"
      fill="#EFEFEF"
    />
    <ellipse
      cx="77.744"
      cy="25.8809"
      rx="5.03226"
      ry="6"
      fill="url(#paint3_linear_5618_67595)"
    />
    <rect
      x="0.0618896"
      y="34.6787"
      width="117.091"
      height="0.774194"
      fill="#D9D9D9"
    />
    <path
      d="M85.2145 29.9453H112.494L111.523 30.7195H84.7278L85.2145 29.9453Z"
      fill="black"
    />
    <path
      d="M27.8222 29.4346H70.3542L70.9449 30.5959H27.0345L27.8222 29.4346Z"
      fill="black"
    />
    <path
      d="M60.1618 5.48429C57.3839 3.78139 53.0667 1.78295 53.0667 1.78295C53.0667 1.78295 61.3262 1.57042 66.6118 1.62666C70.9801 1.67314 77.786 2.00031 77.786 2.00031C77.786 2.00031 83.3335 3.75941 86.9553 5.28649C90.8675 6.93603 97.0272 10.1954 97.0272 10.1954C97.0272 10.1954 86.6734 10.8215 79.9052 10.6898C74.5656 10.5858 67.2309 10.3907 67.2309 10.3907C67.2309 10.3907 62.4126 6.8641 60.1618 5.48429Z"
      fill="#191919"
    />
    <g clipPath="url(#clip0_5618_67595)">
      <rect
        x="35.4873"
        y="15.2725"
        width="9.18599"
        height="9.18599"
        rx="2.2965"
        fill="url(#paint4_linear_5618_67595)"
      />
      <g filter="url(#filter0_d_5618_67595)">
        <path
          d="M36.6615 24.283L37.3131 23.1171C37.647 22.5195 38.2781 22.1493 38.9626 22.1493H41.25C41.9345 22.1493 42.5656 22.5195 42.8995 23.1171L43.5403 24.2636C43.5138 24.2763 43.487 24.2884 43.4599 24.3C43.7685 24.1685 44.0371 23.9614 44.2426 23.702L40.3599 16.8742C40.3506 16.8578 40.3331 16.8477 40.3143 16.8477H39.8459C39.827 16.8477 39.8096 16.8578 39.8002 16.8742L35.9175 23.702C36.1143 23.9505 36.3691 24.1509 36.6615 24.283Z"
          fill="url(#paint5_linear_5618_67595)"
        />
      </g>
    </g>
    <path
      d="M49.2704 21.4221C49.0918 21.4221 48.9309 21.3903 48.7878 21.3267C48.6459 21.2619 48.5333 21.1665 48.4502 21.0405C48.3682 20.9145 48.3272 20.7591 48.3272 20.5744C48.3272 20.4154 48.3566 20.2839 48.4153 20.1799C48.474 20.0759 48.5541 19.9927 48.6557 19.9303C48.7572 19.8679 48.8716 19.8208 48.9988 19.789C49.1272 19.756 49.26 19.7322 49.397 19.7175C49.5621 19.7004 49.6961 19.6851 49.7988 19.6716C49.9016 19.6569 49.9762 19.6349 50.0227 19.6056C50.0704 19.575 50.0942 19.5279 50.0942 19.4643V19.4533C50.0942 19.315 50.0533 19.208 49.9713 19.1321C49.8893 19.0563 49.7713 19.0184 49.6172 19.0184C49.4545 19.0184 49.3254 19.0539 49.23 19.1248C49.1358 19.1958 49.0722 19.2795 49.0392 19.3762L48.419 19.2881C48.4679 19.1169 48.5486 18.9737 48.6612 18.8587C48.7737 18.7425 48.9113 18.6557 49.074 18.5982C49.2367 18.5395 49.4165 18.5101 49.6135 18.5101C49.7493 18.5101 49.8845 18.526 50.019 18.5578C50.1536 18.5896 50.2765 18.6422 50.3878 18.7156C50.4991 18.7878 50.5884 18.8863 50.6557 19.011C50.7242 19.1358 50.7585 19.2918 50.7585 19.4789V21.3652H50.1199V20.9781H50.0979C50.0575 21.0564 50.0007 21.1298 49.9273 21.1983C49.8551 21.2655 49.764 21.32 49.6539 21.3616C49.545 21.4019 49.4172 21.4221 49.2704 21.4221ZM49.4429 20.934C49.5762 20.934 49.6918 20.9077 49.7896 20.8551C49.8875 20.8013 49.9627 20.7304 50.0153 20.6423C50.0692 20.5542 50.0961 20.4582 50.0961 20.3542V20.0221C50.0753 20.0392 50.0398 20.0551 49.9897 20.0698C49.9407 20.0845 49.8857 20.0973 49.8245 20.1083C49.7633 20.1193 49.7028 20.1291 49.6429 20.1377C49.5829 20.1462 49.5309 20.1536 49.4869 20.1597C49.3878 20.1732 49.2991 20.1952 49.2208 20.2258C49.1425 20.2563 49.0808 20.2991 49.0355 20.3542C48.9902 20.408 48.9676 20.4777 48.9676 20.5634C48.9676 20.6857 49.0123 20.7781 49.1016 20.8404C49.1909 20.9028 49.3046 20.934 49.4429 20.934ZM52.0319 20.4808L52.0301 19.6789H52.1365L53.1494 18.5468H53.9255L52.6796 19.934H52.542L52.0319 20.4808ZM51.4264 21.3652V17.6073H52.0906V21.3652H51.4264ZM53.1952 21.3652L52.2778 20.0826L52.7255 19.6147L53.9898 21.3652H53.1952ZM55.1793 21.4221C55.0007 21.4221 54.8398 21.3903 54.6967 21.3267C54.5548 21.2619 54.4422 21.1665 54.359 21.0405C54.2771 20.9145 54.2361 20.7591 54.2361 20.5744C54.2361 20.4154 54.2655 20.2839 54.3242 20.1799C54.3829 20.0759 54.463 19.9927 54.5646 19.9303C54.6661 19.8679 54.7805 19.8208 54.9077 19.789C55.0361 19.756 55.1689 19.7322 55.3059 19.7175C55.471 19.7004 55.605 19.6851 55.7077 19.6716C55.8105 19.6569 55.8851 19.6349 55.9316 19.6056C55.9793 19.575 56.0031 19.5279 56.0031 19.4643V19.4533C56.0031 19.315 55.9621 19.208 55.8802 19.1321C55.7982 19.0563 55.6802 19.0184 55.526 19.0184C55.3634 19.0184 55.2343 19.0539 55.1389 19.1248C55.0447 19.1958 54.9811 19.2795 54.9481 19.3762L54.3279 19.2881C54.3768 19.1169 54.4575 18.9737 54.5701 18.8587C54.6826 18.7425 54.8202 18.6557 54.9829 18.5982C55.1456 18.5395 55.3254 18.5101 55.5224 18.5101C55.6582 18.5101 55.7933 18.526 55.9279 18.5578C56.0625 18.5896 56.1854 18.6422 56.2967 18.7156C56.408 18.7878 56.4973 18.8863 56.5646 19.011C56.6331 19.1358 56.6674 19.2918 56.6674 19.4789V21.3652H56.0288V20.9781H56.0068C55.9664 21.0564 55.9095 21.1298 55.8361 21.1983C55.764 21.2655 55.6728 21.32 55.5627 21.3616C55.4539 21.4019 55.326 21.4221 55.1793 21.4221ZM55.3517 20.934C55.4851 20.934 55.6007 20.9077 55.6985 20.8551C55.7964 20.8013 55.8716 20.7304 55.9242 20.6423C55.978 20.5542 56.005 20.4582 56.005 20.3542V20.0221C55.9842 20.0392 55.9487 20.0551 55.8985 20.0698C55.8496 20.0845 55.7946 20.0973 55.7334 20.1083C55.6722 20.1193 55.6117 20.1291 55.5517 20.1377C55.4918 20.1462 55.4398 20.1536 55.3958 20.1597C55.2967 20.1732 55.208 20.1952 55.1297 20.2258C55.0514 20.2563 54.9896 20.2991 54.9444 20.3542C54.8991 20.408 54.8765 20.4777 54.8765 20.5634C54.8765 20.6857 54.9211 20.7781 55.0104 20.8404C55.0997 20.9028 55.2135 20.934 55.3517 20.934Z"
      fill="#101F5F"
    />
    <path
      d="M60.0149 18.5468V19.0606H58.3947V18.5468H60.0149ZM58.7947 17.8716H59.4589V20.5175C59.4589 20.6068 59.4724 20.6753 59.4993 20.723C59.5274 20.7695 59.5641 20.8013 59.6094 20.8184C59.6547 20.8356 59.7048 20.8441 59.7599 20.8441C59.8014 20.8441 59.8394 20.8411 59.8736 20.8349C59.9091 20.8288 59.936 20.8233 59.9544 20.8184L60.0663 21.3377C60.0308 21.3499 59.98 21.3634 59.914 21.3781C59.8492 21.3928 59.7696 21.4013 59.6754 21.4038C59.5091 21.4087 59.3592 21.3836 59.2259 21.3285C59.0926 21.2723 58.9867 21.1854 58.9085 21.068C58.8314 20.9505 58.7935 20.8038 58.7947 20.6276V17.8716ZM61.3815 21.4221C61.2029 21.4221 61.042 21.3903 60.8989 21.3267C60.757 21.2619 60.6444 21.1665 60.5613 21.0405C60.4793 20.9145 60.4383 20.7591 60.4383 20.5744C60.4383 20.4154 60.4677 20.2839 60.5264 20.1799C60.5851 20.0759 60.6652 19.9927 60.7668 19.9303C60.8683 19.8679 60.9827 19.8208 61.1099 19.789C61.2383 19.756 61.3711 19.7322 61.5081 19.7175C61.6732 19.7004 61.8072 19.6851 61.9099 19.6716C62.0127 19.6569 62.0873 19.6349 62.1338 19.6056C62.1815 19.575 62.2053 19.5279 62.2053 19.4643V19.4533C62.2053 19.315 62.1644 19.208 62.0824 19.1321C62.0004 19.0563 61.8824 19.0184 61.7283 19.0184C61.5656 19.0184 61.4365 19.0539 61.3411 19.1248C61.2469 19.1958 61.1833 19.2795 61.1503 19.3762L60.5301 19.2881C60.579 19.1169 60.6597 18.9737 60.7723 18.8587C60.8848 18.7425 61.0224 18.6557 61.1851 18.5982C61.3478 18.5395 61.5276 18.5101 61.7246 18.5101C61.8604 18.5101 61.9955 18.526 62.1301 18.5578C62.2647 18.5896 62.3876 18.6422 62.4989 18.7156C62.6102 18.7878 62.6995 18.8863 62.7668 19.011C62.8353 19.1358 62.8696 19.2918 62.8696 19.4789V21.3652H62.231V20.9781H62.209C62.1686 21.0564 62.1118 21.1298 62.0384 21.1983C61.9662 21.2655 61.8751 21.32 61.765 21.3616C61.6561 21.4019 61.5283 21.4221 61.3815 21.4221ZM61.5539 20.934C61.6873 20.934 61.8029 20.9077 61.9007 20.8551C61.9986 20.8013 62.0738 20.7304 62.1264 20.6423C62.1803 20.5542 62.2072 20.4582 62.2072 20.3542V20.0221C62.1864 20.0392 62.1509 20.0551 62.1007 20.0698C62.0518 20.0845 61.9968 20.0973 61.9356 20.1083C61.8744 20.1193 61.8139 20.1291 61.7539 20.1377C61.694 20.1462 61.642 20.1536 61.598 20.1597C61.4989 20.1732 61.4102 20.1952 61.3319 20.2258C61.2536 20.2563 61.1919 20.2991 61.1466 20.3542C61.1013 20.408 61.0787 20.4777 61.0787 20.5634C61.0787 20.6857 61.1233 20.7781 61.2126 20.8404C61.3019 20.9028 61.4157 20.934 61.5539 20.934ZM64.0806 18.5468L64.6494 19.5872L65.2274 18.5468H65.9302L65.0806 19.956L65.9449 21.3652H65.2458L64.6494 20.3505L64.0586 21.3652H63.354L64.2127 19.956L63.376 18.5468H64.0806ZM66.444 21.3652V18.5468H67.1082V21.3652H66.444ZM66.7779 18.1468C66.6727 18.1468 66.5822 18.1119 66.5064 18.0422C66.4305 17.9713 66.3926 17.8862 66.3926 17.7872C66.3926 17.6868 66.4305 17.6018 66.5064 17.5321C66.5822 17.4611 66.6727 17.4257 66.7779 17.4257C66.8844 17.4257 66.9749 17.4611 67.0495 17.5321C67.1254 17.6018 67.1633 17.6868 67.1633 17.7872C67.1633 17.8862 67.1254 17.9713 67.0495 18.0422C66.9749 18.1119 66.8844 18.1468 66.7779 18.1468Z"
      fill="#FF5B01"
    />
    <path
      d="M42.7261 10.0215C42.7261 10.0215 42.3575 11.4431 42.3578 12.3706C42.3595 18.0436 42.6335 27.0747 42.6335 27.0747"
      stroke="url(#paint6_linear_5618_67595)"
      strokeWidth="0.0774194"
    />
    <path
      d="M23.4778 9.56543L29.9383 23.2689C31.2163 25.9798 33.944 27.7095 36.941 27.7095H42.6737H66.0634"
      stroke="url(#paint7_linear_5618_67595)"
      strokeWidth="0.0774194"
    />
    <path
      d="M73.6775 10.9356C51.9072 10.1303 23.5431 9.66309 23.5431 9.66309C23.5431 9.66309 30.3259 11.3054 34.7507 11.8754C39.0469 12.4288 41.564 12.3399 45.8206 12.5766C50.9444 12.8616 62.3103 14.0743 62.3103 14.0743C62.3103 14.0743 64.53 14.3676 65.7815 15.0023C66.9911 15.6158 67.7596 16.0257 68.5029 17.1602C69.333 18.4274 69.946 21.0775 69.946 21.0775C69.946 21.0775 71.2024 19.1712 72.2547 18.1978C72.8036 17.69 73.4722 17.2443 74.0918 16.8572C75.0331 16.2691 75.437 16.2164 76.3642 16.0563C77.2971 15.8952 77.8516 15.954 78.7839 16.0528L78.8177 16.0563L78.8319 16.0578C79.7665 16.1568 80.3158 16.215 81.1933 16.5626C82.0643 16.9077 82.5016 17.238 83.2462 17.8004L83.2573 17.8088C83.8001 18.2188 84.0893 18.4732 84.5648 18.9597C85.1076 19.5152 85.834 20.6555 85.834 20.6555C85.834 20.6555 87.9359 19.8949 89.2822 19.3323C92.928 17.8088 100.706 18.6719 107.409 18.5199C110.01 18.4609 113.771 18.2442 115.866 18.1147C116.504 18.0752 116.814 17.3254 116.383 16.8524C115.419 15.7949 114.088 14.3983 113.786 14.3983L103.048 14.0743C103.048 14.0743 93.9028 14.7027 88.0985 14.0743C82.3684 13.4539 79.4371 11.1486 73.6775 10.9356Z"
      fill="url(#paint8_linear_5618_67595)"
    />
    <path
      d="M0.70246 11.333H1.80091C2.04768 11.333 2.23145 11.5608 2.17925 11.802L1.19601 16.3454C1.15747 16.5236 0.999911 16.6507 0.817675 16.6507H0.0618301L0.223425 12.5061C0.223425 12.5061 0.337837 12.1279 0.433641 11.8945C0.525886 11.6697 0.70246 11.333 0.70246 11.333Z"
      fill="url(#paint9_linear_5618_67595)"
    />
    <path
      d="M83.2307 14.3994H113.791C113.791 14.3994 114.638 14.8191 115.258 15.3026C116.049 15.9193 116.424 16.6604 116.424 16.6604H86.6828L83.2307 14.3994Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_5618_67595"
        x="32.4727"
        y="14.5512"
        width="15.2147"
        height="14.3416"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.14825" />
        <feGaussianBlur stdDeviation="1.72237" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0832289 0 0 0 0 0.113137 0 0 0 0 0.234342 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5618_67595"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5618_67595"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5618_67595"
        x1="41.4426"
        y1="1.37273"
        x2="41.4426"
        y2="11.5079"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#191919" />
        <stop offset="1" stopColor="#3D3D3D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5618_67595"
        x1="42.4773"
        y1="1.55078"
        x2="42.4773"
        y2="9.93977"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C1C1C" />
        <stop offset="1" stopColor="#191919" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_5618_67595"
        x1="15.6153"
        y1="16.9776"
        x2="21.0347"
        y2="30.9131"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_5618_67595"
        x1="73.2924"
        y1="16.9776"
        x2="78.7118"
        y2="30.9131"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_5618_67595"
        x1="38.6105"
        y1="14.7869"
        x2="43.0329"
        y2="25.3377"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#213482" />
        <stop offset="1" stopColor="#041660" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_5618_67595"
        x1="39.6076"
        y1="16.5721"
        x2="41.7598"
        y2="24.6426"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5A00" />
        <stop offset="1" stopColor="#DB4E00" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_5618_67595"
        x1="42.6875"
        y1="10.0213"
        x2="42.5963"
        y2="27.8438"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_5618_67595"
        x1="44.7706"
        y1="9.56543"
        x2="64.1303"
        y2="30.0238"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A3939" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_5618_67595"
        x1="75.928"
        y1="28.3811"
        x2="75.3473"
        y2="-1.93586"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFEFEF" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_5618_67595"
        x1="1.17132"
        y1="11.333"
        x2="1.17132"
        y2="16.6507"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F8AA9D" />
        <stop offset="1" stopColor="#FFC0B5" />
      </linearGradient>
      <clipPath id="clip0_5618_67595">
        <rect
          x="35.4873"
          y="15.2725"
          width="9.18599"
          height="9.18599"
          rx="2.2965"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ByWayCarImage = () => (
  <svg
    width="115"
    height="39"
    viewBox="0 0 115 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="101.852" cy="30.8203" rx="9.27436" ry="7.48436" fill="black" />
    <ellipse cx="45.7986" cy="29.8796" rx="10.189" ry="8.42553" fill="black" />
    <path
      d="M109.496 33.2084C109.496 33.2084 92.8495 33.0338 82.1827 33.0046C75.9738 32.9875 72.4927 33.027 66.2838 33.0046C57.2885 32.9721 52.246 32.8387 43.2508 32.8007C35.0519 32.7661 30.4531 32.9768 22.2561 32.8007C15.9645 32.6656 12.2683 32.3931 6.15332 32.1892C5.39858 32.1641 4.97172 31.9572 4.31883 31.5777C3.78133 31.2653 3.45238 31.0679 3.09584 30.5586C1.66902 28.5203 1.26097 27.3206 1.26135 25.0551C1.26149 24.2399 1.26135 23.2206 1.26135 23.2206C1.26135 23.2206 1.26135 17.9211 1.66902 14.252C1.7415 13.5996 1.73245 13.1803 2.07668 12.6214C2.49412 11.9436 2.92416 11.5407 3.70734 11.3984C5.94949 10.9908 8.59931 10.583 8.59931 10.583C8.59931 10.583 15.6806 10.5478 20.2177 10.583C27.8609 10.6423 32.1438 10.838 39.7856 10.9907C48.1436 11.1577 52.8287 11.3223 61.188 11.3984C68.8294 11.4679 73.1155 11.5416 80.7559 11.3984C85.852 11.3028 93.8011 10.9907 93.8011 10.9907C93.8011 10.9907 99.3114 11.4823 102.77 12.2137C105.926 12.8811 107.866 13.4367 110.719 14.4558C111.249 14.6452 111.738 15.475 111.738 15.475C111.738 15.475 112.57 16.6717 112.961 17.5133C113.248 18.1299 113.353 18.5002 113.573 19.144L113.578 19.1604C113.843 19.9368 113.994 20.3793 114.184 21.1823C115.011 24.6685 114.184 26.4819 113.981 30.3547C113.948 30.9662 113.222 31.5323 112.961 31.7816C112.419 32.3009 112.057 32.4745 111.331 32.8007C110.661 33.1015 109.496 33.2084 109.496 33.2084Z"
      fill="#E4E4E4"
    />
    <path
      d="M14.5104 6.71067C12.1521 8.14421 8.59924 10.5835 8.59924 10.5835L66.673 11.5067L93.8011 10.9911L75.9489 2.38896C75.9489 2.38896 73.7888 1.42428 71.3634 1.09901C64.5415 0.184137 59.2618 0.184137 59.2618 0.184137C59.2618 0.184137 51.942 0.00937706 47.2509 0.00168205C41.9921 -0.00694414 38.7511 0.00179188 33.2612 0.429376C30.3626 0.655133 29.0369 0.688676 25.9246 1.5524C22.8123 2.41612 22.2998 2.47928 18.3832 4.46851C16.0948 5.63077 16.0037 5.80288 14.5104 6.71067Z"
      fill="#E4E4E4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5104 6.71048C12.1602 8.13913 8.62351 10.5666 8.59937 10.5832L8.59931 10.5832C8.59931 10.5832 5.94949 10.9909 3.70734 11.3985C2.92416 11.5409 2.49412 11.9437 2.07668 12.6215C1.78321 13.098 1.74652 13.4731 1.69716 13.9776C1.68862 14.0649 1.67971 14.156 1.66902 14.2522C1.26135 17.9212 1.26135 23.2208 1.26135 23.2208C1.26135 23.2208 1.26149 24.24 1.26135 25.0553C1.26098 27.3208 1.66902 28.5205 3.09584 30.5588C3.45238 31.0681 3.78133 31.2655 4.31883 31.5779C4.97172 31.9574 5.39858 32.1642 6.15332 32.1894C6.15361 32.1894 6.1539 32.1894 6.15418 32.1894H6.35715L22.4599 32.5971H42.8431L18.9466 4.15332C18.764 4.25508 18.5764 4.35999 18.3832 4.46833C16.8589 5.32306 16.0037 5.8027 14.5104 6.71048Z"
      fill="#29CC9B"
    />
    <path
      d="M20.6539 6.83513C19.588 7.77215 18.3304 9.29482 17.6526 10.1495C17.4453 10.4109 17.6294 10.7897 17.963 10.7943L62.3185 11.4059C62.67 11.4108 62.8594 11.0012 62.6232 10.7407C62.2128 10.2879 61.6577 9.69378 61.1719 9.2367C60.0625 8.19314 59.344 7.71511 58.112 6.82123C56.2933 5.50173 55.2695 4.76397 53.3315 3.6343C52.3377 3.05495 50.9328 2.34129 50.0909 1.92222C49.6173 1.68652 49.098 1.56219 48.5691 1.5527C47.3409 1.53066 44.9698 1.4922 43.3833 1.49219C41.0265 1.49218 37.6427 1.56769 37.6427 1.56769C37.6427 1.56769 33.0769 1.66218 30.2604 2.35234C28.1517 2.86906 26.8557 3.16682 24.8953 4.10291C23.101 4.95974 22.1915 5.48341 20.6539 6.83513Z"
      fill="url(#paint0_linear_7124_73279)"
    />
    <path
      d="M37.9672 11.0701L38.4679 1.56836H41.216V11.1172C41.216 11.1172 40.2167 11.1074 39.5765 11.0948C38.9482 11.0825 37.9672 11.0701 37.9672 11.0701Z"
      fill="url(#paint1_linear_7124_73279)"
    />
    <ellipse cx="74.437" cy="28.5203" rx="8.76478" ry="9.78394" fill="black" />
    <path
      d="M84.7008 34.0241C84.6956 34.0333 84.6903 34.0426 84.6849 34.0521C84.5691 34.2544 84.3895 34.5411 84.1367 34.8738C83.631 35.5392 82.8333 36.387 81.6674 37.1124C80.4543 37.8671 78.6162 38.1217 77.0503 38.1801C76.6195 38.1962 76.2125 38.1973 75.8493 38.1906C75.8819 38.1826 75.9148 38.1746 75.9479 38.1663C76.8803 37.9345 78.0298 37.5714 78.8292 37.0484C79.5395 36.5836 80.269 35.7992 80.8137 35.144C81.0879 34.8142 81.3188 34.5127 81.4813 34.2937C81.5625 34.1841 81.6267 34.0951 81.6708 34.0332C81.6729 34.0301 81.6751 34.0271 81.6772 34.0241H84.7008Z"
      fill="black"
      stroke="black"
      strokeWidth="0.407664"
    />
    <ellipse cx="14.5104" cy="28.5203" rx="8.76478" ry="9.78394" fill="black" />
    <path
      d="M24.774 34.0241C24.7688 34.0333 24.7636 34.0426 24.7581 34.0521C24.6423 34.2544 24.4628 34.5411 24.21 34.8738C23.7042 35.5392 22.9065 36.387 21.7406 37.1124C20.5276 37.8671 18.6894 38.1217 17.1235 38.1801C16.6927 38.1962 16.2858 38.1973 15.9225 38.1906C15.9551 38.1826 15.988 38.1746 16.0212 38.1663C16.9535 37.9345 18.1031 37.5714 18.9024 37.0484C19.6127 36.5836 20.3422 35.7992 20.8869 35.144C21.1612 34.8142 21.3921 34.5127 21.5545 34.2937C21.6358 34.1841 21.7 34.0951 21.744 34.0332C21.7462 34.0301 21.7483 34.0271 21.7504 34.0241H24.774Z"
      fill="black"
      stroke="black"
      strokeWidth="0.407664"
    />
    <ellipse
      cx="74.4371"
      cy="28.7242"
      rx="7.94945"
      ry="9.17245"
      fill="#303644"
    />
    <ellipse
      cx="74.2333"
      cy="28.5206"
      rx="6.11496"
      ry="7.33796"
      fill="#EFEFEF"
    />
    <ellipse
      cx="74.2332"
      cy="28.7241"
      rx="5.29963"
      ry="6.3188"
      fill="url(#paint2_linear_7124_73279)"
    />
    <ellipse
      cx="14.5104"
      cy="28.7242"
      rx="7.94945"
      ry="9.17245"
      fill="#303644"
    />
    <ellipse
      cx="14.3066"
      cy="28.5206"
      rx="6.11496"
      ry="7.33796"
      fill="#EFEFEF"
    />
    <ellipse
      cx="14.3066"
      cy="28.7241"
      rx="5.29963"
      ry="6.3188"
      fill="url(#paint3_linear_7124_73279)"
    />
    <rect
      x="0.446045"
      y="38.3047"
      width="114.146"
      height="0.815328"
      fill="#D9D9D9"
    />
    <path
      d="M82.2195 33.0049H110.719L109.7 33.8202H81.5712L82.2195 33.0049Z"
      fill="black"
    />
    <path
      d="M22.4599 32.5977H66.4876L67.0991 33.8206H21.6445L22.4599 32.5977Z"
      fill="black"
    />
    <path
      d="M58.9457 5.48795C56.5799 3.96374 52.4231 1.61513 52.4231 1.61513C52.4231 1.61513 59.6297 1.5099 64.2454 1.61513C69.2646 1.72956 75.9553 2.40798 75.9553 2.40798C75.9553 2.40798 80.5201 4.03093 82.9344 5.18478C87.184 7.21577 93.801 10.9914 93.801 10.9914L78.9213 11.3991H66.8952C66.8952 11.3991 62.4676 7.75692 58.9457 5.48795Z"
      fill="#191919"
    />
    <g clipPath="url(#clip0_7124_73279)">
      <rect
        x="27.2853"
        y="17.5527"
        width="9.67406"
        height="9.67406"
        rx="2.41852"
        fill="url(#paint4_linear_7124_73279)"
      />
      <g filter="url(#filter0_d_7124_73279)">
        <path
          d="M28.5219 27.0413L29.2081 25.8135C29.5599 25.1841 30.2244 24.7943 30.9453 24.7943H33.3542C34.0752 24.7943 34.7397 25.1841 35.0914 25.8135L35.7662 27.0209C35.7384 27.0343 35.7101 27.0471 35.6816 27.0592C36.0065 26.9207 36.2895 26.7026 36.5059 26.4295L32.4168 19.2389C32.407 19.2216 32.3887 19.2109 32.3688 19.2109H31.8755C31.8556 19.2109 31.8373 19.2216 31.8275 19.2389L27.7384 26.4295C27.9457 26.6911 28.2141 26.9023 28.5219 27.0413Z"
          fill="url(#paint5_linear_7124_73279)"
        />
      </g>
    </g>
    <path
      d="M41.8007 24.4496C41.6126 24.4496 41.4432 24.4161 41.2925 24.3491C41.143 24.2808 41.0245 24.1803 40.9369 24.0476C40.8506 23.9149 40.8075 23.7513 40.8075 23.5568C40.8075 23.3893 40.8384 23.2508 40.9002 23.1413C40.962 23.0318 41.0464 22.9442 41.1534 22.8785C41.2603 22.8128 41.3807 22.7632 41.5147 22.7297C41.65 22.6949 41.7898 22.6698 41.934 22.6543C42.108 22.6363 42.249 22.6202 42.3572 22.606C42.4655 22.5906 42.544 22.5674 42.593 22.5365C42.6432 22.5043 42.6684 22.4547 42.6684 22.3877V22.3761C42.6684 22.2305 42.6252 22.1178 42.5389 22.0379C42.4526 21.958 42.3283 21.9181 42.1659 21.9181C41.9946 21.9181 41.8587 21.9555 41.7582 22.0302C41.659 22.1049 41.592 22.1931 41.5572 22.2949L40.9041 22.2022C40.9556 22.0218 41.0406 21.8711 41.1592 21.75C41.2777 21.6276 41.4226 21.5361 41.5939 21.4756C41.7653 21.4137 41.9547 21.3828 42.1621 21.3828C42.3051 21.3828 42.4474 21.3996 42.5891 21.4331C42.7308 21.4666 42.8603 21.522 42.9775 21.5993C43.0948 21.6753 43.1888 21.779 43.2597 21.9104C43.3318 22.0418 43.3679 22.206 43.3679 22.4031V24.3896H42.6954V23.9819H42.6722C42.6297 24.0644 42.5698 24.1417 42.4925 24.2138C42.4165 24.2847 42.3205 24.342 42.2046 24.3858C42.0899 24.4283 41.9553 24.4496 41.8007 24.4496ZM41.9824 23.9355C42.1228 23.9355 42.2445 23.9078 42.3476 23.8524C42.4506 23.7958 42.5299 23.721 42.5853 23.6283C42.642 23.5355 42.6703 23.4344 42.6703 23.3249V22.9751C42.6484 22.9932 42.611 23.0099 42.5582 23.0254C42.5067 23.0408 42.4487 23.0544 42.3843 23.0659C42.3199 23.0775 42.2561 23.0878 42.193 23.0969C42.1299 23.1059 42.0751 23.1136 42.0287 23.1201C41.9244 23.1342 41.831 23.1574 41.7485 23.1896C41.6661 23.2218 41.601 23.2669 41.5534 23.3249C41.5057 23.3816 41.4819 23.455 41.4819 23.5452C41.4819 23.674 41.5289 23.7713 41.6229 23.837C41.717 23.9027 41.8368 23.9355 41.9824 23.9355ZM44.709 23.4582L44.7071 22.6138H44.8191L45.8858 21.4215H46.7032L45.3911 22.8824H45.2462L44.709 23.4582ZM44.0713 24.3896V20.4321H44.7708V24.3896H44.0713ZM45.9341 24.3896L44.9679 23.0389L45.4394 22.5461L46.7709 24.3896H45.9341ZM48.0235 24.4496C47.8355 24.4496 47.6661 24.4161 47.5153 24.3491C47.3659 24.2808 47.2474 24.1803 47.1598 24.0476C47.0734 23.9149 47.0303 23.7513 47.0303 23.5568C47.0303 23.3893 47.0612 23.2508 47.123 23.1413C47.1849 23.0318 47.2693 22.9442 47.3762 22.8785C47.4831 22.8128 47.6036 22.7632 47.7376 22.7297C47.8728 22.6949 48.0126 22.6698 48.1569 22.6543C48.3308 22.6363 48.4719 22.6202 48.5801 22.606C48.6883 22.5906 48.7669 22.5674 48.8158 22.5365C48.8661 22.5043 48.8912 22.4547 48.8912 22.3877V22.3761C48.8912 22.2305 48.848 22.1178 48.7617 22.0379C48.6754 21.958 48.5511 21.9181 48.3888 21.9181C48.2174 21.9181 48.0815 21.9555 47.981 22.0302C47.8818 22.1049 47.8148 22.1931 47.7801 22.2949L47.1269 22.2022C47.1784 22.0218 47.2635 21.8711 47.382 21.75C47.5005 21.6276 47.6454 21.5361 47.8168 21.4756C47.9881 21.4137 48.1775 21.3828 48.3849 21.3828C48.5279 21.3828 48.6703 21.3996 48.812 21.4331C48.9537 21.4666 49.0832 21.522 49.2004 21.5993C49.3176 21.6753 49.4117 21.779 49.4825 21.9104C49.5547 22.0418 49.5907 22.206 49.5907 22.4031V24.3896H48.9183V23.9819H48.8951C48.8526 24.0644 48.7926 24.1417 48.7154 24.2138C48.6393 24.2847 48.5434 24.342 48.4274 24.3858C48.3128 24.4283 48.1781 24.4496 48.0235 24.4496ZM48.2052 23.9355C48.3456 23.9355 48.4674 23.9078 48.5704 23.8524C48.6735 23.7958 48.7527 23.721 48.8081 23.6283C48.8648 23.5355 48.8931 23.4344 48.8931 23.3249V22.9751C48.8712 22.9932 48.8339 23.0099 48.7811 23.0254C48.7295 23.0408 48.6715 23.0544 48.6071 23.0659C48.5427 23.0775 48.479 23.0878 48.4158 23.0969C48.3527 23.1059 48.2979 23.1136 48.2516 23.1201C48.1472 23.1342 48.0538 23.1574 47.9714 23.1896C47.8889 23.2218 47.8239 23.2669 47.7762 23.3249C47.7285 23.3816 47.7047 23.455 47.7047 23.5452C47.7047 23.674 47.7517 23.7713 47.8458 23.837C47.9398 23.9027 48.0596 23.9355 48.2052 23.9355Z"
      fill="#101F5F"
    />
    <path
      d="M53.638 21.4215V21.9625H51.9317V21.4215H53.638ZM52.3529 20.7103H53.0525V23.4969C53.0525 23.5909 53.0666 23.6631 53.095 23.7133C53.1246 23.7623 53.1632 23.7958 53.2109 23.8138C53.2586 23.8318 53.3114 23.8408 53.3694 23.8408C53.4132 23.8408 53.4531 23.8376 53.4892 23.8312C53.5265 23.8247 53.5549 23.8189 53.5742 23.8138L53.6921 24.3607C53.6547 24.3735 53.6013 24.3877 53.5317 24.4032C53.4634 24.4186 53.3797 24.4277 53.2805 24.4302C53.1053 24.4354 52.9475 24.409 52.807 24.351C52.6666 24.2917 52.5552 24.2003 52.4727 24.0766C52.3916 23.9529 52.3516 23.7983 52.3529 23.6128V20.7103ZM55.0771 24.4496C54.889 24.4496 54.7196 24.4161 54.5689 24.3491C54.4195 24.2808 54.3009 24.1803 54.2133 24.0476C54.127 23.9149 54.0839 23.7513 54.0839 23.5568C54.0839 23.3893 54.1148 23.2508 54.1766 23.1413C54.2385 23.0318 54.3228 22.9442 54.4298 22.8785C54.5367 22.8128 54.6572 22.7632 54.7911 22.7297C54.9264 22.6949 55.0662 22.6698 55.2105 22.6543C55.3844 22.6363 55.5255 22.6202 55.6337 22.606C55.7419 22.5906 55.8205 22.5674 55.8694 22.5365C55.9197 22.5043 55.9448 22.4547 55.9448 22.3877V22.3761C55.9448 22.2305 55.9016 22.1178 55.8153 22.0379C55.729 21.958 55.6047 21.9181 55.4424 21.9181C55.271 21.9181 55.1351 21.9555 55.0346 22.0302C54.9354 22.1049 54.8684 22.1931 54.8336 22.2949L54.1805 22.2022C54.232 22.0218 54.3171 21.8711 54.4356 21.75C54.5541 21.6276 54.699 21.5361 54.8704 21.4756C55.0417 21.4137 55.2311 21.3828 55.4385 21.3828C55.5815 21.3828 55.7238 21.3996 55.8656 21.4331C56.0073 21.4666 56.1367 21.522 56.254 21.5993C56.3712 21.6753 56.4652 21.779 56.5361 21.9104C56.6082 22.0418 56.6443 22.206 56.6443 22.4031V24.3896H55.9718V23.9819H55.9486C55.9061 24.0644 55.8462 24.1417 55.7689 24.2138C55.6929 24.2847 55.597 24.342 55.481 24.3858C55.3663 24.4283 55.2317 24.4496 55.0771 24.4496ZM55.2588 23.9355C55.3992 23.9355 55.5209 23.9078 55.624 23.8524C55.7271 23.7958 55.8063 23.721 55.8617 23.6283C55.9184 23.5355 55.9467 23.4344 55.9467 23.3249V22.9751C55.9248 22.9932 55.8875 23.0099 55.8346 23.0254C55.7831 23.0408 55.7251 23.0544 55.6607 23.0659C55.5963 23.0775 55.5325 23.0878 55.4694 23.0969C55.4063 23.1059 55.3515 23.1136 55.3052 23.1201C55.2008 23.1342 55.1074 23.1574 55.025 23.1896C54.9425 23.2218 54.8775 23.2669 54.8298 23.3249C54.7821 23.3816 54.7583 23.455 54.7583 23.5452C54.7583 23.674 54.8053 23.7713 54.8994 23.837C54.9934 23.9027 55.1132 23.9355 55.2588 23.9355ZM57.9197 21.4215L58.5188 22.5171L59.1275 21.4215H59.8676L58.9729 22.9056L59.883 24.3896H59.1468L58.5188 23.321L57.8965 24.3896H57.1545L58.0588 22.9056L57.1777 21.4215H57.9197ZM60.4086 24.3896V21.4215H61.1082V24.3896H60.4086ZM60.7603 21.0002C60.6496 21.0002 60.5542 20.9635 60.4743 20.8901C60.3945 20.8153 60.3545 20.7258 60.3545 20.6215C60.3545 20.5158 60.3945 20.4263 60.4743 20.3528C60.5542 20.2781 60.6496 20.2408 60.7603 20.2408C60.8724 20.2408 60.9678 20.2781 61.0463 20.3528C61.1262 20.4263 61.1662 20.5158 61.1662 20.6215C61.1662 20.7258 61.1262 20.8153 61.0463 20.8901C60.9678 20.9635 60.8724 21.0002 60.7603 21.0002Z"
      fill="#FF5B01"
    />
    <path
      d="M39.4445 11.0713C39.4445 11.0713 39.0554 12.7296 39.0551 13.8113C39.0535 20.4279 39.3365 30.961 39.3365 30.961"
      stroke="url(#paint6_linear_7124_73279)"
      strokeWidth="0.0815329"
    />
    <path
      d="M17.7188 10.6504L24.5239 25.1081C25.8688 27.9654 28.7428 29.7891 31.9008 29.7891H37.9346H62.5671"
      stroke="url(#paint7_linear_7124_73279)"
      strokeWidth="0.0815329"
    />
    <path
      d="M72.5651 12.2784C64.1336 10.929 24.8003 11.1241 24.8003 11.1241L26.8145 11.6706L40.7371 12.2784C40.7371 12.2784 49.7774 12.1615 55.4895 12.9576C58.7648 13.4141 59.3251 13.4322 62.6211 14.2188C64.8351 14.7471 66.9216 15.2481 67.8495 16.7947C68.3936 17.7017 68.521 18.3676 68.495 19.425C68.461 20.8039 67.2062 22.7134 67.2062 22.7134L68.495 21.0397L70.1519 19.7509L72.5621 18.7969L75.0727 18.5793L77.1815 18.9977L79.3072 20.1191L80.6963 21.4079L81.6671 22.613L82.6389 24.7448C82.6389 24.7448 83.8528 22.682 86.6626 21.4079C91.4774 19.2245 97.3831 19.025 103.055 18.6935C106.619 18.4852 110.099 17.9799 111.809 17.7058C112.353 17.6186 112.648 17.0216 112.369 16.5468C112.251 16.3471 112.125 16.1449 111.972 15.9126C111.884 15.7778 111.726 15.7093 111.567 15.736C110.524 15.9112 106.517 16.5511 103.055 16.6504C98.2888 16.7871 94.6583 16.8746 89.337 16.2356C82.6553 15.4333 81.1717 13.6558 72.5651 12.2784Z"
      fill="url(#paint8_linear_7124_73279)"
    />
    <path
      d="M86.9615 16.8226L88.4071 18.2612C88.4071 18.2612 101.275 18.4811 106.017 18.2612C110.79 18.0399 112.768 17.1287 112.768 17.1287C112.768 17.1287 112.539 16.722 112.382 16.4665C112.217 16.2 111.952 15.7881 111.952 15.7881C111.952 15.7881 109.731 16.6203 104.84 16.8226C99.9719 17.0239 86.9615 16.8226 86.9615 16.8226Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_7124_73279"
        x="24.1106"
        y="16.7924"
        width="16.023"
        height="15.1042"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.20926" />
        <feGaussianBlur stdDeviation="1.81389" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0832289 0 0 0 0 0.113137 0 0 0 0 0.234342 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_7124_73279"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_7124_73279"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_7124_73279"
        x1="40.7028"
        y1="0.928863"
        x2="40.7028"
        y2="11.6026"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#191919" />
        <stop offset="1" stopColor="#3D3D3D" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_7124_73279"
        x1="39.592"
        y1="1.56836"
        x2="39.592"
        y2="11.0246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C1C1C" />
        <stop offset="1" stopColor="#191919" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_7124_73279"
        x1="69.5451"
        y1="19.3478"
        x2="75.2524"
        y2="34.0237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_7124_73279"
        x1="9.61845"
        y1="19.3478"
        x2="15.3258"
        y2="34.0237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_7124_73279"
        x1="30.5745"
        y1="17.0414"
        x2="35.2318"
        y2="28.1527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#213482" />
        <stop offset="1" stopColor="#041660" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_7124_73279"
        x1="31.6246"
        y1="18.9207"
        x2="33.8911"
        y2="27.4201"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5A00" />
        <stop offset="1" stopColor="#DB4E00" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_7124_73279"
        x1="39.4038"
        y1="11.0711"
        x2="39.2982"
        y2="31.858"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_7124_73279"
        x1="40.1429"
        y1="10.6504"
        x2="60.5657"
        y2="32.1977"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A3939" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_7124_73279"
        x1="68.852"
        y1="8.29687"
        x2="70.8644"
        y2="29.5203"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBFBFB" />
        <stop offset="1" stopColor="#E4E4E4" />
      </linearGradient>
      <clipPath id="clip0_7124_73279">
        <rect
          x="27.2853"
          y="17.5527"
          width="9.67406"
          height="9.67406"
          rx="2.41852"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const BusnissCarImgIcon = () => (
  <svg
    width="119"
    height="34"
    viewBox="0 0 119 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="107.274" cy="26.2917" rx="8.75" ry="7.0612" fill="black" />
    <ellipse cx="44.7934" cy="25.4033" rx="9.61294" ry="7.94916" fill="black" />
    <path
      d="M104.922 28.352C104.922 28.352 96.9454 28.3797 85.897 28.352C79.466 28.336 75.8603 28.3732 69.4293 28.352C60.1122 28.3214 54.8893 28.1955 45.5723 28.1597C37.0801 28.1271 32.3168 28.3258 23.8265 28.1597C17.3098 28.0322 14.0889 28.0758 14.0889 28.0758L8.03349 27.6652C8.03349 27.6652 3.7011 27.1555 2.93181 26.5786C2.12177 25.9711 1.16325 24.7904 0.721713 23.245C-0.432137 19.2065 0.143774 15.5219 0.143774 15.5219C0.143774 15.5219 0.299088 13.9739 0.527989 13.0218C0.68436 12.3713 1.07788 11.5288 1.31014 11.0628C1.42008 10.8422 1.63413 10.6948 1.87843 10.6622L4.37414 10.3296L9.56645 10.1372C9.56645 10.1372 19.6747 9.71949 24.3741 9.7527C32.2907 9.80866 35.4974 9.60858 43.4126 9.75264C52.0696 9.91019 57.2542 10.0655 65.9126 10.1373C73.8274 10.2028 89.5664 9.17578 89.5664 9.17578L98.6049 9.7527C98.6049 9.7527 106.148 10.5092 108.797 10.9066C112.644 11.4835 115.528 11.7996 116.682 13.2142C117.13 13.7634 117.643 14.7527 117.643 14.7527C117.643 14.7527 118.413 15.5219 118.413 17.8296C118.413 19.8587 118.738 21.2522 118.22 23.2142C117.843 24.6446 117.706 25.6085 116.682 26.6758C115.339 28.0748 112.008 28.352 112.008 28.352H104.922Z"
      fill="#3F4759"
    />
    <path
      d="M14.1882 7.58072L9.89941 10.0967L39.0204 9.69327L73.4489 10.6229L88.9252 9.20739C88.9252 9.20739 84.2111 6.24001 81.5581 4.96728C78.8098 3.6488 78.0948 3.40416 75.1402 2.65431C71.9541 1.84569 70.0813 1.77002 66.8102 1.44524C63.7075 1.13715 61.955 1.09521 58.8385 0.9974C54.8878 0.873411 52.6692 0.926022 48.7172 0.997373C43.5258 1.0911 40.6391 1.16449 35.4332 1.55258L35.4191 1.55363C32.5222 1.7696 30.8047 1.89763 27.9371 2.3857C24.7962 2.92028 23.0084 3.29557 20.055 4.49058C17.6545 5.46185 14.1882 7.58072 14.1882 7.58072Z"
      fill="url(#paint0_linear_5618_67654)"
    />
    <path
      d="M75.6839 10.3319C53.8139 9.91788 23.719 9.68945 23.719 9.68945C23.719 9.68945 29.2041 10.4674 31.7237 10.8668C37.4665 11.7771 42.4204 11.59 46.6496 11.8253C51.7405 12.1084 63.978 12.5835 63.978 12.5835C63.978 12.5835 66.1835 12.875 67.4269 13.5056C68.6288 14.1152 69.3924 14.5224 70.1309 15.6497C70.9557 16.9088 71.5647 19.5418 71.5647 19.5418C71.5647 19.5418 72.8131 17.6477 73.8587 16.6806C74.404 16.1761 75.0683 15.7333 75.6839 15.3486C76.6192 14.7643 77.0205 14.7119 77.9417 14.5529C78.8687 14.3928 79.4196 14.4512 80.346 14.5493L80.3795 14.5529L80.3936 14.5544C81.3222 14.6527 81.868 14.7105 82.7399 15.0559C83.6054 15.3988 84.0399 15.727 84.7797 16.2858L84.7907 16.2941C85.33 16.7015 85.6174 16.9542 86.0897 17.4376C86.6291 17.9895 87.3509 19.1225 87.3509 19.1225C87.3509 19.1225 89.4393 18.3669 90.777 17.8079C94.3993 16.2941 101.554 16.8317 108.215 16.6806C110.986 16.6178 115.239 16.4491 117.278 16.365C117.831 16.3421 118.173 15.7612 117.914 15.2717C117.392 14.2853 116.632 12.9559 116.328 12.9559L104.455 12.5835C104.455 12.5835 92.6138 12.8242 86.8467 12.1998C81.1533 11.5834 81.4095 10.4404 75.6839 10.3319Z"
      fill="url(#paint1_linear_5618_67654)"
    />
    <path
      d="M43.2092 9.62891C43.2092 9.62891 42.8435 10.9518 42.8441 11.815C42.8478 17.0946 43.1231 25.4996 43.1231 25.4996"
      stroke="url(#paint2_linear_5618_67654)"
      strokeWidth="0.384615"
    />
    <path
      d="M25.3944 9.76953C25.3944 9.76953 25.2678 11.6743 25.3944 12.8839C25.695 15.7579 27.9597 19.8245 27.9597 19.8245L31.3125 25.223C31.6633 25.7879 32.2811 26.1315 32.9461 26.1315H44.4672H67.707"
      stroke="url(#paint3_linear_5618_67654)"
      strokeWidth="0.384615"
    />
    <g clipPath="url(#clip0_5618_67654)">
      <rect
        x="32.0669"
        y="13.7891"
        width="9.1271"
        height="9.1271"
        rx="2.28178"
        fill="url(#paint4_linear_5618_67654)"
      />
      <g filter="url(#filter0_d_5618_67654)">
        <path
          d="M33.2336 22.7412L33.881 21.5827C34.2129 20.989 34.8398 20.6212 35.52 20.6212H37.7927C38.4729 20.6212 39.0998 20.989 39.4317 21.5827L40.0683 22.7219C40.042 22.7345 40.0154 22.7466 39.9885 22.7581C40.2951 22.6274 40.562 22.4216 40.7662 22.1639L36.9083 15.3799C36.899 15.3636 36.8817 15.3535 36.863 15.3535H36.3976C36.3788 15.3535 36.3615 15.3636 36.3523 15.3799L32.4944 22.1639C32.69 22.4108 32.9431 22.61 33.2336 22.7412Z"
          fill="url(#paint5_linear_5618_67654)"
        />
      </g>
    </g>
    <path
      d="M45.7616 19.9091C45.5842 19.9091 45.4244 19.8775 45.2821 19.8143C45.1412 19.7498 45.0293 19.655 44.9467 19.5298C44.8653 19.4047 44.8245 19.2503 44.8245 19.0668C44.8245 18.9088 44.8537 18.7781 44.912 18.6748C44.9704 18.5715 45.05 18.4888 45.1509 18.4268C45.2518 18.3648 45.3654 18.3181 45.4918 18.2865C45.6194 18.2536 45.7513 18.2299 45.8874 18.2153C46.0515 18.1983 46.1846 18.1831 46.2867 18.1698C46.3888 18.1552 46.4629 18.1333 46.5091 18.1041C46.5565 18.0738 46.5802 18.027 46.5802 17.9638V17.9528C46.5802 17.8155 46.5395 17.7091 46.4581 17.6338C46.3766 17.5584 46.2594 17.5207 46.1062 17.5207C45.9446 17.5207 45.8163 17.556 45.7215 17.6265C45.6279 17.697 45.5647 17.7802 45.5319 17.8762L44.9157 17.7887C44.9643 17.6186 45.0445 17.4764 45.1564 17.3621C45.2682 17.2466 45.4049 17.1604 45.5666 17.1032C45.7282 17.0449 45.9069 17.0157 46.1026 17.0157C46.2375 17.0157 46.3718 17.0315 46.5055 17.0631C46.6392 17.0947 46.7613 17.147 46.8719 17.2199C46.9825 17.2916 47.0713 17.3895 47.1381 17.5134C47.2062 17.6374 47.2402 17.7924 47.2402 17.9783V19.8525H46.6058V19.4679H46.5839C46.5438 19.5456 46.4873 19.6186 46.4143 19.6866C46.3426 19.7535 46.2521 19.8076 46.1427 19.8489C46.0345 19.889 45.9075 19.9091 45.7616 19.9091ZM45.933 19.4241C46.0655 19.4241 46.1804 19.398 46.2776 19.3457C46.3748 19.2922 46.4496 19.2217 46.5018 19.1342C46.5553 19.0467 46.5821 18.9513 46.5821 18.848V18.518C46.5614 18.535 46.5261 18.5508 46.4763 18.5654C46.4277 18.58 46.373 18.5927 46.3122 18.6037C46.2515 18.6146 46.1913 18.6243 46.1317 18.6329C46.0722 18.6414 46.0205 18.6487 45.9768 18.6547C45.8783 18.6681 45.7902 18.69 45.7124 18.7204C45.6346 18.7507 45.5732 18.7933 45.5283 18.848C45.4833 18.9015 45.4608 18.9707 45.4608 19.0558C45.4608 19.1774 45.5052 19.2691 45.5939 19.3311C45.6826 19.3931 45.7957 19.4241 45.933 19.4241ZM48.5055 18.9738L48.5037 18.1771H48.6094L49.6158 17.0522H50.387L49.1491 18.4305H49.0123L48.5055 18.9738ZM47.9038 19.8525V16.1187H48.5638V19.8525H47.9038ZM49.6614 19.8525L48.7498 18.5782L49.1946 18.1133L50.4508 19.8525H49.6614ZM51.6326 19.9091C51.4552 19.9091 51.2954 19.8775 51.1532 19.8143C51.0122 19.7498 50.9003 19.655 50.8177 19.5298C50.7363 19.4047 50.6955 19.2503 50.6955 19.0668C50.6955 18.9088 50.7247 18.7781 50.7831 18.6748C50.8414 18.5715 50.921 18.4888 51.0219 18.4268C51.1228 18.3648 51.2364 18.3181 51.3628 18.2865C51.4904 18.2536 51.6223 18.2299 51.7584 18.2153C51.9225 18.1983 52.0556 18.1831 52.1577 18.1698C52.2598 18.1552 52.3339 18.1333 52.3801 18.1041C52.4275 18.0738 52.4512 18.027 52.4512 17.9638V17.9528C52.4512 17.8155 52.4105 17.7091 52.3291 17.6338C52.2477 17.5584 52.1304 17.5207 51.9772 17.5207C51.8156 17.5207 51.6873 17.556 51.5925 17.6265C51.4989 17.697 51.4357 17.7802 51.4029 17.8762L50.7867 17.7887C50.8353 17.6186 50.9155 17.4764 51.0274 17.3621C51.1392 17.2466 51.2759 17.1604 51.4376 17.1032C51.5992 17.0449 51.7779 17.0157 51.9736 17.0157C52.1085 17.0157 52.2428 17.0315 52.3765 17.0631C52.5102 17.0947 52.6323 17.147 52.7429 17.2199C52.8535 17.2916 52.9423 17.3895 53.0091 17.5134C53.0772 17.6374 53.1112 17.7924 53.1112 17.9783V19.8525H52.4768V19.4679H52.4549C52.4148 19.5456 52.3583 19.6186 52.2853 19.6866C52.2136 19.7535 52.1231 19.8076 52.0137 19.8489C51.9055 19.889 51.7785 19.9091 51.6326 19.9091ZM51.804 19.4241C51.9365 19.4241 52.0514 19.398 52.1486 19.3457C52.2458 19.2922 52.3206 19.2217 52.3728 19.1342C52.4263 19.0467 52.4531 18.9513 52.4531 18.848V18.518C52.4324 18.535 52.3972 18.5508 52.3473 18.5654C52.2987 18.58 52.244 18.5927 52.1832 18.6037C52.1225 18.6146 52.0623 18.6243 52.0027 18.6329C51.9432 18.6414 51.8915 18.6487 51.8478 18.6547C51.7493 18.6681 51.6612 18.69 51.5834 18.7204C51.5056 18.7507 51.4443 18.7933 51.3993 18.848C51.3543 18.9015 51.3318 18.9707 51.3318 19.0558C51.3318 19.1774 51.3762 19.2691 51.4649 19.3311C51.5536 19.3931 51.6667 19.4241 51.804 19.4241Z"
      fill="#101F5F"
    />
    <path
      d="M56.495 17.0522V17.5627H54.8852V17.0522H56.495ZM55.2826 16.3813H55.9426V19.0102C55.9426 19.099 55.956 19.167 55.9827 19.2144C56.0107 19.2606 56.0471 19.2922 56.0921 19.3092C56.1371 19.3263 56.1869 19.3348 56.2416 19.3348C56.2829 19.3348 56.3206 19.3317 56.3546 19.3256C56.3899 19.3196 56.4166 19.3141 56.4349 19.3092L56.5461 19.8252C56.5108 19.8373 56.4604 19.8507 56.3948 19.8653C56.3303 19.8799 56.2513 19.8884 56.1577 19.8908C55.9924 19.8957 55.8436 19.8708 55.7111 19.8161C55.5786 19.7602 55.4735 19.6739 55.3957 19.5572C55.3191 19.4405 55.2814 19.2947 55.2826 19.1196V16.3813ZM57.8528 19.9091C57.6754 19.9091 57.5155 19.8775 57.3733 19.8143C57.2323 19.7498 57.1205 19.655 57.0379 19.5298C56.9564 19.4047 56.9157 19.2503 56.9157 19.0668C56.9157 18.9088 56.9449 18.7781 57.0032 18.6748C57.0616 18.5715 57.1412 18.4888 57.2421 18.4268C57.3429 18.3648 57.4566 18.3181 57.583 18.2865C57.7106 18.2536 57.8425 18.2299 57.9786 18.2153C58.1427 18.1983 58.2758 18.1831 58.3779 18.1698C58.48 18.1552 58.5541 18.1333 58.6003 18.1041C58.6477 18.0738 58.6714 18.027 58.6714 17.9638V17.9528C58.6714 17.8155 58.6307 17.7091 58.5493 17.6338C58.4678 17.5584 58.3505 17.5207 58.1974 17.5207C58.0357 17.5207 57.9075 17.556 57.8127 17.6265C57.7191 17.697 57.6559 17.7802 57.6231 17.8762L57.0069 17.7887C57.0555 17.6186 57.1357 17.4764 57.2475 17.3621C57.3594 17.2466 57.4961 17.1604 57.6577 17.1032C57.8194 17.0449 57.9981 17.0157 58.1938 17.0157C58.3287 17.0157 58.463 17.0315 58.5967 17.0631C58.7304 17.0947 58.8525 17.147 58.9631 17.2199C59.0737 17.2916 59.1625 17.3895 59.2293 17.5134C59.2974 17.6374 59.3314 17.7924 59.3314 17.9783V19.8525H58.6969V19.4679H58.6751C58.635 19.5456 58.5784 19.6186 58.5055 19.6866C58.4338 19.7535 58.3433 19.8076 58.2339 19.8489C58.1257 19.889 57.9987 19.9091 57.8528 19.9091ZM58.0242 19.4241C58.1567 19.4241 58.2715 19.398 58.3688 19.3457C58.466 19.2922 58.5408 19.2217 58.593 19.1342C58.6465 19.0467 58.6732 18.9513 58.6732 18.848V18.518C58.6526 18.535 58.6173 18.5508 58.5675 18.5654C58.5189 18.58 58.4642 18.5927 58.4034 18.6037C58.3426 18.6146 58.2825 18.6243 58.2229 18.6329C58.1634 18.6414 58.1117 18.6487 58.068 18.6547C57.9695 18.6681 57.8814 18.69 57.8036 18.7204C57.7258 18.7507 57.6644 18.7933 57.6195 18.848C57.5745 18.9015 57.552 18.9707 57.552 19.0558C57.552 19.1774 57.5964 19.2691 57.6851 19.3311C57.7738 19.3931 57.8869 19.4241 58.0242 19.4241ZM60.5347 17.0522L61.0999 18.0859L61.6742 17.0522H62.3724L61.5283 18.4524L62.387 19.8525H61.6924L61.0999 18.8443L60.5128 19.8525H59.8127L60.6659 18.4524L59.8346 17.0522H60.5347ZM62.8829 19.8525V17.0522H63.5429V19.8525H62.8829ZM63.2147 16.6547C63.1102 16.6547 63.0202 16.6201 62.9449 16.5508C62.8695 16.4803 62.8319 16.3958 62.8319 16.2974C62.8319 16.1977 62.8695 16.1133 62.9449 16.044C63.0202 15.9735 63.1102 15.9382 63.2147 15.9382C63.3205 15.9382 63.4104 15.9735 63.4845 16.044C63.5599 16.1133 63.5976 16.1977 63.5976 16.2974C63.5976 16.3958 63.5599 16.4803 63.4845 16.5508C63.4104 16.6201 63.3205 16.6547 63.2147 16.6547Z"
      fill="#FF5B01"
    />
    <path
      d="M21.451 8.22645L23.7265 9.70232C23.7888 9.74274 23.8615 9.76425 23.9358 9.76425H41.5962L61.9022 10.1488C61.9022 10.1488 59.7143 7.92574 58.0916 6.78054C56.7316 5.82082 55.9103 5.3495 54.3991 4.65169C52.6926 3.86367 50.9783 3.3561 49.3296 3.00147C47.6808 2.64685 41.5962 2.64695 41.5962 2.64695C41.5962 2.64695 36.5099 2.58387 33.2902 3.00147C29.8576 3.4467 26.6757 3.86971 24.6423 4.94472C23.5343 5.53055 22.2538 6.39405 21.4191 6.98183C20.9816 7.28984 21.0022 7.93533 21.451 8.22645Z"
      fill="url(#paint6_linear_5618_67654)"
    />
    <path
      d="M41.2144 9.73416L41.6868 2.71289H44.2795V9.76893C44.2795 9.76893 43.3367 9.76169 42.7327 9.7524C42.1399 9.74327 41.2144 9.73416 41.2144 9.73416Z"
      fill="url(#paint7_linear_5618_67654)"
    />
    <ellipse cx="18.7231" cy="24.0335" rx="8.26923" ry="9.23077" fill="black" />
    <path
      d="M28.5536 29.1376C28.5434 29.1518 28.5329 29.1664 28.5219 29.1814C28.3679 29.3931 28.1374 29.6881 27.8334 30.0182C27.2246 30.6794 26.3256 31.4767 25.1599 32.0327C23.8426 32.661 22.2164 32.922 20.9079 33.0238C20.735 33.0372 20.5681 33.0478 20.4084 33.0562C21.2893 32.8169 22.3371 32.4632 23.0591 31.9909C23.7292 31.5524 24.4174 30.8123 24.9313 30.1942C25.1901 29.883 25.408 29.5986 25.5612 29.3919C25.6379 29.2886 25.6984 29.2045 25.74 29.1461C25.742 29.1432 25.7441 29.1404 25.746 29.1376H28.5536Z"
      fill="black"
      stroke="black"
      strokeWidth="0.384615"
    />
    <ellipse cx="18.7358" cy="24.314" rx="7.5" ry="8.65385" fill="#303644" />
    <ellipse
      cx="18.5436"
      cy="24.1213"
      rx="5.76923"
      ry="6.92308"
      fill="#EFEFEF"
    />
    <ellipse
      cx="18.5435"
      cy="24.3141"
      rx="5"
      ry="5.96154"
      fill="url(#paint8_linear_5618_67654)"
    />
    <ellipse cx="79.5051" cy="24.1214" rx="8.26923" ry="9.23077" fill="black" />
    <path
      d="M89.1884 29.3134C89.1835 29.322 89.1785 29.3308 89.1734 29.3398C89.0642 29.5307 88.8948 29.8011 88.6563 30.115C88.1791 30.7428 87.4265 31.5427 86.3265 32.227C85.1821 32.9391 83.4478 33.1793 81.9705 33.2344C81.564 33.2495 81.1801 33.2506 80.8374 33.2443C80.8682 33.2368 80.8992 33.2292 80.9304 33.2214C81.8101 33.0027 82.8946 32.6601 83.6488 32.1666C84.3189 31.7282 85.0072 30.9881 85.5211 30.37C85.7798 30.0588 85.9977 29.7744 86.1509 29.5677C86.2276 29.4643 86.2882 29.3803 86.3297 29.3219C86.3318 29.319 86.3338 29.3162 86.3358 29.3134H89.1884Z"
      fill="black"
      stroke="black"
      strokeWidth="0.384615"
    />
    <ellipse cx="79.5051" cy="24.314" rx="7.5" ry="8.65385" fill="#303644" />
    <ellipse
      cx="79.3127"
      cy="24.1213"
      rx="5.76923"
      ry="6.92308"
      fill="#EFEFEF"
    />
    <ellipse
      cx="79.3127"
      cy="24.3141"
      rx="5"
      ry="5.96154"
      fill="url(#paint9_linear_5618_67654)"
    />
    <rect
      x="2.12842"
      y="33.0557"
      width="116.341"
      height="0.769231"
      fill="#D9D9D9"
    />
    <path
      d="M86.7351 28.3525H113.84L112.875 29.1218H86.2515L86.7351 28.3525Z"
      fill="black"
    />
    <path
      d="M25.9924 27.8301H71.8151L72.4515 28.9839H25.1438L25.9924 27.8301Z"
      fill="black"
    />
    <path
      d="M60.2703 6.28735C57.5102 4.59537 53.2207 2.60974 53.2207 2.60974C53.2207 2.60974 62.5956 2.55406 67.8473 2.60994C72.1876 2.65612 77.1643 3.15004 77.1643 3.15004C77.1643 3.15004 79.602 3.95099 81.7718 4.98816C84.4576 6.27198 89.5384 9.19208 89.5384 9.19208C89.5384 9.19208 83.7287 9.66882 79.9989 9.85351C74.2071 10.1403 65.1525 10.1328 65.1525 10.1328C65.1525 10.1328 62.5068 7.65831 60.2703 6.28735Z"
      fill="#111325"
    />
    <path
      d="M0.869965 12.0234L4.60178 12.1082C4.94664 12.116 5.10762 12.5388 4.85532 12.774L2.909 14.5886C2.8378 14.655 2.74407 14.6919 2.64673 14.6919H0.247314C0.247314 14.6919 0.357144 13.5346 0.573436 12.8281C0.671464 12.5078 0.869965 12.0234 0.869965 12.0234Z"
      fill="url(#paint10_linear_5618_67654)"
    />
    <path
      d="M83.99 13.2148H116.682C116.682 13.2148 117.022 13.6491 117.201 13.9557C117.374 14.2521 117.641 14.7533 117.641 14.7533H87.51L83.99 13.2148Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_5618_67654"
        x="29.0717"
        y="13.0717"
        width="15.1171"
        height="14.2496"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.14089" />
        <feGaussianBlur stdDeviation="1.71133" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0832289 0 0 0 0 0.113137 0 0 0 0 0.234342 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5618_67654"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5618_67654"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5618_67654"
        x1="50.4191"
        y1="-0.549364"
        x2="63.4563"
        y2="11.9865"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F4759" />
        <stop offset="1" stopColor="#3A4153" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5618_67654"
        x1="77.508"
        y1="26.7986"
        x2="76.9311"
        y2="-3.32403"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F4759" />
        <stop offset="1" stopColor="#56617A" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_5618_67654"
        x1="43.1709"
        y1="9.62872"
        x2="43.0857"
        y2="26.2154"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_5618_67654"
        x1="46.5506"
        y1="9.76953"
        x2="67.7827"
        y2="32.0551"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#282E3A" />
        <stop offset="1" stopColor="#3F4759" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_5618_67654"
        x1="35.1701"
        y1="13.3066"
        x2="39.5642"
        y2="23.7898"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#213482" />
        <stop offset="1" stopColor="#041660" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_5618_67654"
        x1="36.1609"
        y1="15.0797"
        x2="38.2992"
        y2="23.0985"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5A00" />
        <stop offset="1" stopColor="#DB4E00" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_5618_67654"
        x1="41.7821"
        y1="2.32617"
        x2="41.7821"
        y2="12.3964"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111325" />
        <stop offset="1" stopColor="#2D2E37" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_5618_67654"
        x1="42.7469"
        y1="2.71289"
        x2="42.7473"
        y2="9.7005"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F2239" />
        <stop offset="1" stopColor="#333948" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_5618_67654"
        x1="14.1204"
        y1="15.4679"
        x2="19.505"
        y2="29.3141"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_5618_67654"
        x1="74.8897"
        y1="15.4679"
        x2="80.2743"
        y2="29.3141"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7D7D7" />
        <stop offset="1" stopColor="#E9E9E9" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_5618_67654"
        x1="2.89683"
        y1="12.13"
        x2="2.89683"
        y2="14.6921"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F8AA9D" />
        <stop offset="1" stopColor="#FFC0B5" />
      </linearGradient>
      <clipPath id="clip0_5618_67654">
        <rect
          x="32.0669"
          y="13.7891"
          width="9.1271"
          height="9.1271"
          rx="2.28178"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const WomenGenderIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Vertical container">
      <g id="Vertical container_2">
        <path
          id="Vector"
          d="M9 12C11.8995 12 14.25 9.6495 14.25 6.75C14.25 3.85051 11.8995 1.5 9 1.5C6.10051 1.5 3.75 3.85051 3.75 6.75C3.75 9.6495 6.10051 12 9 12Z"
          stroke="#FF35BA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M9 12V16.5"
          stroke="#FF35BA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M11.25 14.25H6.75"
          stroke="#FF35BA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const ManGenderIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Vertical container">
      <g id="Vertical container_2">
        <path
          id="Vector"
          d="M7.6875 16.125C10.8977 16.125 13.5 13.5227 13.5 10.3125C13.5 7.10234 10.8977 4.5 7.6875 4.5C4.47734 4.5 1.875 7.10234 1.875 10.3125C1.875 13.5227 4.47734 16.125 7.6875 16.125Z"
          stroke="#287EFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M16.125 1.875L12 6"
          stroke="#287EFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M11.25 1.875H16.125V6.75"
          stroke="#287EFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const AppleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.875 9C16.875 13.347 13.3509 16.875 9 16.875C4.64906 16.875 1.125 13.347 1.125 9C1.125 4.64906 4.64906 1.125 9 1.125C13.3509 1.125 16.875 4.64906 16.875 9Z"
      fill="#283544"
    />
    <path
      d="M12.6912 7.00728C12.6482 7.03235 11.6252 7.5614 11.6252 8.73442C11.6734 10.0722 12.9162 10.5413 12.9375 10.5413C12.9162 10.5664 12.7499 11.1804 12.2573 11.8241C11.8663 12.3785 11.4324 12.9375 10.7734 12.9375C10.1467 12.9375 9.92165 12.568 9.19844 12.568C8.42177 12.568 8.20201 12.9375 7.60736 12.9375C6.94843 12.9375 6.48236 12.3485 6.07009 11.7993C5.53449 11.0805 5.07925 9.95237 5.06318 8.8692C5.05235 8.29523 5.17044 7.73102 5.47021 7.25178C5.8933 6.58274 6.64866 6.12857 7.47355 6.1136C8.10558 6.09374 8.66808 6.51795 9.05379 6.51795C9.42344 6.51795 10.1145 6.1136 10.8964 6.1136C11.2339 6.11392 12.1339 6.20866 12.6912 7.00728ZM9.00034 5.999C8.88784 5.47483 9.19844 4.95067 9.48772 4.61631C9.85737 4.21195 10.4412 3.9375 10.9446 3.9375C10.9768 4.46166 10.7731 4.97574 10.409 5.35014C10.0824 5.75449 9.51987 6.0589 9.00034 5.999Z"
      fill="white"
    />
  </svg>
);

export const AndroidIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="android">
      <g id="android_2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.08274 2.185C7.65011 1.8681 8.30397 1.6875 9 1.6875C9.69604 1.6875 10.3499 1.8681 10.9173 2.185L11.3324 1.76988C11.4422 1.66004 11.6203 1.66004 11.7301 1.76988C11.84 1.87971 11.84 2.05779 11.7301 2.16762L11.3969 2.50085C12.3337 3.22064 12.9375 4.35231 12.9375 5.625H5.0625C5.0625 4.35231 5.66631 3.22064 6.6031 2.50085L6.26988 2.16762C6.16004 2.05779 6.16004 1.87971 6.26988 1.76988C6.37971 1.66004 6.55779 1.66004 6.66762 1.76988L7.08274 2.185ZM7.875 3.9375C7.875 4.24816 7.62316 4.5 7.3125 4.5C7.00184 4.5 6.75 4.24816 6.75 3.9375C6.75 3.62684 7.00184 3.375 7.3125 3.375C7.62316 3.375 7.875 3.62684 7.875 3.9375ZM10.6875 4.5C10.9982 4.5 11.25 4.24816 11.25 3.9375C11.25 3.62684 10.9982 3.375 10.6875 3.375C10.3768 3.375 10.125 3.62684 10.125 3.9375C10.125 4.24816 10.3768 4.5 10.6875 4.5Z"
          fill="#87C527"
        />
        <path
          d="M2.8125 7.03125C2.8125 6.56526 3.19026 6.1875 3.65625 6.1875C4.12224 6.1875 4.5 6.56526 4.5 7.03125V10.4062C4.5 10.8722 4.12224 11.25 3.65625 11.25C3.19026 11.25 2.8125 10.8722 2.8125 10.4062V7.03125Z"
          fill="#87C527"
        />
        <path
          d="M6.75 13.5V15.4688C6.75 15.9347 7.12776 16.3125 7.59375 16.3125C8.05974 16.3125 8.4375 15.9347 8.4375 15.4688V13.5H9.5625V15.4688C9.5625 15.9347 9.94026 16.3125 10.4062 16.3125C10.8722 16.3125 11.25 15.9347 11.25 15.4688V13.5H11.8125C12.4338 13.5 12.9375 12.9963 12.9375 12.375V6.1875H5.0625V12.375C5.0625 12.9963 5.56618 13.5 6.1875 13.5H6.75Z"
          fill="#87C527"
        />
        <path
          d="M13.5 7.03125C13.5 6.56526 13.8778 6.1875 14.3438 6.1875C14.8097 6.1875 15.1875 6.56526 15.1875 7.03125V10.4062C15.1875 10.8722 14.8097 11.25 14.3438 11.25C13.8778 11.25 13.5 10.8722 13.5 10.4062V7.03125Z"
          fill="#87C527"
        />
      </g>
    </g>
  </svg>
);

export const TabArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
  >
    <path
      d="M5.13312 3.99328L3.81979 2.67995L1.67979 0.539951C1.22646 0.0932846 0.453125 0.413285 0.453125 1.05328V5.20662V8.94662C0.453125 9.58662 1.22646 9.90662 1.67979 9.45328L5.13312 5.99995C5.68646 5.45328 5.68646 4.54662 5.13312 3.99328Z"
      fill="#475467"
    />
  </svg>
);

export const LinearSortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2 4.66699H14"
      stroke="#101828"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 8H12"
      stroke="#101828"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6.6665 11.333H9.33317"
      stroke="#101828"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DangerNotification = ({
  stroke = "#B42318",
}: {
  stroke?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M12.3636 3.90981L12.3635 3.90957C11.6995 2.71278 10.8477 2.16699 10.0007 2.16699C9.15372 2.16699 8.30196 2.71278 7.63793 3.90957L7.63779 3.90981L2.3053 13.5083C2.30516 13.5085 2.30503 13.5088 2.30489 13.509C1.68536 14.6338 1.66539 15.6134 2.09051 16.3393L1.65905 16.592L2.09051 16.3393C2.51499 17.0642 3.38282 17.5253 4.66738 17.5253H15.334C16.6186 17.5253 17.4864 17.0642 17.9109 16.3393C18.3363 15.6129 18.3156 14.625 17.697 13.5098L12.3636 3.90981ZM12.3636 3.90981L17.6968 13.5096L12.3636 3.90981ZM10.9047 15.1491L10.9316 15.1276L10.9554 15.1025C11.1874 14.8576 11.334 14.52 11.334 14.167C11.334 13.814 11.1874 13.4763 10.9554 13.2315L10.9316 13.2064L10.9047 13.1849L10.7797 13.0849L10.7628 13.0713L10.7447 13.0593C10.6724 13.0111 10.594 12.9694 10.5095 12.938C10.4316 12.9021 10.3482 12.875 10.2554 12.8593C10.0848 12.821 9.90305 12.8235 9.73597 12.8599C9.64989 12.8757 9.56835 12.9027 9.49189 12.938C9.40739 12.9695 9.32899 13.0111 9.25669 13.0593L9.23864 13.0713L9.2217 13.0849L9.0967 13.1849L9.06978 13.2064L9.04607 13.2315C8.81406 13.4763 8.66738 13.814 8.66738 14.167C8.66738 14.52 8.81407 14.8576 9.04607 15.1025L9.06978 15.1276L9.0967 15.1491L9.1592 15.1991L9.2217 15.2491L9.23864 15.2626L9.2567 15.2747C9.32899 15.3229 9.40739 15.3645 9.49189 15.396C9.57304 15.4334 9.6599 15.4615 9.75185 15.4769L9.75183 15.477L9.76334 15.4786C9.76641 15.4791 9.76968 15.4795 9.77314 15.48C9.82378 15.4873 9.91386 15.5003 10.0007 15.5003C10.0927 15.5003 10.1837 15.4864 10.2363 15.4777C10.3368 15.4627 10.4263 15.4343 10.5095 15.396C10.594 15.3645 10.6724 15.3229 10.7447 15.2747L10.7628 15.2626L10.7797 15.2491L10.8422 15.1991L10.9047 15.1491ZM10.0007 6.37533C9.38291 6.37533 8.87571 6.88252 8.87571 7.50033V11.667C8.87571 12.2848 9.3829 12.792 10.0007 12.792C10.6185 12.792 11.1257 12.2848 11.1257 11.667V7.50033C11.1257 6.88252 10.6185 6.37533 10.0007 6.37533Z"
      fill="#FEF3F2"
      stroke={stroke}
    />
  </svg>
);

export const ImageFrameIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M5.99935 6.66667C6.73573 6.66667 7.33268 6.06971 7.33268 5.33333C7.33268 4.59695 6.73573 4 5.99935 4C5.26297 4 4.66602 4.59695 4.66602 5.33333C4.66602 6.06971 5.26297 6.66667 5.99935 6.66667Z"
      stroke="#151515"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.66732 1.33301H6.00065C2.66732 1.33301 1.33398 2.66634 1.33398 5.99967V9.99967C1.33398 13.333 2.66732 14.6663 6.00065 14.6663H10.0007C13.334 14.6663 14.6673 13.333 14.6673 9.99967V6.66634"
      stroke="#151515"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 1.33301V5.33301L13.3333 3.99967"
      stroke="#151515"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9993 5.33333L10.666 4"
      stroke="#151515"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.7793 12.633L5.06596 10.4264C5.59263 10.073 6.35263 10.113 6.82596 10.5197L7.04596 10.713C7.56596 11.1597 8.40596 11.1597 8.92596 10.713L11.6993 8.33305C12.2193 7.88638 13.0593 7.88638 13.5793 8.33305L14.666 9.26638"
      stroke="#151515"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDoubleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <g clipPath="url(#clip0_7732_78011)">
      <path d="M24 0.5H0V24.5H24V0.5Z" fill="white" fillOpacity="0.01" />
      <path
        d="M6 6.5L12 12.5L6 18.5"
        stroke="#475467"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5L18 12.5L12 18.5"
        stroke="#475467"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7732_78011">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const AirCondition = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <g clipPath="url(#clip0_7999_80563)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0.5C1.206 0.5 0.5 1.107 0.5 1.93V6.584C0.5 7.408 1.206 8.014 2 8.014H2.582V6C2.582 5.554 2.772 5.136 3.095 4.836C3.4177 4.53834 3.84099 4.37367 4.28 4.375H10.72C11.156 4.375 11.583 4.536 11.905 4.835C12.227 5.136 12.418 5.555 12.418 6V8.015H13C13.794 8.015 14.5 7.408 14.5 6.585V1.93C14.5 1.107 13.794 0.5 13 0.5H2ZM11.168 8.015H3.832V6C3.832 5.915 3.868 5.824 3.947 5.75C4.03843 5.6681 4.15726 5.62349 4.28 5.625H10.72C10.8424 5.62374 10.9608 5.66833 11.052 5.75C11.132 5.824 11.168 5.915 11.168 6V8.015ZM5.25 10.249C5.25 10.0501 5.17098 9.85932 5.03033 9.71867C4.88968 9.57802 4.69891 9.499 4.5 9.499C4.30109 9.499 4.11032 9.57802 3.96967 9.71867C3.82902 9.85932 3.75 10.0501 3.75 10.249V11.349C3.75 11.5214 3.68152 11.6867 3.55962 11.8086C3.43772 11.9305 3.27239 11.999 3.1 11.999H3C2.80109 11.999 2.61032 12.078 2.46967 12.2187C2.32902 12.3593 2.25 12.5501 2.25 12.749C2.25 12.9479 2.32902 13.1387 2.46967 13.2793C2.61032 13.42 2.80109 13.499 3 13.499H3.1C3.67022 13.499 4.21708 13.2725 4.62028 12.8693C5.02348 12.4661 5.25 11.9192 5.25 11.349V10.249ZM10.5 9.499C10.3011 9.499 10.1103 9.57802 9.96967 9.71867C9.82902 9.85932 9.75 10.0501 9.75 10.249V11.349C9.75 11.9192 9.97652 12.4661 10.3797 12.8693C10.7829 13.2725 11.3298 13.499 11.9 13.499H12C12.1989 13.499 12.3897 13.42 12.5303 13.2793C12.671 13.1387 12.75 12.9479 12.75 12.749C12.75 12.5501 12.671 12.3593 12.5303 12.2187C12.3897 12.078 12.1989 11.999 12 11.999H11.9C11.7276 11.999 11.5623 11.9305 11.4404 11.8086C11.3185 11.6867 11.25 11.5214 11.25 11.349V10.249C11.25 10.0501 11.171 9.85932 11.0303 9.71867C10.8897 9.57802 10.6989 9.499 10.5 9.499ZM8.25 10.249C8.25 10.0501 8.17098 9.85932 8.03033 9.71867C7.88968 9.57802 7.69891 9.499 7.5 9.499C7.30109 9.499 7.11032 9.57802 6.96967 9.71867C6.82902 9.85932 6.75 10.0501 6.75 10.249V13.749C6.75 13.9479 6.82902 14.1387 6.96967 14.2793C7.11032 14.42 7.30109 14.499 7.5 14.499C7.69891 14.499 7.88968 14.42 8.03033 14.2793C8.17098 14.1387 8.25 13.9479 8.25 13.749V10.249Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_7999_80563">
        <rect
          width="14"
          height="14"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const LuggageCartIcon = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      d="M1.83337 9.5V10.8333C1.83337 11.0101 1.90361 11.1797 2.02864 11.3047C2.15366 11.4298 2.32323 11.5 2.50004 11.5H9.16671C9.16671 12.0304 9.37742 12.5391 9.75249 12.9142C10.1276 13.2893 10.6363 13.5 11.1667 13.5C11.6971 13.5 12.2058 13.2893 12.5809 12.9142C12.956 12.5391 13.1667 12.0304 13.1667 11.5H14.5C14.6769 11.5 14.8464 11.4298 14.9714 11.3047C15.0965 11.1797 15.1667 11.0101 15.1667 10.8333V5.5C15.1667 4.96957 14.956 4.46086 14.5809 4.08579C14.2058 3.71071 13.6971 3.5 13.1667 3.5H6.50004C5.96961 3.5 5.4609 3.71071 5.08583 4.08579C4.71075 4.46086 4.50004 4.96957 4.50004 5.5V10.1667H3.16671V9.5C3.16671 9.32319 3.09647 9.15362 2.97145 9.0286C2.84642 8.90357 2.67685 8.83333 2.50004 8.83333C2.32323 8.83333 2.15366 8.90357 2.02864 9.0286C1.90361 9.15362 1.83337 9.32319 1.83337 9.5ZM10.5 11.5C10.5 11.3681 10.5391 11.2393 10.6124 11.1296C10.6856 11.02 10.7898 10.9345 10.9116 10.8841C11.0334 10.8336 11.1674 10.8204 11.2968 10.8461C11.4261 10.8719 11.5449 10.9354 11.6381 11.0286C11.7313 11.1218 11.7948 11.2406 11.8206 11.3699C11.8463 11.4993 11.8331 11.6333 11.7826 11.7551C11.7322 11.8769 11.6467 11.9811 11.5371 12.0543C11.4275 12.1276 11.2986 12.1667 11.1667 12.1667C10.9899 12.1667 10.8203 12.0964 10.6953 11.9714C10.5703 11.8464 10.5 11.6768 10.5 11.5ZM5.83337 7.5H13.8334V10.1667H12.6467C12.4593 9.96043 12.2308 9.79565 11.9759 9.68289C11.721 9.57013 11.4454 9.51188 11.1667 9.51188C10.888 9.51188 10.6124 9.57013 10.3575 9.68289C10.1027 9.79565 9.87416 9.96043 9.68671 10.1667H5.83337V7.5ZM5.83337 5.5C5.83337 5.32319 5.90361 5.15362 6.02864 5.0286C6.15366 4.90357 6.32323 4.83333 6.50004 4.83333H13.1667C13.3435 4.83333 13.5131 4.90357 13.6381 5.0286C13.7631 5.15362 13.8334 5.32319 13.8334 5.5V6.16667H5.83337V5.5Z"
      fill={fill}
    />
  </svg>
);

export const ChartIcon = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      d="M10.8934 3.83301H10.6667V1.83301C10.6667 1.55967 10.44 1.33301 10.1667 1.33301C9.89337 1.33301 9.66671 1.55967 9.66671 1.83301V3.83301H7.33337V1.83301C7.33337 1.55967 7.10671 1.33301 6.83337 1.33301C6.56004 1.33301 6.33337 1.55967 6.33337 1.83301V3.83301H6.10671C5.40671 3.83301 4.83337 4.40634 4.83337 5.10634V8.49967C4.83337 9.96634 5.83337 11.1663 7.50004 11.1663H8.00004V15.1663C8.00004 15.4397 8.22671 15.6663 8.50004 15.6663C8.77337 15.6663 9.00004 15.4397 9.00004 15.1663V11.1663H9.50004C11.1667 11.1663 12.1667 9.96634 12.1667 8.49967V5.10634C12.1667 4.40634 11.5934 3.83301 10.8934 3.83301Z"
      fill={fill}
    />
  </svg>
);

export const HeaterIcon = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      d="M5.80004 2.49967L4.85337 3.95967L5.80004 5.43301H5.79337L4.46671 7.49967L3.31337 6.89967L4.26004 5.42634L3.31337 3.95967L4.64671 1.89301L5.80004 2.49967ZM9.80004 2.42634L8.85337 3.89967L9.80004 5.36634L9.79337 5.37301L8.46671 7.43301L7.31337 6.83301L8.26004 5.36634L7.31337 3.89967L8.64671 1.83301L9.80004 2.42634ZM13.8334 2.42634L12.8734 3.89967L13.8334 5.36634V5.37301L12.5 7.43301L11.3334 6.83301L12.28 5.36634L11.3334 3.89967L12.6667 1.83301L13.8334 2.42634ZM1.83337 15.1663V9.83301C1.83337 9.47939 1.97385 9.14025 2.2239 8.8902C2.47395 8.64015 2.81309 8.49967 3.16671 8.49967H13.8334C14.187 8.49967 14.5261 8.64015 14.7762 8.8902C15.0262 9.14025 15.1667 9.47939 15.1667 9.83301V15.1663H13.8334V13.833H3.16671V15.1663H1.83337ZM4.50004 9.83301C4.32323 9.83301 4.15366 9.90324 4.02864 10.0283C3.90361 10.1533 3.83337 10.3229 3.83337 10.4997V11.833C3.83337 12.0098 3.90361 12.1794 4.02864 12.3044C4.15366 12.4294 4.32323 12.4997 4.50004 12.4997C4.67685 12.4997 4.84642 12.4294 4.97144 12.3044C5.09647 12.1794 5.16671 12.0098 5.16671 11.833V10.4997C5.16671 10.3229 5.09647 10.1533 4.97144 10.0283C4.84642 9.90324 4.67685 9.83301 4.50004 9.83301ZM7.16671 9.83301C6.9899 9.83301 6.82033 9.90324 6.6953 10.0283C6.57028 10.1533 6.50004 10.3229 6.50004 10.4997V11.833C6.50004 12.0098 6.57028 12.1794 6.6953 12.3044C6.82033 12.4294 6.9899 12.4997 7.16671 12.4997C7.34352 12.4997 7.51309 12.4294 7.63811 12.3044C7.76314 12.1794 7.83337 12.0098 7.83337 11.833V10.4997C7.83337 10.3229 7.76314 10.1533 7.63811 10.0283C7.51309 9.90324 7.34352 9.83301 7.16671 9.83301ZM9.83337 9.83301C9.65656 9.83301 9.48699 9.90324 9.36197 10.0283C9.23695 10.1533 9.16671 10.3229 9.16671 10.4997V11.833C9.16671 12.0098 9.23695 12.1794 9.36197 12.3044C9.48699 12.4294 9.65656 12.4997 9.83337 12.4997C10.0102 12.4997 10.1798 12.4294 10.3048 12.3044C10.4298 12.1794 10.5 12.0098 10.5 11.833V10.4997C10.5 10.3229 10.4298 10.1533 10.3048 10.0283C10.1798 9.90324 10.0102 9.83301 9.83337 9.83301ZM12.5 9.83301C12.3232 9.83301 12.1537 9.90324 12.0286 10.0283C11.9036 10.1533 11.8334 10.3229 11.8334 10.4997V11.833C11.8334 12.0098 11.9036 12.1794 12.0286 12.3044C12.1537 12.4294 12.3232 12.4997 12.5 12.4997C12.6769 12.4997 12.8464 12.4294 12.9714 12.3044C13.0965 12.1794 13.1667 12.0098 13.1667 11.833V10.4997C13.1667 10.3229 13.0965 10.1533 12.9714 10.0283C12.8464 9.90324 12.6769 9.83301 12.5 9.83301Z"
      fill={fill}
    />
  </svg>
);

export const FuelIcon = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      d="M2.5 1.83301H4.5C4.68667 1.83301 4.85333 1.90634 4.97333 2.02634L6.36 3.41967L6.89333 2.89301C7.16667 2.63301 7.5 2.49967 7.83333 2.49967H11.8333C12.1667 2.49967 12.5 2.63301 12.7733 2.89301L13.44 3.55967C13.7 3.83301 13.8333 4.16634 13.8333 4.49967V13.1663C13.8333 13.52 13.6929 13.8591 13.4428 14.1091C13.1928 14.3592 12.8536 14.4997 12.5 14.4997H5.83333C5.47971 14.4997 5.14057 14.3592 4.89052 14.1091C4.64048 13.8591 4.5 13.52 4.5 13.1663V5.83301C4.5 5.49967 4.63333 5.16634 4.89333 4.89301L5.42 4.35967L4.22667 3.16634H2.5V1.83301ZM7.83333 3.83301V5.16634H11.8333V3.83301H7.83333ZM8.10667 7.83301L6.77333 6.49967H5.83333V7.43967L7.16667 8.77301V10.893L5.83333 12.2263V13.1663H6.77333L8.10667 11.833H10.2267L11.56 13.1663H12.5V12.2263L11.1667 10.893V8.77301L12.5 7.43967V6.49967H11.56L10.2267 7.83301H8.10667ZM8.5 9.16634H9.83333V10.4997H8.5V9.16634Z"
      fill={fill}
    />
  </svg>
);

export const GasIcon = ({ fill = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      d="M11.1667 6.49967V13.833C11.1667 14.1866 11.0262 14.5258 10.7762 14.7758C10.5261 15.0259 10.187 15.1663 9.83337 15.1663H7.16671C6.81309 15.1663 6.47395 15.0259 6.2239 14.7758C5.97385 14.5258 5.83337 14.1866 5.83337 13.833V6.49967C5.83337 5.25967 6.68004 4.21301 7.83337 3.91967V3.16634H6.50004V1.83301H10.5V3.16634H9.16671V3.91967C10.32 4.21301 11.1667 5.25967 11.1667 6.49967Z"
      fill={fill}
    />
  </svg>
);

export const RollIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <g clipPath="url(#clip0_8007_13941)">
      <path
        d="M8.5 14.5C11.8137 14.5 14.5 11.8137 14.5 8.5C14.5 5.18629 11.8137 2.5 8.5 2.5C5.18629 2.5 2.5 5.18629 2.5 8.5C2.5 11.8137 5.18629 14.5 8.5 14.5Z"
        stroke="#FF5B01"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49996 9.83366C9.23634 9.83366 9.83329 9.23671 9.83329 8.50033C9.83329 7.76395 9.23634 7.16699 8.49996 7.16699C7.76358 7.16699 7.16663 7.76395 7.16663 8.50033C7.16663 9.23671 7.76358 9.83366 8.49996 9.83366Z"
        stroke="#FF5B01"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.83301V14.4997"
        stroke="#FF5B01"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.16663 8.50033L2.66663 7.16699"
        stroke="#FF5B01"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.83337 8.50033L14.3334 7.16699"
        stroke="#FF5B01"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8007_13941">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
