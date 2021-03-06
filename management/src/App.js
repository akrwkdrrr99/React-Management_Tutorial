import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '940422',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '길동홍',
  'birthday' : '930806',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '동홍길',
  'birthday' : '950830',
  'gender' : '남자',
  'job' : '주부'
}
]

function App() {
  return (
    <div>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
    </div>
  );
}
// map이라는 프록스 사용시 key값을 사용해야함
export default App;
