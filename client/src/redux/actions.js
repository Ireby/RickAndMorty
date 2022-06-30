import axios from "axios";

export function getEpisode() {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:3001/episodes");
  // const response = res.data.map((e) => e.name)
//console.log(res.data)
    return dispatch({ type: "GET_EPI", payload: res.data });
  };
}
export function getChar() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/character");
      //  console.log(res.data);
      return dispatch({ type: "GET_CHAR", payload: res.data });
    } catch (error) {
      console.log( error);
    }
  };
}
export async function createChar(input) {
  try {
    const res = await axios.post("http://localhost:3001/characters", input);
    return res.data;
  } catch (e) {
    console.log("Error " + e);
  }
}
