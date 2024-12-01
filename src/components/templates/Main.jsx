import React from 'react'
import { sp } from 'utils/number'

import styles from "../../css/Main.module.css"

function Main({data}) {
  console.log(data)
  const baseURL ="http://localhost:3400/"
  return (
    <div className={styles.container}>
      {
        data?.data.posts.map(i => (
          <div key={i._id} className={styles.card}>
            <div className={styles.info}>
              <p>{i.options.title}</p>
              <div >
                <p>{sp(i.amount)}</p>
                <span>{i.options.city}</span>
              </div>
              <img src={`${baseURL}${i.images[0]}`}  />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Main