import React from 'react'
import CoolImage from '../assets/cool_thumbnail.jpeg';
import Carousel from "react-bootstrap/Carousel";
import Cool1 from "../assets/cool1.jpg";
import Cool2 from "../assets/cool2.jpg";

const Cool = () => {
  const photos = [Cool1, Cool2];
  return (
    <React.Fragment>
      <img src={CoolImage} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Un Mariage Cool & Décontracté: Oubliez le Stress, Célébrons avec Fun!</p>
              <p>Dans cette célébration où le seul code vestimentaire est "soyez-vous-même", imaginez-vous échanger vos
                vœux dans une ambiance décontractée, entourés de vos proches, avec pour seul mot d'ordre : s'amuser !
                Pas besoin de thème précis, juste l'envie de partager des fous rires et des moments inoubliables.</p>
              <br/>
              <p>Dans cet esprit cool et fun, les tenues sont à l'image de chacun : des costumes élégants aux jeans et
                t-shirts, tout est permis tant que vous vous sentez bien ! Les chaussures de ville rivalisent avec les
                baskets, et les robes longues flirtent avec les shorts. Après tout, le plus important, c'est d'être à
                l'aise pour danser jusqu'au bout de la nuit !</p>
              <br/>
              <p>Pour les animations, laissez libre cours à votre imagination : jeux de plage, karaoké déjanté, ou
                encore concours de danse loufoque... Tout est permis pour mettre l'ambiance et faire sourire vos
                invités. Et pourquoi pas organiser un photobooth délirant pour capturer les moments les plus hilarants
                de la journée ?</p>
              <br/>
              <p>Côté déco, misez sur l'originalité et la créativité : des guirlandes de ballons aux bougies parfumées
                en passant par les accessoires de photobooth les plus farfelus, tout est bon pour apporter une touche de
                fun à votre journée. Et n'oubliez pas les petits détails qui font toute la différence : des cocktails
                colorés aux cupcakes personnalisés, chaque détail compte pour créer une ambiance festive et
                décontractée.</p>
              <br/>
              <p>Si l'idée d'un mariage où le fun est roi vous séduit, notre équipe de wedding planners est là pour vous
                accompagner dans l'organisation de cette journée mémorable, où la joie et la bonne humeur sont les
                véritables stars de la fête !</p>
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

export default Cool
