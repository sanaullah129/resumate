import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  //@ts-ignore
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <div>
      <div
        onClick={handleOpenDialog}
        className="px-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[280px] cursor-pointer hover:scale-105 transition-all hover:shadow-xl border-dashed"
      >
        <PlusCircledIcon />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your resume.</p>
              <Input className="my-2" placeholder="Ex. Full Stack Developer" />
            </DialogDescription>
            <div className="flex justify-end gap-4">
              <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
              <Button>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
