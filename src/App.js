import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router';
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl  } from 'react-bootstrap';

function App() {

  const data = [
    {
      id: 1,
      title: '밤하늘의 달',
      content: '어두운 밤하늘에 달과 별똥별이 떨어지는 모습을 스노우볼에 담았습니다.',
      price: '6500',
    },
    {
      id: 2,
      title: '분홍과 하트',
      content: '분홍색 배경에 하트가 조금씩 보이는 심플한 작품입니다.',
      price: '5000',
    },
    {
      id: 3,
      title: '회중시계 속 황소',
      content: '황소자리가 회중시계 안에 있는 영롱한 느낌의 작품입니다.',
      price: '8000',
    },
  ];

  const [cdata, setcdata] = useState(data);

  return (
    <>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RESIN_WORK Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div class='p-5 mb-4 bg-light rounded-3' className="bg">
      <div class="container-fluid py-5">
        <h1 class="displya-5 fw-bold">Resin Art Accessories</h1>
          <p class="col-md-8 fs-4">Your own work that shines beautifully</p>
          <button class="btn btn-primary btn-lg" type="button">More ...</button>
      </div>
    </div>
    <div className="container">
      <div className="row"> {
        cdata.map((a, i) => {//두 번째 첨자 i로 index를 나타냄
          return <Card cdata={data[i]} i={i} key={i+1}/>
        })//map함수를 사용하여 배열을 가공하고 반복된 개수만큼 다른결과를 낸다
      }
      </div>
     </div>  

     <Route exact path="/">
        <div>
          메인 페이지
        </div>
      </Route>
     <Route exact path="/detail">
        <div>
          상세 페이지
        </div>
      </Route>
    </>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={"http://yuminc03.dothome.co.kr/image/img" + (props.i+1) + ".jpg"} width="80%" alt={props.cdata.title}/>
      <h4>{props.cdata.title}</h4>
      <p>{props.cdata.content}</p>
      <p>{props.cdata.price}원</p>
    </div>
  )
}

export default App;
