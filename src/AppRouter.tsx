import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Layout } from "./Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
