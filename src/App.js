import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board.js'
import AppContext from './context/Context.js';
import { reducer } from './reducer/Reducer.js';
import {  initGameState } from './Constant.js';
import MovesList from './components/Board/Control/bits/MovesList.js';
import TakeBack from './components/Board/Control/bits/TakeBack.js';
import Control from './components/Board/Control/Control.js';


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
            <Control>
                <MovesList/>
                <TakeBack/>
            </Control>
          </div>
      </AppContext.Provider>
  ); 
}

export default App;