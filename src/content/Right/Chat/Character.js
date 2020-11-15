import { Col, Card } from 'react-bootstrap'

const styles = {
  body: {
    backgroundColor: '#46464970',
    alignItems: 'center',
  },
}

export default function Character() {
  return (
    <Col xs={4} className='align-self-end'>
      <Card style={styles.body} className='py-1'>
        <Card.Img
          variant='top'
          style={{ width: '90%', transform: 'scale(-1, 1)' }}
          src='https://cdn.betterttv.net/emote/5fa02a9c473f4802fe486934/3x'
        />
      </Card>
    </Col>
  )
}
