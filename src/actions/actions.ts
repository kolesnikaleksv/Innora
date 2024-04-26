import { createAction } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';
import { IAccount } from "../types";

export const fetchAccounts = (fetchData: (url: string) => Promise<any>) => (dispatch: Dispatch) => {
  dispatch(accountsFetching());
  fetchData('http://localhost:5000/accounts')
  .then(data => dispatch(accountsFetched(data)))
  .catch(() => dispatch(accountsFetchingError()));
}

export const deleteAccount = (id: string) => (dispatch: Dispatch) => {
  dispatch(accountDeleting(id));
}

export const fetchDeletedAccounts = (fetchData: (url: string) => Promise<any>) => (dispatch: Dispatch) => {
  dispatch(deletedAccountsFetching());
  fetchData('http://localhost:5000/deletedAccounts')
  .then(data => dispatch(deletedAccountsFetched(data)))
  .catch(() => dispatch(deletedAccountsFetchingError()))
}

export const accountsFetching = createAction('ACCOUNTS_FETCHING');
export const accountsFetched = createAction<IAccount[]>('ACCOUNTS_FETCHED');
export const accountsFetchingError = createAction('ACCOUNTS_FETCHING_ERROR');
export const popupActive = createAction<IAccount>('POPUP_ACTIVE');
export const closePopup = createAction('CLOSE_POPUP');

export const activeAccountFilter = createAction<string>('ACTIVE_ACCOUNT_FILTER');
export const searchAccountFilter = createAction<string>('SEARCH_ACCOUNT_FILTER');

export const accountDeleting = createAction<string>('ACCOUNT_DELETING');

export const addDeletedAccount = createAction<IAccount>('ADD_DELETED_ACCOUNT');

export const deletedAccountsFetching = createAction('DELETED_ACCOUNTS_FETCHING');
export const deletedAccountsFetched = createAction<IAccount[]>('DELETED_ACCOUNTS_FETCHED');
export const deletedAccountsFetchingError = createAction('DELETED_ACCOUNTS_FETCHING_ERROR');