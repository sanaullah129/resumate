import { ChangeEvent, FC, useContext, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import RichTextEditor from "../RichTextEditor";

interface ExperienceProps {
  enableNext: (v: boolean) => void;
}

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};
const Experience: FC<ExperienceProps> = ({ enableNext }) => {
  const [experienceList, setExperienceList] = useState<any[]>([formField]);
  const params = useParams();
  //@ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {};

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-green-400 border-t-4 mt-10">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add your relevant previous job experiences</p>
      <div>
        {experienceList &&
          experienceList.map((item: any, index: number) => {
            return (
              <div>
                <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      name="title"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      name="companyName"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      name="city"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      name="state"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      type="date"
                      name="startDate"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-xs">Position Title</label>
                    <Input
                      type="date"
                      name="endDate"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className="col-span-2">
                    <RichTextEditor />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-between">
        <Button variant="outline" className="text-green-800"> + Add More Experience</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default Experience;
