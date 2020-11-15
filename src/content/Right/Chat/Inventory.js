import { Col } from 'react-bootstrap'

const styles = {
  body: {
    backgroundColor: '#46464970',
  },
}

export default function Inventory() {
  return (
    <Col style={styles.body} xs={12} className='align-self-end'>
      Inventory
    </Col>
  )
}
