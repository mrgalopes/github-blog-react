import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
