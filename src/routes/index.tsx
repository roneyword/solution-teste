import {
  BrowserRouter,
  Route,
  Routes as RoutesDOM,
} from "react-router-dom";
import { Layout } from "../Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import Users from "../pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </RoutesDOM>
    </BrowserRouter>
  );
}