import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { 
  accountsFetching, 
  accountsFetched, 
  accountsFetchingError,
  popupActive, 
  closePopup,
  activeAccountFilter,
  searchAccountFilter,
  accountDeleting,
  addDeletedAccount } from "../actions/actions";
import { IAccount } from "../types";

interface IState {
  accounts: IAccount[],
  accountsLoadingStatus: 'idle'  | 'loading' | 'error',
  activeAccount: string,
  popupActive: boolean,
  popupItem: IAccount | null,
  activeFilter: string,
  searchFilter: string,
  deletedAccounts: IAccount[]
}

const initialState: IState = {
  accounts: [],
  accountsLoadingStatus: 'idle',
  activeAccount: '',
  popupActive: false,
  popupItem: null,
  activeFilter: 'All names',
  searchFilter: '',
  deletedAccounts: []
}

const accountsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(accountsFetching, state => {
      state.accountsLoadingStatus = 'loading';
    })
    .addCase(accountsFetched, (state, action: PayloadAction<IAccount[]>) => {
      state.accounts = action.payload;
      state.accountsLoadingStatus = 'idle';
    })
    .addCase(accountsFetchingError, state => {
      state.accountsLoadingStatus = 'error';
    })
    .addCase(popupActive, (state, action: PayloadAction<IAccount> ) => {
      state.popupActive = true;
      state.popupItem = action.payload;
    })
    .addCase(closePopup, (state ) => {
      state.popupActive = false;
    })
    .addCase(activeAccountFilter, (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    })
    .addCase(searchAccountFilter, (state, action) => {
      state.searchFilter = action.payload;
    })
    .addCase(accountDeleting, (state, action) => {
      state.accounts = state.accounts.filter(item => item.id !== action.payload)
    })
    .addCase(addDeletedAccount, (state, action: PayloadAction<IAccount> ) => {
      state.deletedAccounts.push(action.payload)
    })
    .addDefaultCase((state, action) => {})
})

export default accountsReducer;