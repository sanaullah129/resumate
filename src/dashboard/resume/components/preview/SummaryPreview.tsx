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
        {resumeInfo?.summery}
      </p>
    </div>
  );
};

export default SummaryPreview;
