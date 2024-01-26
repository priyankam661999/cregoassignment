import React from 'react';
import { Container } from 'react-bootstrap';
import ExpressionForm from './components/ExpressionForm';

function App() {
  const handleAddExpression = (expression) => {
    // Log the expressions in JSON format
    console.log('Expressions:', JSON.stringify(expression, null, 2));
  };

  return (
    <Container>
      <h1>Form</h1>
      <ExpressionForm onAddExpression={handleAddExpression} />
    </Container>
  );
}

export default App;
