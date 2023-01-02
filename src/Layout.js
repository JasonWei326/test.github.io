import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/info">關於我</Link>
          </li>
          <li>
            <Link to="/contact">聯絡我</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
