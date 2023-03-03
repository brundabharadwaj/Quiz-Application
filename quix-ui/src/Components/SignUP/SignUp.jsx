import React from "react";
import { Card,Icon, Image } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
 import Logo from '../Assets/quiz-buzz-logo.png'
const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
]

 const 
    SignUp = () => {  return(
       <Card.Group ><Card centered style={{background:"skyBlue"}}>
        <Image src={Logo} wrapped ui={false} />
      </Card>
      <Card centered>
        <Card.Content>
          <Card.Header>Sign UP</Card.Header>
          <Card.Meta><a>Login instead? </a></Card.Meta>
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