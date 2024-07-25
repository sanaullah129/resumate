import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import PersonalDetailsPreview from "./preview/PersonalDetailsPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ProfessionalExpPreview from "./preview/ProfessionalExperiencePreview";
import EducationPreview from "./preview/EducationPreview";
import SkillsPreview from "./preview/SkillsPreview";

const ResumePreview = () => {
  //@ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      <ProfessionalExpPreview resumeInfo={resumeInfo} />
      {/* Educational Details */}
      <EducationPreview resumeInfo={resumeInfo} />
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
