import React from 'react'
import Champetre from '../assets/champetre_thumbnail.jpeg';
import Chic from '../assets/chic_thumbnail.png';
import Provencal from '../assets/provence_thumbnail.jpeg';
import Automne from '../assets/automne_thumbnail.jpeg';
import Hiver from '../assets/hiver_thumbnail.jpeg';
import Printemps from '../assets/printemps_thumbnail.webp';
import Ete from '../assets/ete_thumbnail.jpeg';
import Cool from '../assets/cool_thumbnail.jpeg';
import MeilingFrancois from '../assets/meiling_francois.jpeg';
import SachaPierre from '../assets/sacha_pierre.jpg';
import DelphineAhmed from '../assets/delphine_ahmed.jpg';
import SophieOlivier from '../assets/sophie_olivier.jpeg';
import SarahEmilie from '../assets/sarah_emilie.webp';
import MariaJuan from '../assets/maria_juan.jpg';
import {Link} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';

const Realisations = () => {
  const seasons = [
    {
      to: '/printemps',
      image: Printemps,
      title: 'Printemps'
    },
    {
      to: '/ete',
      image: Ete,
      title: 'Été'
    },
    {
      to: '/automne',
      image: Automne,
      title: 'Automne'
    },
    {
      to: '/hiver',
      image: Hiver,
      title: 'Hiver'
    },
    {
      to: '/champetre',
      image: Champetre,
      title: 'Champêtre'
    },
    {
      to: '/chic',
      image: Chic,
      title: 'Chic'
    },
    {
      to: '/provencal',
      image: Provencal,
      title: 'Provençal'
    },
    {
      to: '/cool',
      image: Cool,
      title: 'À la cool'
    }]
  const weddings = [{
    caption: 'Notre mariage avec Azalila a été une expérience extraordinaire ! Seyna et son équipe ont su capturer l\'essence même de notre culture et de nos traditions, tout en apportant une touche de modernité et d\'élégance à notre journée spéciale. Notre wedding planner était notre guide bienveillant à travers chaque étape, et grâce à elle, notre mariage était parfaitement orchestré du début à la fin. Merci Azalila d\'avoir rendu notre rêve de mariage une réalité !',
    image: MeilingFrancois,
    title: 'Mei Ling et François'
  }, {
    caption: 'Travailler avec Azalila a été une expérience inoubliable pour nous. Seyna et son équipe ont su naviguer avec grâce et sensibilité à travers les défis spécifiques que nous avons rencontrés en planifiant notre mariage à l\'église. Leur soutien et leur compréhension ont été précieux pour nous, et notre wedding planner était notre véritable ange gardien tout au long du processus. Merci Azalila pour avoir rendu notre journée de mariage aussi spéciale et significative !',
    image: SachaPierre,
    title: 'Sacha et Pierre'
  }, {
    caption: 'Notre mariage avec Azalila a été un véritable rêve devenu réalité ! Seyna et son équipe ont su capturer l\'essence de notre culture et de nos traditions, en créant une journée qui reflétait vraiment qui nous sommes en tant que couple. Notre wedding planner était notre étoile du Nord, nous guidant avec compétence et dévouement à travers chaque étape du processus. Merci Azalila d\'avoir rendu notre mariage aussi authentique et mémorable !',
    image: MariaJuan,
    title: 'Maria et Juan'
  }, {
    caption: 'Notre mariage avec Azalila a été une expérience incroyablement émouvante pour nous deux. Seyna et son équipe ont su capturer la beauté et la simplicité de notre amour, en créant une journée qui était à la fois intime et significative. Notre wedding planner était notre pilier de force, nous soutenant avec gentillesse et compassion à chaque étape du chemin. Merci Azalila d\'avoir fait de notre mariage un moment inoubliable !',
    image: SarahEmilie,
    title: 'Sarah et Emilie'
  }, {
    caption: 'Notre mariage avec Azalila a été une véritable aventure depuis le début jusqu\'à la fin ! Seyna et son équipe ont su comprendre nos désirs les plus fous et les ont transformés en réalité d\'une manière qui nous a vraiment époustouflés. Notre wedding planner était notre source d\'inspiration, nous guidant avec humour et enthousiasme à travers chaque étape du processus. Merci Azalila pour avoir fait de notre mariage une expérience unique et inoubliable !',
    image: SophieOlivier,
    title: 'Sophie et Olivier'
  }, {
    caption: 'Notre mariage avec Azalila a été une expérience vraiment exceptionnelle pour nous. Seyna et son équipe ont su comprendre et respecter nos traditions culturelles et religieuses, en créant une journée qui était à la fois authentique et significative. Notre wedding planner était notre alliée précieuse, nous accompagnant avec gentillesse et empathie à chaque étape du processus. Merci Azalila d\'avoir rendu notre mariage aussi magnifique et mémorable !',
    image: DelphineAhmed,
    title: 'Delphine et Ahmed'
  }];

  return (
    <React.Fragment>
      <main>
        <div className="max-w-[85%] mx-auto py-6 sm:px-6 lg:px-8 font-serif">
          <div className="px-4 py-6 sm:px-0">
            <p className="text-4xl mb-12">Thèmes & Saisons</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
              {seasons.map((wedding, index) => (
                <Link key={index} to={wedding.to}>
                  <div key={index} className="w-full max-h-80 h-full group relative overflow-hidden aspect-w-1 aspect-h-1">
                    <div className="overflow-hidden w-full h-full">
                      <img
                        src={wedding.image}
                        alt={`Wedding ${index + 1}`}
                        className="object-cover object-center w-full h-full transition duration-300 transform scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div
                      className="absolute inset-0 hidden items-center justify-center bg-[#00000044] group-hover:flex transition-opacity">
                      <p className="text-white text-lg font-bold">{wedding.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-4xl mb-12">Ils nous ont fait confiance...</p>
            <Carousel className="h-full">
              {weddings.map((wedding, index) => (
                <Carousel.Item className="h-full" key={index}>
                  <img src={wedding.image} className="object-cover w-full h-[500px] lg:h-full lg:max-h-[800px] rounded-xl"/>
                  <Carousel.Caption className="bg-[#00000088] rounded-xl">
                    <h3>{wedding.title}</h3>
                    <p className="text-sm">{wedding.caption}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Realisations
