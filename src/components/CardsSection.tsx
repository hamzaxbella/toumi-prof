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
        description="La Faculté Polydisciplinaire de Taroudant, au Maroc, propose divers programmes dans plusieurs domaines d’études."
      />
    </section>
  );
}
export default CardSection;
