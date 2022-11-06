import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./1_Components/BT_Home/Home.jsx";
import MSI from "./1_Components/BT_MSI/MSI";
import BauCua from "./BT_BauCua/BauCua.jsx";
import Router from "./16_Router/Router.jsx";
import Movie from "./16_Router/Movie.jsx";
import Contact from "./16_Router/Contact.jsx";
import MovieDetail from "./16_Router/MovieDetail.jsx";

const router = createBrowserRouter([
  // Nếu muốn tất cả cái page trong ứng dụng đều có chung một layout nào đó ra sẽ đưa tắt cả khai báo routes vào bên trong array children
  // { path: "/", element: <Root />, children : []}
  { path: "/", element: <Home /> },
  { path: "/msi", element: <MSI /> },
  { path: "/baucua", element: <BauCua /> },
  {
    path: "/router",
    element: <Router />,
    children: [
      { path: "movie", element: <Movie /> }, // => /router/movie
      // :key => dynamic params (chấp nhận mọi giá trị trên url)
      { path: "movie/:movieID", element: <MovieDetail />},
      { path: "contact", element: <Contact /> },
    ],
  },

  // Notfound page, cần được kha báo ở dưới cùng tất cả các route kh
  { path: "*", element: <h1>NotFound</h1> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
