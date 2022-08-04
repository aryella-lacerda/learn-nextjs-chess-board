import styles from './index.module.css'
import { Space } from '../components/space'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
      {
        [...Array(8).keys()].map((column) => 
          [...Array(8).keys()].map((row) => 
            <Space 
              column={column} 
              row={row} 
              key={`${column}-${row}`}
            />
          )
        )
      }
      </div>
    </div>
  )
}
