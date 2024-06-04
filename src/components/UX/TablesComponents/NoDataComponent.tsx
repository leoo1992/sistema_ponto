export const NoDataComponent = (text:string) => {
  return (
    <div
      className="my-20 flex w-full flex-col items-center justify-center gap-4 self-center
    p-4 text-center font-semibold text-primary"
    >
      {text}
    </div>
  );
};
