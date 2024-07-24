import App from "./App";
import SignInPage from "./auth/sign-in";
import Dashboard from "./dashboard";
import EditResume from "./dashboard/resume/[resumeId]/edit";
import Home from "./home";

const Routes = [
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
];

export default Routes;
