import React from 'react'
import AutomneImage from '../assets/automne_thumbnail.jpeg';
import Carousel from "react-bootstrap/Carousel";
import Automne1 from "../assets/automne1.jpeg";
import Automne2 from "../assets/automne2.jpeg";
import Automne4 from "../assets/automne4.jpeg";

const Automne = () => {
  const photos = [Automne1, Automne2, Automne4];
  return (
    <React.Fragment>
      <img src={AutomneImage} className="w-full max-h-[70vh] object-cover" />
      <main className="font-serif">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">La Chaleur Dorée de l'Automne : Un mariage aux couleurs chaudes</p>
              <p>Dans le ballet enchanteur des saisons, l'automne émerge tel un conte féerique, offrant une toile de
                fond idyllique pour échanger ses vœux éternels. C'est une saison de magie où le charme ensorcelant de la
                nature se pare de nuances flamboyantes, invitant les cœurs amoureux à se perdre dans ses méandres
                dorés.</p>
              <br/>
              <p>Se marier en automne, c'est s'immerger dans un univers empreint de romantisme et de mystère. Les choix
                sont vastes, les possibilités infinies. Les vieux corps de ferme et les domaines boisés se transforment
                en scènes ensorcelées, tandis que les feuilles d'or tissent un tapis de bienvenue, accueillant les
                invités dans un écrin de féerie.</p>
              <br/>
              <p>Les saveurs automnales, riches et réconfortantes, viennent enchanter les papilles des convives,
                évoquant les souvenirs d'antan et les plaisirs simples de la vie. Les festins se parent de soupes
                veloutées, de marrons chauds et de volailles rôties, évoquant les banquets d'antan, tandis que les jus
                de pomme traditionnels réveillent les souvenirs d'enfance.</p>
              <br/>
              <p>Dans cette symphonie automnale, la décoration se pare de mille éclats, baignée par la lueur douce des
                bougies et des lanternes. Les feuilles mortes et les rondins de bois dessinent des tableaux éphémères,
                capturant l'essence même de cette saison enchanteresse.</p>
              <br/>
              <p>Quant à la mariée, elle se pare de robes aux manches longues, de boléros délicats et de bottines
                élégantes, capturant l'esprit même de l'automne dans sa grâce et sa splendeur.</p>
              <br/>
              <p>Pour ceux qui ont choisi l'automne comme témoin de leur amour, notre équipe de wedding planners est là
                pour transformer chaque rêve en réalité, pour créer une journée magique et inoubliable, digne des plus
                beaux contes de fées.</p>
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

export default Automne
