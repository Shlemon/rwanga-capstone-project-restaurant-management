import './App.css';
import React, { useEffect, useState } from 'react';
import MainRouter from '../../components/routing/Routes/MainRoutes';
import InitializeSlices from '../../components/firestore-ops/InitializeSlices';

import "../../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  const [isLoading, setLoading] = useState(true);
  InitializeSlices().then(
    () => setLoading(false)
  );

  if (isLoading){
    return <h1 className='text-center'>Loading, Please Wait...</h1>;
  }

  return (
    <MainRouter />
  );
}

export default App;
