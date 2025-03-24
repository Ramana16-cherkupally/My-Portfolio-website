import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
