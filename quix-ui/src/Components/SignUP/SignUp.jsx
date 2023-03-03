import React from "react";
import { Card, Image } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
 import Logo from '../Assets/quiz-buzz-logo.png'


 const 
    SignUp = () => {  return(
       <Card.Group ><Card centered style={{background:"skyBlue"}}>
        <Image src={Logo} wrapped ui={false} />
      </Card>
      <Card centered>
        <Card.Content>
          <Card.Header>Sign UP</Card.Header>
          <Card.Meta>Login instead? </Card.Meta>
          <Card.Description>
            <Form  >
                <Form.Field></Form.Field>
                <Form.Field></Form.Field>
                <Form.Field></Form.Field>
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <a> */}
            {/* <Icon name='user' />
            10 Friends
          </a> */}
        </Card.Content>
      </Card></Card.Group>);}
     export default SignUp;