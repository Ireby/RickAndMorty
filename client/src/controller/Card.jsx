import "./Card.css";

const card = ({ name, image, origin, species, episode, status }) => {
  let ep = episode;

  return (
    <div className="card">
      <div className="card_content">
        {" "}
        <h1 className="card_title">{name}</h1>
        <img className="card_image" src={image} alt="toon" />
        <h2>Origin:</h2>
        <p className="card_text">{origin}</p>
        <h2>Specie: </h2>
        <p className="card_text">{species}</p>
        <h2>Status:</h2>
        <p className="card_text"> {status}</p>
        {/* <button className="btn" onClick={(e) => eHandle(e)}>
          See Episodes
        </button> */}
        <h2>{ep?'Episodes:':''}</h2>
        <div className="card_text">
          {" "}
          {ep?.map((e) => {
          return  <p key={e}>{e}</p>
          })}
        </div>
      </div>
    </div>
  );
};
export default card;
