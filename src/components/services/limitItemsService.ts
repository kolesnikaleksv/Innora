import { IAccount } from "../../types";

const limitItemsService = {
  getData: (from: number, to: number, profiles: IAccount[]): Promise<{ data: IAccount[], count: number }> => {

    return new Promise((resolve) => {
      const data = profiles.slice(from, to);
      resolve({
        data,
        count: profiles.length
      })
    })
  }
}
export default limitItemsService;