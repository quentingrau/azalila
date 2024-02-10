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
          <div className="shadow transition duration-300 transform scale-100 hover:scale-[1.01]">
            <img src={Online} className="w-full object-cover" />
            <div className="flex flex-col items-center p-12 gap-6">
              <p className="text-2xl">Formule E-Wedding</p>
              <div>
                <p><strong>LE E-WEDDING ÇA TE PARLE ? </strong></p>
                <p>Vous souhaitez organiser votre mariage en autonomie mais avec une petite pincée d'aide et
                  d'astuces...</p>
                <p>Vous avez un petit budget mais avez envie d'être guidé dans ce chemin important vers l'un des plus
                  beaux jours de votre vie...</p>
                <p>Ou juste flemme d'un wedding planner... </p>
                <br/>
                <p>Bref, cette<span> </span><strong>formule E-Wedding est faite pour vous</strong><span> </span>! </p>
                <br/>
                <p>Notre application est comme<span> </span><strong>votre bonne fée</strong><span> </span><strong>tout
                  au long des préparatifs jusqu'au jour J !</strong></p>
                <br/>
                <p>Avec cette application, on te propose : </p>
                <p>🪻 Des<span> </span><strong>conseils personnalisés</strong><span> </span>via un chat où tu peux poser
                  toutes tes questions ;</p>
                <p>🪻 Un<span> </span><strong>calendrier de suivi<span> </span></strong>de ton mariage personnalisable
                  pour planifier chaque étape, annoter, en faire ton vrai pote le long de ton organisation ;</p>
                <p>🪻 Un<span> </span><strong>suivi du budget<span> </span></strong>avec ajout des dépenses, prévisions…
                  pour<span> </span><strong>optimiser au max ton budget</strong><span> </span>;</p>
                <p><strong>🪻 Gestion des projets</strong> : liste invités, playlist, plan de table… pour s’y retrouver
                  un peu ;</p>
                <p>🪻 Accès à toutes nos ressources (articles, revues…) sur les thèmes du mariage et les tendances
                  actuelles rangées par thématiques (champêtre, chic, fleurs, wedding cake…). Elles sont toutes écrites
                  par nos wedding planners et suivent les tendances du moment et les tendances cachées ;</p>
                <p><strong>🪻 Faire partie de la communauté AZALILA</strong><span> </span>ce qui veut dire pouvoir
                  échanger avec tous les abonnés et crois moi c'est un vrai nid d'idées cette communauté !</p>
                <br/>
                <p>Si jamais ça t'intéresse, on te propose<span> </span><strong>plusieurs
                  formules</strong><span> </span>pour s'adapter au maximum à tes envies et ton timing : </p>
                <p>🪻 <strong>Formule 3 mois</strong><span> </span>: 150€ (50€ par mois) - <em>Payable par mois ou
                  comptant</em></p>
                <p><strong>🪻 Formule 6 mois</strong> : 285 € (47,5€ par mois) - <em>Payable par mois ou comptant</em>
                </p>
                <p><strong>🪻 Formule 12 mois</strong> : 515€ (42,9€ par mois) - <em>Payable par mois ou comptant</em>
                </p>
                <p>🪻 Option de parrainage : Un RDV (téléphonique ou en présentiel) offert pour échanger avec un Wedding
                  Planner ou bons de réduction auprès de partenaires. </p>
                <p>Alors<span> </span><strong>rejoins vite la communauté AZALILA</strong><span> </span>pour la
                  préparation de ton mariage ! </p>
              </div>
            </div>
          </div>
          <div className="shadow transition duration-300 transform scale-100 hover:scale-[1.01]">
            <img src={WP} className="w-full object-cover"/>
            <div className="flex flex-col items-center p-12 gap-6">
              <p className="text-2xl">Formule Wedding Planner</p>
              <div>
                <p><strong>VOUS RÊVEZ D'UN MARIAGE À VOTRE IMAGE ?</strong></p>
                <p>Vous avez mille idées en tête, des aspirations, mais vous vous demandez par où commencer. Qui
                  contacter ? Comment orchestrer chaque détail de votre grand jour ? Comment être sûr de ne rien oublier
                  ? Vous aspirez à vivre cette journée en toute tranquillité, à vous laisser porter sans stress, afin de
                  savourer chaque instant de cette occasion magique ? Vous avez des craintes concernant votre budget et
                  la possibilité d'avoir un wedding planner pour vous accompagner ? </p>
                <p><strong>Chez AZALILA</strong>, nous sommes là pour vous accompagner et réaliser vos rêves ! <strong>On
                  dit bien VOS rêves</strong> car nous avons à coeur de réaliser le mariage de vos souhait, qu'il soit
                  grand, décontracté, atypique et que vous recherchiez un soutien complet, personnalité ou à la carte,
                  notre équipe met à votre disposition son savoir-faire, sa passion et son réseau pour faire de votre
                  mariage un moment inoubliable.</p>
                <p><strong>Nos wedding planners sont à vos côtés à chaque étape</strong>, pour que vous puissiez
                  profiter pleinement des moments clés de votre vie.</p>
                <p>Nous proposons une formule à la carte pour nous adapter à toutes les envies!</p>
                <p className="text-lg my-5"><strong>Formule de base : Tarif de 1 700€</strong></p>
                <p>🌺   <strong>RDV réguliers hybrides</strong> avec votre Wedding Planner ;</p>
                <p>🌺   Contact <strong>WhatsApp et Appels Illimités </strong>avec votre Wedding Planner ;</p>
                <p>🌺   Possibilité de fixer un <strong>RDV une fois par mois</strong> jusqu’au mariage ;</p>
                <p><em>(Les RDV sont non obligatoires donc à la demande du client en fonction des envies, du projet.
                  Ainsi il n’est pas obligatoire d’avoir un RDV une fois par mois cela peut être moins si souhaité)</em>
                </p>
                <p>🌺   <strong>Accès à notre application</strong> pour gérer votre calendrier et communiquer avec votre WP
                  7j/7 ;</p>
                <p>🌺   Mise en relation avec nos <strong>experts internes</strong> (photographe, décorateur, WP,
                  Officiants pour réaliser la cérémonie ou aider un proche des marié(e)s à la concevoir.)</p>
                <p>🌺   Mise en relation avec les différents <strong>prestataires externes avec tarification
                  réduite</strong> (Traiteur, DJ, Fleuriste, Service Enfant, Animation...).</p>
                <p>Ensuite, nous vous proposons des<strong> prestations en plus à la carte</strong> selon vos envies:
                </p>
                <p>🌺   Vous souhaitez faire votre propre <strong>décoration</strong>, pas de problème nous proposons
                  des <strong>conseils et ateliers personnalisés</strong> pour aider dans la réalisation de la
                  décoration (peuvent se réaliser pendant les RDV une fois par mois inclus). Si vous êtes intéressés par
                  les ateliers, nous proposons une formule à partir de 500€ pour des ateliers plus complets de
                  méthodologie pour du DIY ;</p>
                <p>🌺   Si vous souhaitez que nous réalisions votre <strong>décoration</strong>, nous proposons une
                  formule <em>à partir de 500€</em> (évolutive en fonction des demandes) ;</p>
                <p>🌺   Vous ne souhaitez pas mettre en place la décoration, nous pouvons nous occuper, <strong>de
                  l’installation à la désinstallation</strong>, <em>à partir de 600€</em> (évolutive en fonction de la
                  décoration)</p>
                <p>Nous proposons d’autres suppléments possibles en fonction des envies des futurs mariés :</p>
                <p>🌺   Possibilité d’utiliser un <strong>logiciel 3D </strong>: <em>3D Event Designer,</em> pour
                  visualiser le mariage en réel - <em>à partir de 1000€</em></p>
                <p>🌺   <strong>Organisation de l’animation</strong> de votre journée et soirée personnalisée
                  (Présentations, jeux, surprises, chansons, activités...) - <em>à partir de 1200€</em></p>
                <p>🌺   <strong>Coordination</strong> sur place le jour J - <em>à partir de 1000€</em></p>
                <p>🌺   <strong>Pack Souvenirs</strong> : Photo Booth, Caméra, Capsule temporelle... - <em>à partir de
                  250€</em></p>
                <p>Alors <strong>contacte-nous</strong> <strong>pour établir ton premier RDV 100% gratuit</strong>, parle
                  nous de ton projet et laisse nous te faire une proposition. </p>
                <p>C'est seulement si tu es convaincu par notre proposition qu'on lance les préparatifs et le paiement
                  ! </p>
                <p><strong>Tente ta chance avec nous, tu, vous ne serez pas déçus !</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Formules
