import { useParams, Navigate} from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const {heroeId} = useParams();
  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to="/" />;
  }else{
    return (
      <div>
          <h1>HeroScreen</h1>
          <hr/>
          <h2>{hero.superhero}</h2>
      </div>
    )
  }
}
