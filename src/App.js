import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import Sayyaa from './Sayyaa';
import Number3 from './Number3';
import EventPratice from './EventPratice';
import Number3Class from './Number3Class';
import EventPracticeFC from './EventPracticeFC';
//import { MyComponent, MyComponent2, MyComponent3 } from './comp';
//import { MyComponent } from './comp/MyComponent';

// function App() {
//   const name = 'undefined';

//   return (
//     <div className="react">
//       {name || <h1>undefined 입니다</h1>}
//       아이디: <input name="uid"></input>;{}
//       {
//         //자바스크립트 주석 종류
//         // 라인주석
//       }
//     </div>
//   );
// }

class App extends Component {
  name = '멤버변수 홍길동';
  age = 20;

  render() {
    //const name = '지역변수 홍길동';
    return (
      <div className="react">
        <EventPracticeFC />
      </div>
    );
  }
}

/*
function App() {
  const name = '홍길동';
  return <div className="react">{name}</div>;
}
*/
export default App;
