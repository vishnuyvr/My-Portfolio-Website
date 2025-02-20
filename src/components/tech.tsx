import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-24 h-24" key={technology.name}>
            
           {/* <BallCanvas icon={technology.icon} />*/}
            <img src={technology.icon} alt={technology.name} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
