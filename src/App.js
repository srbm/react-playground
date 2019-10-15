import React from 'react';
// import Split from './composition/Split';
import './App.css';
// import Tooltip from './composition/Tooltip';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import Accordion from './state-drills/Accordions';
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
class App extends React.Component {
  render() {
    return <div>
      <Accordion sections={sections} />
    </div>
  }
}


export default App;