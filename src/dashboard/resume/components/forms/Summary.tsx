import { DiscIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";
import {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
//@ts-ignore
import AiChatSession from "../../../../../service/AiModal";
import { toast } from "sonner";

interface SummarysProps {
  enableNext: (v: boolean) => void;
}

const prompt =
  "Job Title: {jobTitle}, Depends on the job title give me summary for my resume with in 4-5 lines in JSON format with field experience level and summary with experience level for fresher, midlevel and experienced, give a direct json with exp level and summary fields only!";

const Summary: FC<SummarysProps> = ({ enableNext }) => {
  const [summaryInput, setSummaryInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState<any>();

  const params = useParams();
  //@ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    summaryInput &&
      setResumeInfo({
        ...resumeInfo,
        summary: summaryInput,
      });
  }, [summaryInput]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummaryInput(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summary: summaryInput,
      },
    };
    GlobalApi.UpdateResumeDetails(params.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoading(false);
        toast.success("Summary Updated");
      },
      (error) => {
        console.log(error);
        setLoading(false);
        enableNext(false);
        toast.error("Some error occured");
      }
    );
  };

  const GenerateAiSummary = async () => {
    setLoading(true);
    try {
      const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
      console.log(PROMPT);
      const result = await AiChatSession.AiChatSession.sendMessage(PROMPT);
      //@ts-ignore
      console.log(JSON.parse([result.response.text()]));
      //@ts-ignore
      setAiGeneratedSummaryList(JSON.parse([result.response.text()]));
      setLoading(false);
    } catch (error: any) {
      console.log("Ai Response error: " + error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-green-400 border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add summary for your job profile</p>

        <form className="mt-7" onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="border-green-900 text-green-600"
              onClick={GenerateAiSummary}
            >
              AI <StarFilledIcon />
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            onChange={handleInputChange}
            defaultValue={resumeInfo?.summary}
          />
          <div className="mt-2 flex justify-end items-end">
            <Button disabled={loading} type="submit">
              {loading ? <DiscIcon className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
      {aiGeneratedSummaryList && (
        <div>
          <h2 className="font-bold text-lg">Summary Suggestions</h2>
          {aiGeneratedSummaryList.map((item: any, index: number) => {
            <div key={index}>
              <h2 className="font-bold my-1">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          })}
        </div>
      )}
    </div>
  );
};

export default Summary;
