import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Project from "../pages/Dashboard/Project";
import Organization from "../pages/Organization/Organization";
import Kanban from "../pages/Kanban/Kanban";
import Backlog from "../pages/Kanban/Backlog";
import Issue from "../pages/Issue/Issue";
import CreateIssue from "../pages/Issue/CreateIssue";

export default function Router() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route path="/" element={<Kanban />} />
        
        <Route path="/:projectId/backlog" element={<Backlog />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/:organizationId/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/issue/:issueKey" element={<Issue />} />
        <Route path="/issue/:projectId/create" element={<CreateIssue />} />
      </Routes>
    </HashRouter>
  );
}
