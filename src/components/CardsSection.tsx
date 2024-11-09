import Card from "./Card";
import { profile } from "../../public";
import {fpt} from '../../public'
function CardSection() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10">
        <Card
          imageUrl={profile}
          name="ISSAM TOUMI"
          description="une petite description de prof"
        />
        <Card
          imageUrl={fpt}
          name="FPT"
          description="La Faculté Polydisciplinaire de Taroudant, au Maroc, propose divers programmes dans plusieurs domaines d’études."
        />
      </section>
    );
  }
export default CardSection  