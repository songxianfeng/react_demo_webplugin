import React from 'react';

import './App.css';
import Navbar from "./view/Navbar"
// 引入routes组件
import routes from "./routes";
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";

function App() {
  return (
      <div className="App">
        <Navbar/>
        {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default App;
