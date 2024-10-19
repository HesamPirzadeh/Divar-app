import { Route, Routes } from "react-router-dom";
import PageNotFound from "src/pages/404";
import AuthPage from "src/pages/AuthPage";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Admin from "src/pages/admin";

function Router() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
