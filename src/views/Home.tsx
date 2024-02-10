import React from 'react'
import BlueWedding from '../assets/mariage_bleu.jpeg';
import Seyna from '../assets/seyna.jpg';
import Footer from '../assets/home_footer.jpg';

const Home = () => {
  return (
    <React.Fragment>
      <img src={BlueWedding} className="w-full max-h-[70vh] object-cover" />
      <main>
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
          <div className="py-6 sm:px-0">
            <div className="rounded-lg text-[#15150A] mb-12">
              <p><b>Azalila</b> est bien plus qu'une simple entreprise d'organisation de mariages.</p>
              <br/>
              <p>Nous sommes des créateurs d'expériences, des architectes de moments inoubliables. Que vous envisagiez
                un mariage traditionnel, ethnique, laïque ou religieux, notre mission est de réaliser vos rêves, quel
                que soit votre budget.</p>
              <br/>
              <p>Chez <b>Azalila</b>, nous croyons que chaque couple mérite une célébration qui lui ressemble, empreinte de son
                identité et de son amour unique. Nous mettons tout en œuvre pour créer des mariages qui vont au-delà des
                attentes, où chaque détail est soigneusement pensé et exécuté.</p>
              <br/>
              <p>Notre équipe dévouée est là pour vous guider à chaque étape du processus, en veillant à ce que votre
                journée spéciale soit parfaitement organisée et mémorable pour toutes les bonnes raisons.</p>
              <br/>
              <p>Choisir <b>Azalila</b>, c'est choisir l'assurance d'une expérience exceptionnelle, d'un service personnalisé
                et d'une attention aux détails inégalée. Laissez-nous transformer votre vision en réalité et créer le
                mariage de vos rêves, où l'amour, la joie et la beauté sont au cœur de chaque instant.</p>
            </div>
          </div>
          <p className="text-4xl mb-24">Notre histoire</p>
          <div className="flex gap-24 mb-24 flex-col lg:flex-row">
            <div className="h-[350px] w-[250px] lg:h-[700px] lg:w-[500px]">
              <img src={Seyna} className="relative inline-block h-full w-full object-cover z-10"/>
              <div className="h-[400px] w-[250px] bottom-[375px] left-[25px] lg:h-[800px] lg:w-[500px] lg:bottom-[750px] lg:left-[50px] inline-block relative bg-[#c6a081]"></div>
            </div>
            <div className="z-20">
              <p>Depuis mes débuts dans le monde des mariages en 2016, mon ambition a toujours été de développer un
                concept qui soit accessible au plus grand nombre tout en étant adaptable à toutes les envies. Je suis
                profondément convaincue que chaque couple mérite de vivre une expérience de mariage à la hauteur de ses
                rêves, quelle que soit sa situation financière ou ses préférences. C'est pourquoi j'ai mis un point
                d'honneur à créer un service qui met l'accent sur la flexibilité, la personnalisation et la
                transparence.</p>
              <br/>
              <p>En développant cette approche, j'ai également cherché à établir des relations de confiance solides avec
                chaque couple que j'ai eu le privilège d'accompagner. Pour moi, il est essentiel que mes clients se
                sentent écoutés, compris et soutenus à chaque étape de leur parcours vers le grand jour. C'est cette
                relation de confiance qui me permet de comprendre pleinement leurs besoins, leurs désirs et leurs
                attentes, et de travailler en étroite collaboration avec eux pour réaliser leur vision de mariage
                idéal.</p>
              <br/>
              <p>Ainsi, en optant pour mes services, les couples peuvent non seulement bénéficier d'une expertise
                professionnelle et d'un savoir-faire exceptionnel, mais aussi de la tranquillité d'esprit de savoir
                qu'ils sont entre de bonnes mains.</p>
              <br/>
              <p>Ensemble, avec mes équipes formidables, nous sommes comme une brigade de super-héros, prêts à réaliser
                tous vos souhaits les plus fous. Qu'il s'agisse d'un mariage élégant et intemporel ou d'une célébration
                pleine de fantaisie, nous sommes là pour faire en sorte que votre jour J soit aussi magique que vous
                l'aviez imaginé.</p>
              <br/>
              <p>Alors, laissez-nous être votre guide dans ce voyage extraordinaire qu'est l'organisation de votre
                mariage. Avec mes équipes, rien n'est impossible, et chaque moment sera rempli d'amour, de rires et de
                petits miracles.</p>
              <br/>
              <p className="text-end font-bold">- Seyna Balzan</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Footer} className="w-full max-h-[75vh] object-cover"/>
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#00000044]">
            <p className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight">N'attendez plus, lancez vous !</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home
