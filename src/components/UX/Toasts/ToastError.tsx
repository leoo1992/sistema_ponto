import toast from "react-hot-toast";
import { HiXCircle } from "react-icons/hi";

export const notifyError = ({
  text = "Error",
  duration = 3000,
}: {
  text?: string;
  duration?: number;
}) => {
  toast.custom(
    (t) => (
      <div
        className={`align-center mt-4 flex content-center items-center justify-center self-center rounded-3xl 
        border border-error bg-base-300 bg-opacity-50 p-4 text-center text-sm font-extrabold text-error shadow-2xl 
        backdrop-blur-sm transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateY(${t.visible ? "0" : "-100%"})`,
        }}
      >
        <div className="pr-4 text-3xl">
          <HiXCircle />
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>
    ),
    {
      duration: duration,
      position: "top-center",
    },
  );
};
