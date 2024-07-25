import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";

const Summary = () => {
  const [summaryInput, setSummaryInput] = useState<string>("");
  //@ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(()=>{
    summaryInput && setResumeInfo({
        ...resumeInfo,
        summary: summaryInput,
    })
  }, [summaryInput]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummaryInput(e.target.value);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-green-400 border-t-4 mt-10">
      <h2 className="font-bold text-lg">Summary</h2>
      <p>Add summary for your job profile</p>

      <form className="mt-7">
        <div className="flex justify-between items-end">
          <label>Add Summary</label>
          <Button
            variant="outline"
            size="sm"
            className="border-green-900 text-green-600"
          >
            AI <StarFilledIcon />
          </Button>
        </div>
        <Textarea className="mt-5" required onChange={handleInputChange} />
        <div className="mt-2 flex justify-end items-end">
            <Button>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
