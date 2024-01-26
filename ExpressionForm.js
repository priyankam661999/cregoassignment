import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';

const ExpressionForm = ({ onAddExpression }) => {
  const [expression, setExpression] = useState({
    connectorType: 'AND',
    expressions: [{}],
  });

  const handleAddExpression = () => {
    setExpression({
      ...expression,
      expressions: [...expression.expressions, {}],
    });
  };

  const handleDeleteExpression = (index) => {
    const newExpressions = [...expression.expressions];
    newExpressions.splice(index, 1);
    setExpression({ ...expression, expressions: newExpressions });
  };

  return (
    
    <Form>
     
      {/* Connector Type */}
      <Form.Group as={Row} controlId="connectorType">
        <Form.Label column sm={2}>
          Connector Type
        </Form.Label>

          <Form.Control
            as="select"
            value={expression.connectorType}
            onChange={(e) => setExpression({ ...expression, connectorType: e.target.value })}
          >&nbsp;
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </Form.Control>
      <br></br>
      </Form.Group>

      {/* Expressions */}
      {expression.expressions.map((exp, index) => (
        <Row key={index}>
          {/* Expression Fields */}
         <br></br>
            <Form.Control as="select" placeholder="Rule Type">
              <option value="Age">Age</option>
              <option value="Credit Score">Credit Score</option>
              <option value="Account Balance">Account Balance</option>
            </Form.Control>
        <br></br>
          <br></br>
            <Form.Control as="select" placeholder="Operator" style={{backgroundColor:'lightsalmon', padding:'3px',border:'none',borderRadius:'2px'}}>
          
              <option value=">">{'>'}</option>
              <option value="<">{'<'}</option>
              <option value=">=">{'>='}</option>
              <option value="<=">{'<='}</option>
              <option value="=">{'='}</option>
            </Form.Control>
      
        <br></br>
        <br></br>
            <Form.Control type="text" placeholder="Value" />
       
            <Form.Control type="text" placeholder="Score" />
            <br></br>
          <br></br>
            {index === expression.expressions.length - 1 && (
              <Button style={{backgroundColor: "Red",color:'white', padding:'3px',border:'none',borderRadius:'2px',}} variant="outline-danger" onClick={() => handleDeleteExpression(index)}>
                Delete
              </Button>
            )}
         
        </Row>
      ))}

      {/* Add and Delete Buttons */}
      <Button variant="primary" onClick={handleAddExpression} style={{backgroundColor:'orange', padding:'3px',border:'none',borderRadius:'2px'}}>
        Add Expression
      </Button>{' '}
<br></br>
<br></br>
      {/* Submit Button */}
      <Button variant="success" type="submit" style={{backgroundColor: 'blue', color:'white', padding:'3px',border:'none',borderRadius:'2px',display:'block'}}>
        Submit
      </Button>
    </Form>
  );
};

export default ExpressionForm;