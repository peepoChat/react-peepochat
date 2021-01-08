import { ProgressBar } from 'react-bootstrap'

export default function Healthbar({ children, now }) {
  const styles = {
    wrapper: {
      width: '100%',
      position: 'relative',
      height: '20px',
    },
    children: {
      position: 'absolute',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      height: '20px',
      fontWeight: 600,
    },
  }

  return (
    <div style={styles.wrapper} className='mt-1'>
      <div style={styles.children}>{children}</div>
      <ProgressBar variant='danger' now={now} />
    </div>
  )
}
