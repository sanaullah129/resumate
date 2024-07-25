import { FC, useEffect, useState } from "react";

interface ProfessionalExpProps {
  resumeInfo: any;
}

const ProfessionalExpPreview: FC<ProfessionalExpProps> = ({ resumeInfo }) => {
  const [themeColor, setThemeColor] = useState<string>("");

  useEffect(() => {
    setThemeColor(resumeInfo?.themeColor);
  }, [resumeInfo]);

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: themeColor }} />
      {resumeInfo?.experience.map((exp: any) => {
        return (
          <div key={exp?.id} className="my-5">
            <h2 className="text-sm font-bold" style={{ color: themeColor }}>
              {exp?.title}
            </h2>
            <h2 className="text-xs flex justify-between">
              {exp?.companyName}, {exp?.city}, {exp?.state}
              <span>
                {exp?.startDate} -{" "}
                {exp?.currentlyWorking ? "Present" : exp?.endDate}{" "}
              </span>
            </h2>
            <p className="text-xs my-2">{exp?.workSummary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfessionalExpPreview;
