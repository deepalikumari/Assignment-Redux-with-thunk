import React from 'react';
import { fetchData } from './comp/action';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(storeData => storeData.user);

  const handleFetch = () => {
    dispatch(fetchData());
  };

  return (
    <>
      <button onClick={handleFetch}>Get Data</button>

      {users.map((e, i) => (
        <>
          <h3>{e.name}</h3>
          <h3>{e.email}</h3>

          
          <hr className="line" />

        </>
      ))}
    </>
  );
};

export default App;