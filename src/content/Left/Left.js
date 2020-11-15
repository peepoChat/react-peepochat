import { Col } from 'react-bootstrap'
import Menu from './Menu'

function Left() {
  return (
    <Col xs={12} sm={5} className='px-0 px-sm-3 align-self-center'>
      <Menu />
    </Col>
  )
}

export default Left
