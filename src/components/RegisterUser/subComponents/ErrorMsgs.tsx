export const ErrorMessage = ({ children }: any) => (
  <p role="alert" className="ml-16 p-1 text-red-500">
    * {children}
  </p>
);
