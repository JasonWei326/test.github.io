import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Info from "./Info";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
