import {  } from "@radix-ui/react-icons";
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
import { GiBrain } from "react-icons/gi";
import { ImSpinner } from "react-icons/im";

interface SummarysProps {
  enableNext: (v: boolean) => void;
}

const prompt =
  "Job Title: {jobTitle}, Depends on the job title give me a simple summary for my resume with in 4-5 lines, not in json format, just one single summary";

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
      setAiGeneratedSummaryList(result.response.text());
      console.log(result.response.text())
      setLoading(false);
    } catch (error: any) {
      console.log("Ai Response error: " + error);
      setLoading(false);
    }
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(aiGeneratedSummaryList.replace("\"", ""));
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
              AI <GiBrain />
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
              {loading ? <ImSpinner className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
      {aiGeneratedSummaryList && (
        <div className="p-5 shadow-lg rounded-lg border-t-green-950 border-t-4 mt-10">
          <h2 className="font-bold text-lg underline">Response of AI</h2>
          <div>
            <p>{aiGeneratedSummaryList}</p>
            <div className="flex justify-end">
            <Button size="sm" onClick={handleCopyResponse}>Copy</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
