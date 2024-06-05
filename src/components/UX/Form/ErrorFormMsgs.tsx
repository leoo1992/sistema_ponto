export const ErrorFormMsgs = ({ error }: { error: string}) => (
  <p role="alert" className="ml-16 p-1 text-red-500">
    * {error}
  </p>
);
