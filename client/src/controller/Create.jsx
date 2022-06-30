import "./Create.css";
import { createChar, getEpisode } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Create = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getEpisode()), [dispatch]);
  const episode = useSelector((state) => state.episode);

  const [input, setInput] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
    episode: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    setInput({
      ...input,
      episode: [...input.episode, e.target.value],
    });
  };
 const handleDelete=(episode)=>{
    setInput({
        ...input,
        episode: input.episode.filter((e) => e !== episode)
    })}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.origin &&
      input.species &&
      input.image &&
      input.episode
    ) {
      e.preventDefault();
      dispatch(createChar(input));
      setInput({
        name: "",
        origin: "",
        species: "",
        image: "",
        episode: [],
      });
      alert("Sucess!");
    }else{
     alert('error') 
    }
    
  };
  return (
    <div className="conta">
      <h1>Create Character</h1>

      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label>
                <h1>Name</h1>
              </label>
            </div>
            <br />
            <div className="col-75">
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder="Richard Hunks"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Origin</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="origin"
                placeholder="Pluton.."
                value={input.origin}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Species</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="species"
                placeholder="Alien.."
                value={input.species}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="image"
                placeholder="url.."
                value={input.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">
                <h1>Episode</h1>
              </label>
            </div>
            <div className="col-75">
              <select name="episodes" onChange={(e) => handleSelect(e)}>
                <option>episodes</option>
                {episode.map((e) => {
                  return <option key={e.id}>{e.name}</option>;
                })}
              </select>
            </div>
          </div>
          {input.episode?.map((episode) => (
                            <div key={episode}>
                                <button onClick={() => handleDelete(episode)}>
                                    x
                                </button>
                                <p>{episode}</p>
                            </div>
                        ))}
          <div className="row">
            <div className="col-25">
              <label>Subject</label>
            </div>
          </div>
          <br />
          <div className="row">
            <input
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
