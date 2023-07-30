import React,{useEffect,useState} from 'react'
import data from '../data/roomCard.json';
import style from '../style/roomCard.module.css'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs' 
function RoomInfoCard() {
  return (
    <div>
        {/* mapping through the data for room card */}
     {data.map((item)=>(
        <div>
        <div>
        <div className={style.roomCardContainer}>
            <h6>{item.title}</h6>
            <h2>{item.sub_title}</h2>
            <div className={style.roomMembers}>
            <div>
                <img src='/images/user-img.jpg' alt=''/>
                <img src='/images/user-img2.jpg' alt=''/>
                </div>
                <div>
         {/* mapping through the data for every member for one id */}
                {item.members.map((person)=>(
                    <p>{person.first_name} {person.last_name} <BsChatDots/></p>
                ))}
                <p className='d-flex align-items-center'>
                <span className='mr-2'>1.8</span> <BsFillPersonFill/>
                <span className='mx-2'></span>
                <span className="mr-2">5</span><BsChatDotsFill/>
                </p>
                </div>
            </div>
        </div>
        </div>
        </div>
     ))}
    </div>
  )
}

export default RoomInfoCard
