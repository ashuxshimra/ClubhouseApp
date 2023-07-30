import React from 'react'
import style from '../style/dailyInfoCard.module.css'
import data from '../data/dailyCard.json'
function DailyInfoCard() {
  console.log(data)
    return (
    <div className={style.dailyCard}>
        {/* now we need to looppver the json data and show all the data items so we can use map as done and return obtained data using item variable */}
     {data.map((item)=>(
        <div>
            <span className=''>{item.time}</span>
            <div>
                <span>{item.title}</span>
                <p>{item.description}</p>
                </div>
                </div>
         
     ))}
    </div>
  )
}

export default DailyInfoCard
