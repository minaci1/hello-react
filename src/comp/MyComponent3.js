import React from 'react';

const MyComponent3 = (props) => {
  //람다 함수 표기법
  return (
    <>
      <div>나의 세번째 컴포넌트</div>
      <h2>이름 : {props.name}</h2>
      <h2>나이:{props.age}</h2>
    </>
  );
};

export default MyComponent3;
