import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { getProfile } from "services/user";
import PageNotFound from "pages/404";
import AuthPage from "pages/AuthPage";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Admin from "pages/admin";
import Loader from "module/Loader";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getProfile,
  });
  console.log({ data, isLoading, error });

  if (isLoading) return <Loader />;
  return (
    <div>
      <Routes>
        <Route
          index
          element={data ? <Home /> : <Navigate to={"/authpage"} />}
        />
        <Route
          path="/admin"
          element={
            data && data.data.role === "ADMIN" ? (
              <Admin />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="/authpage"
          element={data ? <Navigate to={"/"} /> : <AuthPage />}
        />
        <Route
          path="/dashboard"
          element={data ? <Dashboard /> : <Navigate to={"/authpage"} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
