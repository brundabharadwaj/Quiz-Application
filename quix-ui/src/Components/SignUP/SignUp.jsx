import React from "react";
import { Card, Image, Button,ButtonGroup } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
 import Logo from '../Assets/quiz-buzz-logo.png'


 const 
    SignUp = () => {  return(
       <Card.Group ><Card centered style={{background:"skyBlue"}}>
        <Image src={Logo} wrapped ui={false} />
      </Card>
      <Card centered>
        <Card.Content>
          <Card.Header>Sign up</Card.Header>
          <Card.Meta>Get set go!</Card.Meta>
          <Card.Description>
            <Form  >
                <Form.Field><Form.Input type="email" placeholder={"Email address"} /></Form.Field>
                <Form.Field><Form.Input type="text" placeholder={"First name"} /></Form.Field>
                <Form.Field><Form.Input type="text" placeholder={"Last name"} /></Form.Field>
                <Form.Field><Form.Input type="password" placeholder={"Password"} /></Form.Field>
                <Form.Field><Form.Input type="password" placeholder={"Confirm password"} /></Form.Field>
               <p>Forgot password?&nbsp; &nbsp;<a href="#" target={"_blank"}>Click here </a></p>
             
    <Button  style={{marginLeft:'20%'}} basic positive>Save</Button>
    <Button basic negative>Clear</Button>
   

            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra  centered style={{display:'flex',float:'left'}}>
 <div style={{paddingTop:'2px'}}>Sign in with &nbsp;</div>&nbsp;
 <Button.Group centered>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    </Button.Group> 
        </Card.Content>
      </Card></Card.Group>);}
     export default SignUp;