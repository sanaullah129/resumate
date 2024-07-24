import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ResumeProps {
  resume: any;
}

const ResumeCardItem: FC<ResumeProps> = ({ resume }) => {
  return (
    <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border border-green-500 rounded-lg hover:scale-105 transition-all hover:shadow-xl shadow-gray-500">
        <BookmarkFilledIcon />
      </div>
      <h2 className="text-lg text-center my-1">{resume.title}</h2>
    </Link>
  );
};

export default ResumeCardItem;
