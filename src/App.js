import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job':  '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '961343',
  'gender': '남자',
  'job':  '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '962534',
  'gender': '남자',
  'job':  '디자이너'
}
]

class App extends Component {
  render() {
    return (
      customers.map((customer) => {
        return (
          <Customer
          key={customer.id}
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
        )
      }
    ))
  }
}

export default App;

// C:\Users\User\Desktop\vsc 작업 공간\동빈나\React App\front>git remote add origin https://github.com/sanghyeok-han/React-Management-Tutorial.git

// C:\Users\User\Desktop\vsc 작업 공간\동빈나\React App\front>git push origin master --force