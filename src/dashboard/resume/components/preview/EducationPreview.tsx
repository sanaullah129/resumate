import { FC, useEffect, useState } from "react";

interface EducationPreviewProps {
  resumeInfo: any;
}

const EducationPreview: FC<EducationPreviewProps> = ({ resumeInfo }) => {
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
      {resumeInfo?.education?.map((edu: any) => {
        return (
          <div key={edu.id} className="my-5">
            <h2 className="text-sm font-bold" style={{ color: themeColor }}>
              {edu?.universityName}
            </h2>
            <h2 className="text-xs flex justify-between">
              {edu?.degree} in {edu?.major}
              <span>
                {edu?.startDate} - {edu?.endDate}{" "}
              </span>
            </h2>
            <p className="text-xs my-2">{edu?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
