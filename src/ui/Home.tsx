import { useState } from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { ContactForm } from "./ContactForm";

export const Home = () => {
  const [toggleSkills, setToggleSkills] = useState<boolean>(true);

  const handleToggle = () => {
    setToggleSkills(!toggleSkills);
  };

  return (
    <section className="md:flex items-center justify-center h-auto">
      <div className="flex-1 border-r-2 border-yellow-500 mb-10 md:mb-0 px-2">
        <About handleToggle={handleToggle} toggleState={toggleSkills} />
      </div>
      <div className="flex-1 relative px-2">
        {toggleSkills ? <Skills /> : <ContactForm />}
      </div>
    </section>
  );
};
