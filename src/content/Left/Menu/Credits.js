import { Card } from 'react-bootstrap'

export default function Credits() {
  return (
    <Card.Body className='menu-piece'>
      <Card.Title> - Credits - </Card.Title>
      <Card.Subtitle>Development</Card.Subtitle>
      <Card.Text>
        {' '}
        <a href='https://github.com/Creamket' rel='noreferrer' target='_blank'>
          Creamket_
        </a>{' '}
        - frontend <br />{' '}
        <a href='https://trefis.net/' rel='noreferrer' target='_blank'>
          trefis
        </a>{' '}
        - arrays <br />{' '}
        <a href='https://github.com/TimaFrolov' rel='noreferrer' target='_blank'>
          TimaFrolov
        </a>{' '}
        - idk
      </Card.Text>
      <Card.Subtitle>Sourse code</Card.Subtitle>
      <Card.Text>
        <a href='https://github.com/peepoChat' rel='noreferrer' target='_blank'>
          github
        </a>
      </Card.Text>
    </Card.Body>
  )
}
