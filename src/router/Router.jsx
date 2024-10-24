import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { getProfile } from "services/user";
import PageNotFound from "pages/404";
import AuthPage from "pages/AuthPage";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Admin from "pages/admin";


function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getProfile,
  });
  console.log({ data, isLoading, error });

  if(isLoading) return <h3>Loading...</h3>
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
