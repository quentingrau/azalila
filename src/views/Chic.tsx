import React from 'react'
import ChicImage from '../assets/chic_thumbnail.png';
import Carousel from "react-bootstrap/Carousel";
import Chic1 from "../assets/chic1.jpeg";
import Chic2 from "../assets/chic2.jpeg";
import Chic3 from "../assets/chic3.jpeg";
import Chic4 from "../assets/chic4.jpeg";
import Chic5 from "../assets/chic5.jpeg";
import Chic6 from "../assets/chic6.jpeg";

const Chic = () => {
  const photos = [Chic1, Chic2, Chic3, Chic4, Chic5, Chic6];
  return (
    <React.Fragment>
      <img src={ChicImage} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">Le Raffinement du Chic et Distingué : Une Journée d'Élégance Sans
                Pareille</p>
              <br/>
              <p>Dans l'univers élégant des saisons, le chic et distingué se dévoile tel un tableau de maître, offrant
                une toile de fond somptueuse pour échanger des vœux éternels. C'est une saison où le style et la classe
                règnent en maître, invitant les cœurs épris à se fondre dans une ambiance de luxe et de
                sophistication.</p>
              <br/>
              <p>Se marier dans le chic et distingué, c'est plonger dans un monde de raffinement et de distinction. Les
                options sont infinies, les détails exquis. Des demeures élégantes aux salles de réception prestigieuses,
                chaque élément est choisi avec soin pour créer une atmosphère d'une élégance inégalée.</p>
              <br/>
              <p>Les plaisirs gastronomiques sont à l'honneur, offrant des mets sophistiqués et des saveurs raffinées
                qui raviront les palais les plus exigeants. Des accords subtils et des présentations impeccables
                évoquent le luxe et le bon goût, créant une expérience culinaire mémorable pour tous les convives.</p>
              <br/>
              <p>Dans cette ambiance de chic et de distinction, la décoration est un mélange parfait de luxe et de
                finesse. Des touches de velours et des détails dorés ajoutent une touche de glamour à chaque aspect,
                créant une esthétique élégante et sophistiquée qui impressionnera à coup sûr.</p>
              <br/>
              <p>La mariée incarne l'élégance absolue, dans des robes aux lignes épurées et aux tissus luxueux,
                reflétant l'esprit du chic et du distingué avec grâce et splendeur.</p>
              <br/>
              <p>Pour ceux qui ont choisi le chic et le distingué pour leur grand jour, notre équipe de wedding planners
                est là pour transformer leurs rêves en réalité, créant une journée d'une élégance incomparable, digne
                des plus grands événements mondains.</p>
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

export default Chic
