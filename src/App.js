import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState(' ');

  const handleOnClear = () =>{
    setCurrentNumber('0')
  }
  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  }
  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
          <Button label="*"/>
          <Button label="/"/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="X"/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber ('7')}/>
          <Button label="8" onClick={() => handleAddNumber ('8')}/>
          <Button label="9" onClick={() => handleAddNumber ('9')}/>
          <Button label="-" onClick={() => handleAddNumber ('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber ('4')}/>
          <Button label="5" onClick={() => handleAddNumber ('5')}/>
          <Button label="6" onClick={() => handleAddNumber ('6')}/>
          <Button label="+" onClick={() => handleAddNumber ('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber ('1')}/>
          <Button label="2" onClick={() => handleAddNumber ('2')}/>
          <Button label="3" onClick={() => handleAddNumber ('3')}/>
          <Button label="=" onClick={() => handleAddNumber ('=')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
