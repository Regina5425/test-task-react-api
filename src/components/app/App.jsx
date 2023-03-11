import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllChar } from "../../redux/charSlice";
import CardLayout from "../card/Card";
import Filter from "../filter/Filter";
import Error from "../error/Error";
import Spinner from "../loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.char);

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
              <Filter />
              <div className='card'>
                {items.map((item) => (
                  <CardLayout key={item.id} {...item} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
