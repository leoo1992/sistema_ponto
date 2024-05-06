import ReactDOM from "react-dom/client";
import "../styles/@Globals/index.css";
import GlobalRouters from "../routes/GlobalRouters";

window.console.warn = () => {};
window.console.info = () => {};
// window.console.error = () => {};
// window.console.log = () => {};
// window.console.clear();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div
    id="root"
    className="-z-10 h-full w-full bg-gradient-to-tr from-red-50 via-blue-50 to-red-50"
  >
    <GlobalRouters />
  </div>,
);
