import { 
  fetchAccounts,
  activeAccountFilter, 
  searchAccountFilter } from '../../actions/actions';
import  React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import AccountsList from '../AccountsLIst/AccountsList';
import useDataService from '../services/DataService';
import Popup from '../Popup/Popup';
import { AppDispatch, RootState } from '../../store/store';
import { IAccount } from '../../types';
import AppPaginate from '../AppPaginate';
import SortingBlock from '../SortingBlock/SortingBlock';

import './accounts.scss';

const Accounts: React.FC = () => {
  const accountsList = useSelector((state: RootState) => state.accountsReducer.accounts);
  const activeFilter = useSelector((state: RootState) => state.accountsReducer.activeFilter);
  const popupActive = useSelector((state: RootState) => state.accountsReducer.popupActive);
  const filteredAccountsSelector = createSelector(
    (state: RootState) => state.accountsReducer.activeFilter,
    (state: RootState) => state.accountsReducer.accounts,
    (state: RootState) => state.accountsReducer.searchFilter,
    (activeFilter, profiles, searchFilter) => {
      if(activeFilter === 'All names' && searchFilter === '') {
          return accountsList;
        } 
        else if(activeFilter !== 'All names' && searchFilter === ''){
          return accountsList.filter(item => item.name === activeFilter)
        } 
        else if (activeFilter === 'All names' && searchFilter !== ''){
          return profiles.filter((item) =>
          item.country.toLowerCase().includes(searchFilter.toLowerCase())
        );
        } 
        else if(activeFilter !== 'All names' || searchFilter !== ''){
          return profiles.filter((item) => item.country === activeFilter && item.country.toLowerCase().includes(searchFilter.toLowerCase()))
        } 
        else {
          throw new Error('Something went wrong!')
        }
    }
  )

  const filteredAccounts = useSelector(filteredAccountsSelector);
  
  const [products, setProducts] = useState<IAccount[]>([])
  const {fetchData} = useDataService();
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchAccounts(fetchData));
    
    // eslint-disable-next-line
  }, [activeFilter])

  const typeSet = new Set<string>(['All names']);
  accountsList.forEach(item => {
    typeSet.add(item.name)
  });

  const sortOption = Array.from(typeSet);

  return (
    <div className='accounts' data-testid="main-page">
      <div className='accounts__header'>
        <h1>Accounts / {accountsList.length}</h1>
        <SortingBlock 
          sortOption={sortOption} 
          items={accountsList} 
          filterChange={(p) => dispatch(activeAccountFilter(p))} 
          searchFilter={(p) => dispatch(searchAccountFilter(p))}
          />
			</div>
      <div className='accounts__body'>
      <AccountsList data={filteredAccounts.length > 5 ? products : filteredAccounts}/>
			</div>
      {
        filteredAccounts.length > 5
        ? <AppPaginate filteredProfiles={accountsList} setProducts={(p) => setProducts(p as IAccount[])}/>
        : null
      }
      {
        popupActive ?
        <Popup />
        : null
      } 
    </div>
  );
};

export default Accounts;