import { useUser } from "@clerk/clerk-react";
import AddResume from "./components/AddResume";
import GlobalApi from "../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeCardItem from "./components/ResumeCardItem";

const Dashboard = () => {
  const [resumeList, setResumeList] = useState<any[]>([]);
  const { user } = useUser();

  useEffect(() => {
    user && GetResumeList();
  }, [user]);

  const GetResumeList = () => {
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(
      (res: any) => {
        setResumeList(res.data.data);
      }
    );
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start creating your resume for your next Job Role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList &&
          resumeList.length > 0 &&
          resumeList.map((resume) => {
            return <ResumeCardItem resume={resume} key={resume.resumeId} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
