import React from 'react'
import style from '../style/explore.module.css'
import { Link } from 'react-router-dom'
function SubHeader(props) {
  return (
    <div>
     <div className={style.head}>
        <Link exact to='/home'>
            <img src='/images/arrow.png' alt=''/>
        </Link>
        <h3>{props.pageTitle}</h3>
     </div>
    </div>
  )
}

export default SubHeader
