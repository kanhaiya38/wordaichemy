import axios from "axios";
import { ResultInterface, SearchInterface } from "../types";

const fakeRes: ResultInterface[] = [
  { id: 1, word: "drowned" },
  { id: 2, word: "submerged" },
  { id: 3, word: "washed" },
  { id: 4, word: "drown" },
  { id: 5, word: "flood" },
];

const getResults = async (
  search: SearchInterface
): Promise<ResultInterface[]> => {
  try {
    console.log(search);
    // const host = "http://192.168.43.56:5000";
    // const host = "http://192.168.73.70:5000";
    const host = "http://localhost:5000";
    const get_res = await axios.get(host);
    console.log(get_res.data);
    const res = await axios.post(`${host}/api/predict`, {
      query: search.query,
    });
    console.log(res.data);
    return res.data.results;
  } catch (error) {
    console.log(error);
    return [];
    // return fakeRes;
  }
};

export { getResults };
