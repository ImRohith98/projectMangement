import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import SettingPage from "../containers/settings";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="setting" element={<SettingPage />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
