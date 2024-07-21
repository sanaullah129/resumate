import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <SignIn />
    </div>
  );
};

export default SignInPage;
