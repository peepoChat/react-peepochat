import { Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createMessage } from '../../../redux/actions'
import { ruusers } from '../../../arrays/RU/ruusers'
import { rumessages } from '../../../arrays/RU/rumessages'
import { nicknameColors } from '../../../arrays/Other/usercolors'

function Enemy({ message, user, userColor, createMessage }) {
  function onMessage() {
    const newUser = ruusers[Math.floor(Math.random() * ruusers.length)]
    const newMessage = rumessages[Math.floor(Math.random() * rumessages.length)]
    const newColor = nicknameColors[Math.floor(Math.random() * nicknameColors.length)]
    createMessage(newMessage, newUser, newColor)
  }

  return (
    <Col xs={12}>
      <Card.Body className='py-2 bg-second align-items-center message' onClick={() => onMessage()}>
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

const mapDispatchToProps = {
  createMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy)
