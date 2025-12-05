import { useState } from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { ContactForm } from "./components/ContactForm";
import { Projects } from "./Projects";
import { Modal } from "./components/Modal";

export const Home = () => {
  const [toggleSkills, setToggleSkills] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleSkills(!toggleSkills);
  };

  return (
    <section className="md:flex items-center justify-center relative">
      <div className="flex-1 md:border-r-2 md:border-yellow-500 mb-10 md:mb-0 px-2">
        <About handleToggle={handleToggle} toggleState={toggleSkills} />
      </div>
      <div className="flex-1 px-2 ">
        {toggleSkills ? <Skills /> : <Projects />}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
      <button
        className="fixed md:top-5 md:left-1/2 md:-translate-x-1/2 bottom-6 right-6 md:bottom-auto md:right-auto bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 sm:px-6 sm:py-3 px-3 py-1 text-sm rounded-full font-medium shadow-lg hover:bg-yellow-500/30 hover:border-yellow-500 transition-all z-50 shadow-stone-950 "
        onClick={() => setIsModalOpen(true)}
      >
        Talk to me
      </button>
    </section>
  );
};
