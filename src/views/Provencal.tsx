import React from 'react'
import ProvencalImage from '../assets/provence_thumbnail.jpeg';
import Carousel from "react-bootstrap/Carousel";
import Provence1 from "../assets/provence1.jpg";
import Provence2 from "../assets/provence2.jpeg";
import Provence3 from "../assets/provence3.webp";
import Provence4 from "../assets/provence4.jpeg";

const Provencal = () => {
  const photos = [Provence1, Provence2, Provence3, Provence4];
  return (
    <React.Fragment>
      <img src={ProvencalImage} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Rêverie Provençale : Un Mariage Sous le Charme du Sud</p>
              <p>Plongez dans l'enchantement d'un mariage où la Provence, terre enchanteresse, se fait le théâtre d'une
                célébration empreinte de romantisme. Imaginez-vous unis dans la douceur des paysages provençaux, entre
                les effluves enivrantes de lavande, les murmures des oliviers séculaires et le chant ensoleillé des
                cigales.</p>
              <br/>
              <p>Sous le ciel azuréen, laissez-vous bercer par la magie de ce lieu où le temps semble suspendu, où
                chaque instant devient une poésie à partager à deux. Confiez-nous le privilège d'orchestrer ce conte de
                fées, où chaque détail sera soigneusement pensé pour sublimer votre amour et émerveiller vos
                convives.</p>
              <br/>
              <p>Des champs de lavande aux oliveraies ancestrales, en passant par les traditions gourmandes de la
                région, votre mariage se parera des plus belles inspirations provençales. Offrez à vos proches une
                expérience sensorielle unique, où les parfums enivrants et les saveurs délicates de cette terre
                ensoleillée viendront enchanter leurs sens.</p>
              <br/>
              <p>Dans cette atmosphère empreinte de tendresse et de magie, laissez-vous emporter par la douce mélodie de
                votre amour, tandis que le soleil couchant illumine vos cœurs de ses derniers rayons. Car en choisissant
                la Provence pour célébrer votre union, vous offrez à votre histoire d'amour un décor d'exception, où
                chaque instant devient un précieux souvenir à chérir pour l'éternité.</p>
            </div>
          </div>
        </div>
        <Carousel className="h-full">
          {photos.map((photo, index) => (
            <Carousel.Item className="h-full" key={index}>
              <img src={photo} className="object-cover w-full h-[500px] lg:h-full lg:max-h-[800px] rounded-xl"/>
            </Carousel.Item>
          ))}
        </Carousel>
      </main>
    </React.Fragment>
  );
};

export default Provencal
