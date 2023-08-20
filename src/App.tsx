import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import { Global } from "@emotion/react";

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={` * { margin: 0 }`} />
      <Main />
    </BrowserRouter>
  );
};
export default App;
