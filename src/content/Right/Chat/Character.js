import { Col, Card } from 'react-bootstrap'

export default function Character() {
  return (
    <Col xs={4} className='align-self-end'>
      <Card className='py-1 bg-second align-items-center'>
        <Card.Img
          variant='top'
          style={{ width: '90%', transform: 'scale(-1, 1)' }}
          src='https://cdn.betterttv.net/emote/5fa02a9c473f4802fe486934/3x'
        />
      </Card>
    </Col>
  )
}
