import Layout from "@/components/Layout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FaqPage from "@/pages/FaqPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
]);

export default router;
