import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/Root";
import HomeScreen from "./Screens/Home/Home";
import MovieDetail from "./Screens/MovieDetail/MovieDetail";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomeScreen /> },
      { path: "/movie/:id", element: <MovieDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
