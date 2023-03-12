import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllChar } from "../../redux/charSlice";
import CardLayout from "../cardLayout/CardLayout";
import Filter from "../filter/Filter";
import Error from "../error/Error";
import Spinner from "../loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.char);

  const [filter, setFilter] = useState(false);

  const onFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    dispatch(fetchAllChar());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <h1 className='container__title'>Rick and Morty</h1>
      {status === "error" ? (
        <Error />
      ) : (
        <>
          {status === "loading" ? (
            <Spinner />
          ) : (
            <>
              <Filter filter={filter} onFilterChange={onFilterChange} />
              <div className='card'>
                {filter
                  ? items
                      .filter((item) => item.liked)
                      .map((item) => <CardLayout key={item.id} {...item} />)
                  : items.map((item) => <CardLayout key={item.id} {...item} />)}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
