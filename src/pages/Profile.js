import React from 'react'
import style from '../style/profile.module.css'
import {BsAt, BsUpload ,BsPlus} from 'react-icons/bs'
// the styling from exploremodulecss is very much similarly used here so instead of defining it all here , we can borror the styling like this
import exploreStyle from '../style/explore.module.css'
import { Link } from 'react-router-dom'
import {AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter} from 'react-icons/ai'
function Profile() {
  return (
    <div>
      <div className={style.profileContainer}>
        {/* so we style the header of profile exactlly how we did for explore page */}
        <div className={exploreStyle.header}>
         <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to='/home'>
                <img src='/images/arrow.png' alt='' 
                className={exploreStyle.arrow_icon}
                />
            </Link>
            <div className={style.actionBtn}>
                <BsAt/>
                <BsUpload/>
                <AiOutlineSetting/>
            </div>
         </div>
        </div>
        <img src='/images/user-img.jpg' alt='' className={style.profile_image}
        />
        <h4>Ashutosh Mishra</h4>
        <p>@shimrax</p>
        <div className={style.follow}>
          <p><span>2</span> followers</p>  
          <p><span>51</span> following</p>  
        </div> 
        <button>Add a bio</button>
        <div className='mb-0'>
            <button className='mb-0'>
            <AiOutlineTwitter/> Add Twitter
            </button>
            <button className='mb-0'>
            <AiOutlineInstagram/> Add Instagram
            </button>
        </div>
        <div className={style.nominated}>
        <img src='/images/user-img.jpg' alt=''/>
        <div>
            <p>Joined 14-July-2022</p>
            <p>Nominated by <span>Antan Alarcon</span></p>
        </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
            <BsPlus/>
        </button>
      </div>
    </div>
  )
}

export default Profile
