import { Button, Card } from 'react-bootstrap'
import { changeTheme } from '../../../redux/actions'
import { connect } from 'react-redux'

function Settings({ themeValue, changeTheme }) {
  function onTheme() {
    const newTheme = document.getElementById('theme').classList.contains('dark') ? 'light' : 'dark'
    changeTheme(newTheme)
  }

  return (
    <Card.Body className='menu-piece'>
      <Card.Title> - Settings - </Card.Title>{' '}
      <Button variant='second' onClick={() => onTheme()} block>
        - Change theme: {themeValue === 'dark' ? 'Dark' : 'Light'}
      </Button>
    </Card.Body>
  )
}

const mapDispatchToProps = {
  changeTheme,
}

const mapStateToProps = (state) => {
  return {
    themeValue: state.theme.value,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
