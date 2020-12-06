import { Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

function Enemy({ message, user, userColor }) {
  return (
    <Col xs={12}>
      <Card.Body className='py-2 bg-second align-items-center'>
        <b style={{ color: userColor }}> {user} </b>: {message}
      </Card.Body>
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    user: state.message.user,
    userColor: state.message.userColor,
  }
}

export default connect(mapStateToProps, null)(Enemy)
