import React from 'react'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Kanban from '../pages/Kanban/Kanban';

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={Kanban} />
        <Route path="/sign_in" element={SignIn} />
        <Route path="/sign_up" element={SignUp} />
      </Routes>
    </HashRouter>
  )
}
