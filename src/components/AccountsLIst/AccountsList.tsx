import { useSelector } from "react-redux";
import AccountItem from "../AccountItem/AccountItem";
import { RootState } from "../../store/store";
import { IAccount } from "../../types";

const AccountsList = ({data}:{data: IAccount[]}) => {
  const hasActiveOrderId = useSelector((state: RootState) => state.accountsReducer.activeAccount);
  
  if(data.length === 0) {
    return (
      <h3>OOPS! There are no orders</h3>
    )
  }

  const item = data.map(item => {
    const {accountId} = item;
    
    return (
      <AccountItem 
        key={accountId}
        {...item}
      />
    )
  });

  return (
    <div className='orders__body--items' style={hasActiveOrderId ? {width: '35%'}: {width: '100%'}}>
      {item}
    </div>
  )
}

export default AccountsList;