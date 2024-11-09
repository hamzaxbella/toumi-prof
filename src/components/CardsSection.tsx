import Card from "./Card";
import { profile } from "../../public";
import { fpt } from "../../public";
function CardSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10">
      <Card
        imageUrl={profile}
        name="ISSAM TOUMI"
        description={`Issam TOUMI est maître de conférences qualifié en Sciences de l'Information et de la Communication (SIC) à la Faculté Polydisciplinaire de Taroudannt, Université Ibn Zohr d'Agadir. Il est membre du "Laboratoire Interdisciplinaire des Langues et des Dynamiques Artistiques et Sociales" (LILDAS). Auteur de plusieurs publications (chapitres d'ouvrages et articles) au niveau national et international, Issam TOUMI mène des recherches sur les médias et leurs usages dans la société, l'espace public et la communication, l'écrit et les mutations dans la société.`}
      />
      <Card
        imageUrl={fpt}
        name="FPT"
        description="La Faculté Polydisciplinaire de Taroudannt (FPT), ouverte en 2010, constitue l’un des jalons universitaires du grand Sud marocain à travers lesquels l’Université Ibn Zohr aspire atteindre deux objectifs principaux : le rapprochement de la formation universitaire aux jeunes des ces régions, l’intégration de l’université dans son contexte à travers des formations professionnelles ancrées dans le milieu socioéconomique. Une soixantaine d’enseignants chercheurs et 16 cadres administratifs et techniques contribuent au développement de cette jeune Faculté en étroite collaboration avec les différentes composantes de l’Université. La FPT propose plusieurs formations en cycle licence et master, couvrant les champs disciplinaires de Sciences et Technique, d'Économie et Gestion et de Lettres Sciences Humaines et Sociales. Durant les deux premières années de son existence, la Faculté a connu une vie associative et culturelle très dynamique marquée par l’organisation de nombreuses manifestations scientifiques et culturelles dont bon nombre d’entre elles sont à l’initiative des étudiants encadrés par l’équipe professorale et administrative dévouée à la cause de la FPT."
      />
    </section>
  );
}
export default CardSection;
