import React from 'react'
import HiverImage from '../assets/hiver_thumbnail.jpeg';
import Carousel from "react-bootstrap/Carousel";
import Hiver1 from "../assets/hiver1.jpeg";
import Hiver2 from "../assets/hiver2.jpeg";

const Hiver = () => {
  const photos = [Hiver1, Hiver2];
  return (
    <React.Fragment>
      <img src={HiverImage} className="w-full max-h-[70vh] object-cover" />
      <main className="font-serif">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Dans la Magie de l'Hiver: Un Mariage sous les Blanches Couleurs et les
                Éclats de Glace</p>
              <p>L'hiver, saison enneigée et scintillante, offre un décor féérique pour célébrer l'amour éternel.
                Imaginez-vous, entourés de paysages enneigés et de flocons étincelants, échangeant vos vœux dans une
                atmosphère empreinte de magie et de romance.</p>
              <br/>
              <p>Dans ce monde hivernal, la pureté des flocons de neige et la luminosité des éclats de glace créent une
                toile de fond spectaculaire pour votre journée spéciale. Les nuances de blanc, argent et bleu glacial
                rappellent la beauté immaculée de cette saison enchantée, tandis que les touches d'or apportent une
                touche de chaleur et de glamour.</p>
              <br/>
              <p>Pour une touche de fun et d'aventure, pourquoi ne pas opter pour un mariage sur des skis ? Glissez sur
                les pistes enneigées tout en échangeant vos vœux, créant ainsi des souvenirs inoubliables et des moments
                de pur bonheur.</p>
              <br/>
              <p>Les animations hivernales ajoutent une touche de féérie à votre mariage, avec des patinoires de glace,
                des feux de joie scintillants et des chocolats chauds réconfortants. Et pour prolonger la magie de la
                soirée, quoi de plus romantique qu'un dîner aux chandelles, illuminé par la lueur douce des bougies et
                des lanternes ?</p>
              <br/>
              <p>Si l'idée d'un mariage hivernal vous enchante, mais que vous avez besoin d'aide pour réaliser votre
                vision, notre équipe de wedding planners est là pour transformer chaque instant en un conte de fées
                hivernal, où la beauté de la nature enneigée s'unit à la chaleur de l'amour éternel.</p>
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

export default Hiver
