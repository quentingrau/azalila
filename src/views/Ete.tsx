import React from 'react'
import EteImage from '../assets/ete_thumbnail.jpeg';
import Ete1 from '../assets/ete1.jpeg';
import Ete2 from '../assets/ete2.jpg';
import Ete3 from '../assets/ete3.jpeg';
import Carousel from "react-bootstrap/Carousel";

const Ete = () => {
  const photos = [Ete2, Ete3, Ete1];
  return (
    <React.Fragment>
      <img src={EteImage} className="w-full max-h-[70vh] object-cover" />
      <main className="font-serif">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Dans la Lumière de l'Été: Un Mariage Sous le Charme Ensoleillé</p>
              <p>Dans le doux murmure de l'été, l'amour s'épanouit tel un jardin en fleurs, offrant un cadre idyllique
                pour sceller votre union. Le mariage estival évoque une atmosphère enchanteresse, baignée de la chaleur
                du soleil et de la douce brise estivale. Que ce soit au bord d'une plage dorée, dans un jardin luxuriant
                ou au sein d'une villa méditerranéenne, les possibilités sont infinies pour créer une journée
                inoubliable.</p>
              <br/>
              <p>Imaginez-vous échanger vos vœux sous un ciel azur, entourés de la verdure luxuriante et des couleurs
                éclatantes de l'été. Les pieds nus dans le sable chaud, ou bien dansant sous les étoiles, chaque instant
                est empreint de magie et de romance. Les tables décorées de fleurs fraîches et de bougies scintillantes
                captent l'essence même de cette saison enchanteresse, tandis que les guirlandes lumineuses ajoutent une
                touche de féerie à la soirée.</p>
              <br/>
              <p>Du côté des tenues, la légèreté et l'élégance sont de mise. Les robes flottantes et les costumes légers
                capturent la grâce et la délicatesse de l'été, tandis que les accessoires floraux apportent une touche
                de fraîcheur et de romantisme. Pour divertir vos invités, rien de tel qu'une animation en plein air,
                comme des jeux de jardin ou une piste de danse sous les étoiles.</p>
              <br/>
              <p>Si vous rêvez d'un mariage estival mais que l'organisation vous semble fastidieuse, laissez notre
                équipe de wedding planners prendre en charge chaque détail, transformant votre journée en un conte de
                fées estival dont vous vous souviendrez pour toujours.</p>
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

export default Ete
