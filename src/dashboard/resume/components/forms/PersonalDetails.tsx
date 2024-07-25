import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { DiscIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface PersonalDetailsProps {
  enableNext: (v: boolean) => void;
}

const PersonalDetails: FC<PersonalDetailsProps> = ({ enableNext }) => {
  const [formData, setFormData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();
  //@ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    enableNext(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetails(params.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoading(false);
        toast.success("Personal Details Updated")
      },
      (error) => {
        console.log(error);
        setLoading(false);
        enableNext(false);
        toast.error("Some error occured");
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-green-400 border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with the basic information</p>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input name="lastName" defaultValue={resumeInfo?.lastName} required onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input name="jobTitle" defaultValue={resumeInfo?.jobTitle} required onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input name="address" defaultValue={resumeInfo?.address} required onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input name="phone" defaultValue={resumeInfo?.phone} required onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input name="email" defaultValue={resumeInfo?.email} required onChange={handleInputChange} />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button type="submit" disabled={loading}>
            {loading ? <DiscIcon className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
