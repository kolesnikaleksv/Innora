import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import limitItemsService from "../services/limitItemsService";
import { IAccount } from "../../types";

interface IPagination {
  count: number;
  from: number;
  to: number;
}

const elelemPerPage: number = 5;

const AppPaginate = ({filteredProfiles, setProducts}: {filteredProfiles: IAccount[], setProducts: (data: IAccount[]) => void}) => {
   
  const [pagination, setPagination] = useState<IPagination>({
    count: 0,
    from: 0,
    to: elelemPerPage
  })

  const limitedServiceData = () => {
    limitItemsService.getData(pagination.from, pagination.to, filteredProfiles)
    .then((response) => {
      setPagination({ ...pagination, count: response.count });
      setProducts(response.data);
    });
  }

  useEffect(() => {
    (!filteredProfiles.length) ? null : limitedServiceData();
  },[pagination.from, pagination.to, filteredProfiles.length]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * elelemPerPage;
    const to = (page - 1) * elelemPerPage + elelemPerPage;

    setPagination({...pagination, from: from, to: to})
  }
  return (
    <Box className={`flex justify-center items-center mt-6 ${filteredProfiles.length < 5 ? 'hidden' : null}`}>
      <Pagination
        count={Math.ceil(pagination.count / elelemPerPage)}
        onChange={handleChangePage}
        variant="outlined" color="primary"
      />
    </Box>
  )
}

export default AppPaginate;