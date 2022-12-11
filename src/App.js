import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";

import Header from "./pages/Header"
import Main from "./pages/Main";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
