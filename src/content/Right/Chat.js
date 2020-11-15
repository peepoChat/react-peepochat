import { Card, ProgressBar, Row } from 'react-bootstrap'
import Character from './Chat/Character'
import Enemy from './Chat/Enemy'
import Inventory from './Chat/Inventory'
import Stats from './Chat/Stats'

const styles = {
  chat: {
    backgroundColor: '#26262b70',
    borderStyle: 'solid',
    borderColor: '#18181b',
    borderWidth: '2px',
    borderRadius: '5px',
  },
  chatBody: {
    height: '95vh',
  },
  row: {
    height: '100%',
  },
}

export default function Chat() {
  return (
    <Card className='py-0' style={styles.chat}>
      <Card.Body className='py-1' style={styles.chatBody}>
        <Row className='justify-content-between' style={styles.row}>
          <Enemy />
          <Inventory />
          <Character />
          <Stats />
        </Row>
      </Card.Body>
    </Card>
  )
}
