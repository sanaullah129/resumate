import { FC, useEffect, useState } from "react";

interface SkillsPreviewProps {
  resumeInfo: any;
}

const SkillsPreview: FC<SkillsPreviewProps> = ({ resumeInfo }) => {
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
        Skills
      </h2>
      <hr style={{ borderColor: themeColor }} />
      <div className="grid grid-cols-2 gap-4 my-4">
      {resumeInfo?.skills?.map((skill: any) => {
        return (
          <div key={skill.id} className="flex items-center justify-between">
            <h2 className="text-xs">{skill?.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
                <div className="h-2" style={{backgroundColor: themeColor, width: skill?.rating+'%'}}></div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SkillsPreview;
