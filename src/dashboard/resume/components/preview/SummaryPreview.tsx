import { FC } from "react";

interface SummaryreviewProps {
  resumeInfo: any;
}

const SummaryPreview: FC<SummaryreviewProps> = ({
  resumeInfo,
}) => {

  return (
    <div>
      <p className="text-xs">
        {resumeInfo?.summary}
      </p>
    </div>
  );
};

export default SummaryPreview;
