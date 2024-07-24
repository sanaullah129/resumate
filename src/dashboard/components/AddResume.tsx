import { PlusCircledIcon, DiscIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  //@ts-ignore
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { v4 as uuidv4 } from "uuid";
//@ts-ignore
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [resumeTitle, setResumeTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const { user } = useUser();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setResumeTitle("");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResumeTitle(e.target.value);
  };

  const handleCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
    GlobalApi.CreateNewResume(data).then(
      (response) => {
        console.log(response);
        if (response) {
          setLoading(false);
          navigate("/dashboard/resume/" + response.data.data.documentId + "/edit");
        }
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <div
        onClick={handleOpenDialog}
        className="px-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[280px] cursor-pointer hover:scale-105 transition-all hover:shadow-xl border-dashed"
      >
        <PlusCircledIcon />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your resume.</p>
              <Input
                className="my-2"
                placeholder="Ex. Full Stack Developer"
                onChange={handleTitleChange}
              />
            </DialogDescription>
            <div className="flex justify-end gap-4">
              <Button variant="ghost" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button onClick={handleCreate} disabled={!resumeTitle || loading}>
                {loading ? <DiscIcon className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
