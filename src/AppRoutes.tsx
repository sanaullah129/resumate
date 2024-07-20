import App from "./App";
import SignIn from "./auth/sign-in";
import Home from "./home";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
];

export default Routes;
