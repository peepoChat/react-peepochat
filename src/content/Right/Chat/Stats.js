import { Col } from 'react-bootstrap'

const styles = {
  body: {
    backgroundColor: '#46464970',
  },
}

export default function Stats() {
  return (
    <Col style={styles.body} xs={8} className='align-self-end'>
      Stats
    </Col>
  )
}
