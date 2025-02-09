import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./Pages/TaskPage.jsx";

const router = createBrowserRouter([
  {
    //router for the home page
    path: "/",
    element: <App />,
  },
  {
    //router for the details task page
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
