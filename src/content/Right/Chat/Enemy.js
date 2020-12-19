import { Col, Button, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createMessage, makeDamage } from '../../../redux/actions'
import { ruusers } from '../../../arrays/RU/ruusers'
import { rumessages } from '../../../arrays/RU/rumessages'
import { nicknameColors } from '../../../arrays/Other/usercolors'

function Enemy({ message, user, userColor, health, createMessage, makeDamage }) {
  function onMessage() {
    const damage = Math.floor(Math.random() * 30)
    makeDamage(damage)
    if (health <= 0) {
      const newUser = ruusers[Math.floor(Math.random() * ruusers.length)]
      const newMessage = rumessages[Math.floor(Math.random() * rumessages.length)]
      const newColor = nicknameColors[Math.floor(Math.random() * nicknameColors.length)]
      const newHealth = 100
      createMessage(newMessage, newUser, newColor, newHealth)
    }
  }

  return (
    <Col xs={12}>
      <Button variant='second' className='py-1 message' onClick={() => onMessage()} block>
        <b style={{ color: userColor }}> {user} </b>: {message}
      </Button>
      <ProgressBar variant='danger' now={health} className='mt-1' />
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    user: state.message.user,
    userColor: state.message.userColor,
    health: state.message.health,
  }
}

const mapDispatchToProps = {
  createMessage,
  makeDamage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy)
