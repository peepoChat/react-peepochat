import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Left from './Left/Left'
import Right from './Right/Right'

function App({ themeValue }) {
  return (
    <Container fluid className={themeValue} id='theme'>
      <Container fluid='md'>
        <Row className='vh-100 justify-content-around'>
          <Left />
          <Right />
        </Row>
      </Container>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    themeValue: state.theme.value,
  }
}

export default connect(mapStateToProps, null)(App)
