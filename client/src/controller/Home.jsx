import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChar } from "../redux/actions";
import Card from "./Card";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getChar()), [dispatch]);
  const allChar = useSelector((state) => state.characters);

  return (
    <div className="conta">
     

      <div className="cards">
      {allChar?.map((c) => {
       
        return (
     
            <li className="cards_item" key={c.id}>   
              <Card
                key={c.id}
             
                name={c.name}
                image={c.image}
                origin={c.origin}
                status={c.status}
                species={c.species}
                episode={c.episode}
              />
            </li>
    
        );
      })}
      </div>
    </div>
  );
};
export default Home;
