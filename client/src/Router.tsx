import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./views/IndexPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
