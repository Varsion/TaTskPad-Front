import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Project from "../pages/Dashboard/Project";
import Organization from "../pages/Organization/Organization";
import Kanban from "../pages/Kanban/Kanban";
import Backlog from "../pages/Kanban/Backlog";
import Issue from "../pages/Issue/Issue";
import CreateIssue from "../pages/Issue/CreateIssue";
import Members from "../pages/Role/Member";
import Roles from "../pages/Role/Role";
import Permissions from "../pages/Role/Permission";
import UpdateIssue from "../pages/Issue/UpdateIssue";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route path="/" element={<Kanban />} />
        
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/organization" element={<Organization />} />=
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/members" element={<Members />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permission/:id" element={<Permissions />} />

        <Route path="/issue/:keyNumber" element={<Issue />} />
        <Route path="/issue/create" element={<CreateIssue />} />
        <Route path="/issue/:keyNumber/update" element={<UpdateIssue />} />
      </Routes>
    </BrowserRouter>
  );
}
