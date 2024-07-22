import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="py-3 px-5 flex justify-between shadow-md">
      <Link to="/">
        <img src="/logo.svg" width={100} height={100} />
      </Link>
      <div>
        {isSignedIn ? (
          <div className="flex gap-2 items-center">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
