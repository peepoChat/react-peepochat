import { Container, Row } from 'react-bootstrap'
import Left from './Left/Left'
import Right from './Right/Right'

function App() {
  return (
    <Container fluid='md'>
      <Row className='vh-100 justify-content-around'>
        <Left />
        <Right />
      </Row>
    </Container>
  )
}

export default App
