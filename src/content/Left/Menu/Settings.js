import { Button, Card } from 'react-bootstrap'
import { changeTheme } from '../../../redux/actions'
import { connect } from 'react-redux'
import React from 'react'

class Settings extends React.Component {
  render() {
    return (
      <Card.Body className='menu-piece'>
        <Card.Title>Settings</Card.Title>{' '}
        <Button
          variant={this.props.themeValue === 'dark' ? 'dark' : 'secondary'}
          onClick={() =>
            this.props.onTheme(document.getElementById('theme').classList.contains('dark') ? 'light' : 'dark')
          }
          block>
          - Change theme: {this.props.themeValue === 'dark' ? 'Dark' : 'Light'}
        </Button>
      </Card.Body>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onTheme(newTheme) {
    dispatch(changeTheme(newTheme))
  },
})

const mapStateToProps = (state) => {
  return {
    themeValue: state.theme.value,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
