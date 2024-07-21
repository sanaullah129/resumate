import App from "./App";
import SignInPage from "./auth/sign-in";
import Dashboard from "./dashboard";
import Home from "./home";

const Routes = [
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
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
