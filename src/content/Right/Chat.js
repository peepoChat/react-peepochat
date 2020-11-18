import { Card, Row } from 'react-bootstrap'
import Character from './Chat/Character'
import Enemy from './Chat/Enemy'
import Inventory from './Chat/Inventory'
import Stats from './Chat/Stats'

const styles = {
  chatBody: {
    height: '95vh',
  },
  row: {
    height: '100%',
  },
}

export default function Chat() {
  return (
    <Card className='py-0 bg-main'>
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
