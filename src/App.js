import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

const firstTooltip = (
  <Tooltip message='tooltip message' color='hotpink'>ipsum</Tooltip>
);
const secondTooltip = (
  <Tooltip message='another tooltip message' color='#126BCC'>officiis</Tooltip>
);

function App() {
  return (
    <main className='App'>
      {/* <Split className='left' flexBasis={2}>
      change to children This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      <Tooltip message='one more tooltip message'>Necessitatibus?</Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split> */}
      <TheDate />
      <Counter count={123} step={0} />
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
    </main>
  );
}

export default App;