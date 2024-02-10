import React from 'react'
import ChampetreImage from '../assets/champetre_thumbnail.jpeg';
import Carousel from "react-bootstrap/Carousel";
import Champetre1 from "../assets/champetre1.jpeg";
import Champetre2 from "../assets/champetre2.jpeg";
import Champetre3 from "../assets/champetre3.jpg";
import Champetre4 from "../assets/champetre4.jpeg";
import Champetre5 from "../assets/champetre5.webp";

const Champetre = () => {
  const photos = [Champetre1, Champetre2, Champetre3, Champetre4, Champetre5];
  return (
    <React.Fragment>
      <img src={ChampetreImage} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-8">
              <p className="text-4xl mb-12">L'Amour à la Campagne : Un Mariage Rustique et Romantique</p>
              <p>Le mariage champêtre, empreint de l'atmosphère douce et naturelle de la campagne, évoque une élégance
                rustique et authentique, parfaite pour unir deux âmes amoureuses. Que ce soit au cœur d'une ferme
                pittoresque, d'un moulin enchanteur ou au sein d'une demeure familiale chargée d'histoire, ce thème
                s'harmonise merveilleusement avec les décors champêtres. Imaginez une cérémonie sous une arche fleurie,
                entourée de ballots de paille et de délicates touches florales.</p>
              <br/>
              <p>Dans cet univers champêtre, le bois, la dentelle et la toile de jute se mêlent harmonieusement, tandis
                que les accessoires vintage apportent une touche d'authenticité et de charme. Les robes longues flottant
                légèrement au vent, ornées de délicats motifs de dentelle, évoquent la pureté et la grâce, tandis que
                les couronnes de fleurs apportent une touche de romantisme naturel. Du côté des messieurs, le noeud
                papillon et les bretelles ajoutent une note de sophistication rustique.</p>
              <br/>
              <p>Pour animer cette journée magique, rien de tel qu'un duo musical envoûtant ou un bar à vinyles rétro,
                créant une ambiance chaleureuse et intime. Et imaginez-vous, entourés de vos proches, partageant un
                délicieux dîner en plein air, éclairé par la lueur douce des guirlandes guinguettes. Si l'idée d'un
                mariage champêtre vous enchante mais que vous vous sentez dépassés par l'organisation, laissez notre
                équipe de wedding planners transformer vos rêves en réalité, avec une touche de romance champêtre à
                chaque étape de cette aventure enchantée.</p>
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

export default Champetre
