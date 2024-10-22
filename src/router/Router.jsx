import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { getProfile } from "services/user";
import PageNotFound from "src/pages/404";
import AuthPage from "src/pages/AuthPage";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Admin from "src/pages/admin";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });
  console.log({ data, isLoading, error });
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
