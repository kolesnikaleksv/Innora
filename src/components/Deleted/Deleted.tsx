import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AccountsList from '../AccountsLIst/AccountsList';
import { IAccount } from '../../types';
import { useState } from 'react';
import AppPaginate from '../AppPaginate';

import './deleted.scss'

const Deleted = () => {
  const arrOfDeletedAccounts = useSelector((state: RootState) => state.accountsReducer.deletedAccounts);
  const [products, setProducts] = useState<IAccount[]>([]);

  return (
    <div className='deleted-page'>
      <div className="deleted-page__header">
        <h1>Accounts / {arrOfDeletedAccounts.length}</h1>
        
      </div>
      <div className="deleted-page__body">
        {
          arrOfDeletedAccounts.length 
          ? <AccountsList data={arrOfDeletedAccounts.length > 5 ? products : arrOfDeletedAccounts} />
          : <div>There are no deleted accounts</div>
        }
        {
          arrOfDeletedAccounts.length > 5
        ? <AppPaginate filteredProfiles={arrOfDeletedAccounts}  setProducts={(p) => setProducts(p as IAccount[])}/>
        : null
      }
      </div>
    </div>
  )
}

export default Deleted;