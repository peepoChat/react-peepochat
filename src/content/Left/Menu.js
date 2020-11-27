import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeTab } from '../../redux/actions'
import Achievements from './Menu/Achievements'
import Credits from './Menu/Credits'
import Logs from './Menu/Logs'
import Settings from './Menu/Settings'
import Shop from './Menu/Shop'

function Menu({ tabValue, changeTab }) {
  return (
    <Card className='bg-main'>
      <Card.Header className='row justify-content-around'>
        <Button variant={tabValue === 'settings' ? 'active' : 'second'} onClick={() => changeTab('settings')}>
          <svg
            width='1.8em'
            height='1.8em'
            viewBox='0 0 16 16'
            className='bi bi-gear-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z'
            />
          </svg>
        </Button>
        <Button variant={tabValue === 'shop' ? 'active' : 'second'} onClick={() => changeTab('shop')}>
          <svg
            width='1.8em'
            height='1.8em'
            viewBox='0 0 16 16'
            className='bi bi-basket2-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z'
            />
          </svg>
        </Button>
        <Button variant={tabValue === 'achievements' ? 'active' : 'second'} onClick={() => changeTab('achievements')}>
          <svg
            width='1.8em'
            height='1.8em'
            viewBox='0 0 16 16'
            className='bi bi-award-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z' />
            <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
          </svg>
        </Button>
        <Button variant={tabValue === 'logs' ? 'active' : 'second'} onClick={() => changeTab('logs')}>
          <svg
            width='1.8em'
            height='1.8em'
            viewBox='0 0 16 16'
            className='bi bi-terminal-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708z'
            />
          </svg>
        </Button>
        <Button variant={tabValue === 'credits' ? 'active' : 'second'} onClick={() => changeTab('credits')}>
          <svg
            width='1.8em'
            height='1.8em'
            viewBox='0 0 16 16'
            className='bi bi-file-earmark-code-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z'
            />
          </svg>
        </Button>
      </Card.Header>
      {tabValue === 'settings' ? (
        <Settings />
      ) : tabValue === 'shop' ? (
        <Shop />
      ) : tabValue === 'achievements' ? (
        <Achievements />
      ) : tabValue === 'logs' ? (
        <Logs />
      ) : (
        <Credits />
      )}
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    tabValue: state.menu.value,
  }
}

const mapDispatchToProps = {
  changeTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
