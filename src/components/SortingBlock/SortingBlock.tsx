import { IAccount } from "../../types";

import './sorting-block.scss'

interface SortingBlockProps<T> {
  items: T[];
  sortOption: string[];
  filterChange: (p: string) => {};
  searchFilter: (p: string) => {};
}

const SortingBlock: React.FC<SortingBlockProps<IAccount>> = (props) => {

  const optionsList = props.sortOption.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  
  return (
   <>
      <form action="#">
        <label htmlFor="type">Sort by name:</label>
        <select name="types" id="type" onChange={(e) => props.filterChange(e.target.value)}>
          {optionsList}
        </select>
      </form>
      <div className='profile__filter'>
        <label htmlFor="profile-filter">Filter by county:</label>
          <input
              className='profile__filter--input'
              type='search'
              id='profile-filter'
              name='profile-filter'
              placeholder='Search'
              aria-label='Search'
              onChange={(e) => props.searchFilter(e.target.value)}
            />
      </div>
   </>
  )
}

export default SortingBlock;