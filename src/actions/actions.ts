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

export const accountsFetching = createAction('ACCOUNTS_FETCHING');
export const accountsFetched = createAction<IAccount[]>('ACCOUNTS_FETCHED');
export const accountsFetchingError = createAction('ACCOUNTS_FETCHING_ERROR');
export const popupActive = createAction<IAccount>('POPUP_ACTIVE');
export const closePopup = createAction('CLOSE_POPUP');

export const activeAccountFilter = createAction<string>('ACTIVE_ACCOUNT_FILTER');
export const searchAccountFilter = createAction<string>('SEARCH_ACCOUNT_FILTER');

export const accountDeleting = createAction<string>('ACCOUNT_DELETING');