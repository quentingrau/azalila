import React from 'react'
import Printemps from '../assets/printemps_thumbnail.webp';
import Printemps1 from '../assets/printemps1.jpeg';
import Printemps2 from '../assets/printemps2.jpeg';
import Printemps3 from '../assets/printemps3.jpeg';
import Printemps4 from '../assets/printemps4.jpeg';
import Printemps5 from '../assets/printemps5.jpeg';
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const photos = [Printemps4, Printemps5, Printemps1, Printemps2, Printemps3];
  return (
    <React.Fragment>
      <img src={Printemps} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Dans l'Éveil du Printemps: Un Mariage Sous les Doux Parfums et les Couleurs
                Chatoyantes</p>
              <p>Le printemps, saison des renouveaux, déploie son manteau de fleurs et de couleurs, créant un décor
                enchanteur pour célébrer l'amour naissant. Imaginez-vous, entourés de tendres pétales et de douces
                brises printanières, échangeant vos vœux dans un jardin parfumé, où les fleurs éclosent dans une
                symphonie de couleurs chatoyantes.</p>
              <br/>
              <p>Dans cet univers printanier, les senteurs délicates des fleurs en fleurs viennent enchanter les sens,
                évoquant l'éveil de la nature et la promesse de jours meilleurs. Les nuances pastel des décorations et
                des tenues rappellent la fraîcheur et la pureté de cette saison renouvelée, tandis que les couronnes de
                fleurs apportent une touche de romantisme et d'élégance.</p>
              <br/>
              <p>Du côté des animations, rien de tel qu'un quatuor de musiciens pour créer une ambiance enchanteresse,
                où les notes douces et mélodieuses s'entremêlent harmonieusement avec le chant des oiseaux. Et pour
                prolonger la magie du jour, pourquoi ne pas opter pour un dîner en plein air, illuminé par la lueur
                douce des lanternes et des guirlandes lumineuses ?</p>
              <br/>
              <p>Si l'idée d'un mariage printanier vous séduit, mais que vous cherchez de l'aide pour concrétiser vos
                rêves, notre équipe de wedding planners est là pour transformer chaque instant en un moment magique et
                inoubliable, où la beauté de la nature s'unit à la magie de l'amour naissant.</p>
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

export default Home
