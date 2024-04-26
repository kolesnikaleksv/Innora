
import CloseButton from '../CloseButton/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { closePopup, deleteAccount, addDeletedAccount } from '../../actions/actions';
import useDataService from '../services/DataService';

import './popup.scss';

const Popup = () => { 

  const popupItem = useSelector((state: RootState) => state.accountsReducer.popupItem);
  const dispatch = useDispatch<AppDispatch>();
  const {deleteData, sendData} = useDataService();

  if(!popupItem) {
    return 'hello 2'
  }
  const {id, name, creationDate, email } = popupItem;

  const deleteItem = (id: string) => {
    dispatch(deleteAccount(id))
    deleteData(id);
    dispatch(addDeletedAccount(popupItem))
    sendData(popupItem);
  }
  return (
    <div className='popup' onClick={() => dispatch(closePopup())}>
      <div className='popup__container' >
          <p className='popup__question'>Are you sure you want to delete this account?</p>
        <div className='popup-account'>
          <div className='popup-account__count'>
            <span className='popup-account popup-account__count--count'>{email}</span>
            <span className='popup-account popup-account__count--description'>email</span>
          </div>
          <div className='popup-account__title'>
            {name}
          </div>
          <div className='popup-account__price flex flex-col'>
            <span className='item__price item__price--usd'>{creationDate}</span>
            <span className='item__price item__price--uah'>date</span>
          </div>
        </div>
        <div className='popup__footer'>
          <button className='popup-button popup-button--discard' onClick={() => dispatch(closePopup())}>discard</button>
          <button className='popup-button popup-button--delete' onClick={() => deleteItem(id)}>
            <span className="material-symbols-outlined">delete</span>
              delete
          </button>
        </div>
        <CloseButton onClose={() => dispatch(closePopup())} />
      </div>
    </div>
  )
}

export default Popup;