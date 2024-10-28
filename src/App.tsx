import { ScrollToTopButton } from "components/Buttons/ScrollToTopButton/ScrollToTopButton";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { AboutUsPage } from "pages/AboutUsPage";
import { CreatePlanPage } from "pages/CreatePlanPage";
import { HomePage } from "pages/HomePage";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Container>
            <Header />
            <Outlet />
            <ScrollToTopButton />
          </Container>
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/create-your-plan",
          element: <CreatePlanPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//vercel deploy, env update
