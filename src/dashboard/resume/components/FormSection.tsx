import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LayersIcon,
} from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button";
import PersonalDetails from "./forms/PersonalDetails";
import { useState } from "react";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState<number>(1);
  const [enableNext, setEnableNext] = useState<boolean>(false);

  const handleNextClick = () => {
    setActiveFormIndex(activeFormIndex + 1);
  };

  const handlePrevClick = () => {
    setActiveFormIndex(activeFormIndex - 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayersIcon /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button size="sm" className="flex gap-2" onClick={handlePrevClick}>
              <ArrowLeftIcon /> Prev
            </Button>
          )}
          <Button
            className="flex gap-2"
            size="sm"
            onClick={handleNextClick}
            disabled={!enableNext}
          >
            Next <ArrowRightIcon />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetails enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summary enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience enableNext={(v) => setEnableNext(v)} />
      ) : null}
      {/* Experience */}
      {/* Education Details */}
      {/* Skills */}
    </div>
  );
};

export default FormSection;
