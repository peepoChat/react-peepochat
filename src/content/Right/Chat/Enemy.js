import { Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createMessage, makeDamage } from '../../../redux/actions'
import { ruusers } from '../../../arrays/RU/ruusers'
import { rumessages } from '../../../arrays/RU/rumessages'
import { ru_emotes } from '../../../arrays/RU/ruemotes'
import { rupastas } from '../../../arrays/RU/rupastas'
import { nicknameColors } from '../../../arrays/Other/usercolors'
import { ascii } from '../../../arrays/Other/ascii'
import Healthbar from './Enemy/Healthbar'

function Enemy({ message, user, userColor, currentHealth, maxHealth, lastDamage, createMessage, makeDamage }) {
  function onMessage() {
    const damage = getRandomInt(15) + 15
    makeDamage(damage)
    if (currentHealth - damage <= 0) {
      const newUser = ruusers[getRandomInt(ruusers.length)]
      const newMessage = getMessage(10)
      const newColor = nicknameColors[getRandomInt(nicknameColors.length)]
      const newHealth = getRandomInt(100) + 50
      createMessage(newMessage, newUser, newColor, newHealth)
    }
  }

  function htmlMessage() {
    return {
      __html: stringParsing(message, ru_emotes),
    }
  }

  function stringParsing(string, map) {
    for (let key of map.keys()) {
      let parsed = new RegExp(key, 'g')
      string = string.replace(parsed, ` ${map.get(key)} `)
    }
    return string
  }

  function getMessage(n) {
    const _a = getRandomInt(n)
    let _message
    if (_a <= 8) {
      _message = rumessages[Math.floor(Math.random() * rumessages.length)]
    } else if (_a === 9) {
      _message = ascii[Math.floor(Math.random() * ascii.length)]
    } else {
      _message = rupastas[Math.floor(Math.random() * rupastas.length)]
    }
    return _message
  }

  function getRandomInt(n) {
    const int = Math.floor(Math.random() * n)
    return int
  }

  return (
    <Col xs={12}>
      <Button variant='second' className='py-1 message' onClick={() => onMessage()} block>
        <b style={{ color: userColor }}> {user} </b>: <div dangerouslySetInnerHTML={htmlMessage()} />
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
