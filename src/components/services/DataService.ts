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

  const deleteData = (id: string) => {
    axios.delete<IAccount>(`http://localhost:5000/accounts/${id}`) 
    .then((response) => {
      if (response.status === 200) {
        console.log('Element deleted successfully.');
      }
    })
    .catch((error) => {
      console.error('Failed to delete element:', error);
    });
  }

  return {
    fetchData,
    deleteData
  }
}

export default useDataService;