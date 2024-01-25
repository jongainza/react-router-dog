import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dogs from "./Dogs";
import FilterDog from "./FilterDog";

const RouterList = (dogs) => {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/:name" element={<FilterDog dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
};

export default RouterList;
