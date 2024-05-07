import toast from "react-hot-toast";
import { HiCheckCircle } from "react-icons/hi";

export const notifySuccess = ({
  text = "Success",
  duration = 3000,
}: {
  text?: string;
  duration?: number;
}) => {
  toast.custom(
    (t) => (
      <div
        className={`align-center mt-16 flex content-center items-center justify-center self-center rounded-3xl 
        border border-success bg-base-300 bg-opacity-50 p-4 text-center text-sm font-extrabold text-success shadow-2xl 
        backdrop-blur-sm transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateY(${t.visible ? "0" : "-100%"})`,
        }}
      >
        <div className="pr-4 text-3xl">
          <HiCheckCircle />
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
