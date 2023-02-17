import { BrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut";
import { GlobalStyle } from "./global/style";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
      <LayOut />
      <GlobalStyle />
    </div>
  );
}

export default App;
