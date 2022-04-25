import React, { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import Project from '../pages/Dashboard/Project';
import Organization from '../pages/Organization/Organization';


export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Organization />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </HashRouter>
  )
}
