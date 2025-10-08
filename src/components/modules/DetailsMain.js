import React from 'react'

import styles from '@/modules/DetailsMain.module.scss'
import { MdOutlinePlace } from "react-icons/md";

function DetailsMain({data, setData}) {
  const {article, explanations, address, amenities, rules} = data
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p> { article } </p>
        <div className={styles.place}>
          <span> <MdOutlinePlace size={20}/> </span>
          <span> {address} </span>
        </div>
      </div>

      <div className={styles.explanations}>
        <p> توضیحات </p>
        <span className={styles.line}></span>
        <p> {explanations} </p>
      </div>

      <div className={styles.amenities}>
         <p> امکانات </p>
         <span className={styles.line}></span>
         <ul>
           {amenities?.map(item => (
            <li key={item._id}> {item.text} </li>
           ))}
         </ul>
      </div>

      <div className={styles.amenities}>
        <p> قوانین </p>
        <span className={styles.line}></span>
        <ul>
          {rules?.map(item => (
            <li key={item._id}> {item.sentence} </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DetailsMain