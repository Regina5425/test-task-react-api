import { Button } from "antd";

const Filter = ({filter, onFilterChange}) => {

  return (
    <div className='filter'>
      <h2 className='filter__title'>Filter by:</h2>
      {filter ? (
        <Button type='primary' onClick={() => onFilterChange(false)}>
          Liked
        </Button>
      ) : (
        <Button onClick={() => onFilterChange(true)}>Liked</Button>
      )}
    </div>
  );
};
export default Filter;
