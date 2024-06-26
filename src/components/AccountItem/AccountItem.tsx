import { useDispatch } from 'react-redux';
import getDate from '../services/getDate';
import { AppDispatch } from '../../store/store';
import { IAccount } from '../../types';
import { popupActive } from '../../actions/actions';

import './accountItem.scss';

const AccountItem: React.FC<IAccount> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { creationDate, email, country, id, name, photo} = props;

  return (
    <div className='item'>
      <div className='item__image'>
          <img src={photo} alt='user' />
        </div>
      <div className='item__title'>
        {name}
      </div>
      <div className='item__token'>
        <span className='item__token item__token'>{country}</span>
        <span className='item__token item__token--description'>country</span>
      </div>
      <div className='item__date'>
        <span className='item__date item__date--short'>{creationDate ? getDate(creationDate, 'shortDate') : 'without date'}</span>
        <span className='item__date item__date--full'>{creationDate ? getDate(creationDate, 'fullDate') : 'no date'}</span>
      </div>
      <div className='item__email'>
        <span className='item__email item__email'>{email}</span>
        <span className='item__email item__email--description'>email</span>
      </div>
      <div className='item__delete' onClick={() => dispatch(popupActive({id, creationDate, email, country, name, photo}))}>
        <span className="material-symbols-outlined">
          delete
        </span>
      </div> 
      <div className='item__arrow'>
        <span className="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </div>
    </div>
  )
}

export default AccountItem;