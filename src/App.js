import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board.js'
import AppContext from './context/Context.js';
import { reducer } from './reducer/Reducer.js';
import {  initGameState } from './Constant.js';


function App() {

  const [appState, dispatch ] = useReducer(reducer,initGameState);

  const providerState = {
      appState,
      dispatch
  }

  return (
      <AppContext.Provider value={providerState} >
          <div className="App">
              <Board/>
          </div>
      </AppContext.Provider>
  ); 
}

export default App;