import styles from './space.module.css'

const Space = ({ column, row }) => {
  return (
    <div className={
      column % 2 
        ? (row % 2 ? styles.white : styles.black) 
        : (row % 2 ? styles.black : styles.white)
      }
    />
  )
}

export default Space