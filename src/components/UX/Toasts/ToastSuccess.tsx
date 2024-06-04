import toast from "react-hot-toast";
import { HiCheckCircle } from "react-icons/hi";
import { useEffect, useState } from "react";

export const NotifySuccess = ({
  text = "Success",
}: {
  text?: string;
  duration?: number;
}) => {
  const [opacityEntry, setOpacityEntry] = useState("opacity-50");

  useEffect(() => {
    setTimeout(() => {
      setOpacityEntry("opacity-100");
    }, 500);
  }, [opacityEntry]);

  return (
    <div
      className={`align-center mt-16 flex content-center items-center justify-center self-center rounded-3xl 
      border border-success bg-base-300 bg-opacity-50 p-4 text-center text-sm font-extrabold text-success 
      shadow-2xl backdrop-blur-sm transition-transform duration-500 ease-in-out ${opacityEntry}`}
      style={{
        transform: `translateY(${opacityEntry === "opacity-100" ? "0" : "100%"})`,
      }}
    >
      <div className="pr-4 text-3xl">
        <HiCheckCircle />
      </div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export const notifySuccess = ({
  text,
  duration = 3000,
}: {
  text?: string;
  duration?: number;
}) => {
  toast.custom(() => <NotifySuccess text={text} duration={duration} />, {
    duration: duration,
    position: "top-right",
  });
};
