import React from 'react';
import { Button, Card, CardBody, CardGroup, Col, Input, InputGroup, Row, Label } from 'reactstrap';
import './App.css';
import Logo from './perroLuli.png';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div>
      <div className="body">
        <Col xs="12" className="p-0 login-container">
          <CardGroup className="login-container">
            <Card className="login-full-padding">
              <CardBody className="login-class-1">              
                  <Row>
                    <Col xs="12" className="pb-5 logo-container">
                      <img src={Logo} alt="PERRO LULI"></img>
                      <p className="bosch-logo-text py-2">ReciclAR</p>
                    </Col>
                  </Row>
                  <h1 className="ml-2 login-title">Login</h1>
                  <InputGroup className="mb-3">
                  Name:
                  <input type="text" name="name" />

                  </InputGroup>
                  <InputGroup className="mb-2">
                  Password:
                  <input type="text" name="pass" />

                  </InputGroup>                
                  <Row>
                    <Col xs="8" className="text-left">
                      {/* <Link to="/RecoverPassword" className="px-0 login-forgot-psw">¿Olvidaste la CONTRASEÑA?</Link> */}
                    </Col>
                    <Col xs="4" className="text-left login-chbx">
                      <Label check>
                        <Input type="checkbox" />{' '}
                        Recordarme
                      </Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" className="mt-4">
                      <Button style={{ cursor: 'pointer' }} color="primary" className="px-5 border-0 float-right login-btn">Ingresar</Button>                      
                    </Col>
                  </Row>              
              </CardBody>
            </Card>
            <Card className="text-white py-5 d-md-down-none">
              <CardBody>
              </CardBody>
            </Card>
          </CardGroup >
        </Col >
      </div >  
    </div >
  );
}

export default App;
