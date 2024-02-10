import React from 'react'
import {Button} from "react-bootstrap";
import FormulesCover from '../assets/formules_cover.jpg';
import WP from '../assets/wp.jpeg';
import Online from '../assets/online.jpeg';

const Formules = () => {
  return (
    <React.Fragment>
      <main className="font-serif">
        <div className="max-w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <p className="text-4xl">Nos formules</p>
          </div>
        </div>
        <img src={FormulesCover} className="w-full max-h-[70vh] object-cover"/>
        <div className="grid grid-flow-row lg:grid-flow-col justify-center gap-20 p-6 xl:p-12 h-full">
          <div className="shadow">
            <img src={Online} className="w-full object-cover" />
            <div className="flex flex-col items-center p-12 gap-6">
              <p className="text-2xl">Formule E-Wedding</p>
              <p className="md:text-lg">Formule E-Wedding</p>
            </div>
          </div>
          <div className="shadow">
            <img src={WP} className="w-full object-cover" />
            <div className="flex flex-col items-center p-12 gap-6">
              <p className="text-2xl">Formule Wedding Planner</p>
              <p className="md:text-lg">Formule Wedding Planner</p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Formules
