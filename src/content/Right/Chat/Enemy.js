import { Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createMessage, makeDamage } from '../../../redux/actions'
import { ruusers } from '../../../arrays/RU/ruusers'
import { rumessages } from '../../../arrays/RU/rumessages'
import { nicknameColors } from '../../../arrays/Other/usercolors'
import Healthbar from './Enemy/Healthbar'

function Enemy({ message, user, userColor, currentHealth, maxHealth, lastDamage, createMessage, makeDamage }) {
  function onMessage() {
    const damage = Math.floor(Math.random() * 15) + 15
    makeDamage(damage)
    if (currentHealth - damage <= 0) {
      const newUser = ruusers[Math.floor(Math.random() * ruusers.length)]
      const newMessage = rumessages[Math.floor(Math.random() * rumessages.length)]
      const newColor = nicknameColors[Math.floor(Math.random() * nicknameColors.length)]
      const newHealth = Math.floor(Math.random() * 100) + 50
      createMessage(newMessage, newUser, newColor, newHealth)
    }
  }

  return (
    <Col xs={12}>
      <Button variant='second' className='py-1 message' onClick={() => onMessage()} block>
        <b style={{ color: userColor }}> {user} </b>: {message}
      </Button>
      <Healthbar now={Math.floor((currentHealth / maxHealth) * 100)}>{`${currentHealth} ${
        lastDamage !== 0 ? '( -' + lastDamage + ' )' : ' '
      }`}</Healthbar>
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    user: state.message.user,
    userColor: state.message.userColor,
    currentHealth: state.message.currentHealth,
    maxHealth: state.message.maxHealth,
    lastDamage: state.message.lastDamage,
  }
}

const mapDispatchToProps = {
  createMessage,
  makeDamage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy)
