import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "config/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "Layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  const query = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Toaster/>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
