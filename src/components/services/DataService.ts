import axios from "axios";
import { IAccount } from "../../types";

const useDataService = () => {

  const fetchData = async (path: string) => {
    try {
      const {data , status} = await axios.get<IAccount[]>(path);
      if (status === 200) {
        return data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    fetchData
  }
}

export default useDataService;