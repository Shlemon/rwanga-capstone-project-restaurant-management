import './App.css';
import React, { useState } from 'react';
import MainRouter from '../../components/routing/Routes/MainRoutes';
import InitializeSlices from '../../components/firestore-ops/InitializeSlices';

import "../../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import LoadingSpinner from '../../components/spinners/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setLoading] = useState(true);
  
  InitializeSlices().then(
    () => setLoading(false)
  );

  if (isLoading){
    return <LoadingSpinner />;
  }

  return (
    <MainRouter />
  );
}

export default App;
