import { FC, useEffect, useState } from "react";

interface PersonalDetailsPreviewProps {
  resumeInfo: any;
}

const PersonalDetailsPreview: FC<PersonalDetailsPreviewProps> = ({
  resumeInfo,
}) => {
    
    const [themeColor, setThemeColor] = useState<string>("");

    useEffect(()=>{
        setThemeColor(resumeInfo?.themeColor)
    }, [resumeInfo]);

  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{ color: themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center text-xs font-normal"
        style={{ color: themeColor }}
      >
        {resumeInfo?.address}
      </h2>
      <div className="flex justify-between items-center">
        <h2
          className="font-normal text-xs"
          style={{ color: themeColor }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{ color: themeColor }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr className="border-[1.5px] my-2" style={{ borderColor: themeColor }} />
    </div>
  );
};

export default PersonalDetailsPreview;
