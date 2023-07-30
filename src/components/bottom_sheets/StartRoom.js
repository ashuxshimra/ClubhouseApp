import React ,{useState} from 'react'
import style from '../../style/bottomSheet.module.css'
import {FcGlobe} from 'react-icons/fc'
function StartRoom(props) {
    const[room, setRoom]=useState("open");
  return (
    <div>
      <div className={style.switch_Line}></div>
      <div className='text-right' >
        <button className={style.addTopicBtn}>+ Add a topic</button>
      </div>
      <div className={style.selectRoom}>
        {/* if the room status is already open then the button will be highlighjted active */}
        {/* hence styled the button based on the condition */}
        <button className={room=="open"?style.active:""} onClick={()=> setRoom('open')}>
         {/* wrapped in div as we want image and text upside down so ,when in div and after div cotainer something there then it comes after it  */}
        <div> 
        <FcGlobe/>
         </div>
         Open
        </button>
        <button className={room=="social"?style.active:""} onClick={()=> setRoom('social')}>
         {/* wrapped in div as we want image and text upside down so ,when in div and after div cotainer something there then it comes after it  */}
         <div> 
        <FcGlobe/>
        </div>
         Social
        </button>
        <button className={room=="closed"?style.active:""} onClick={()=> setRoom('closed')}>
         {/* wrapped in div as we want image and text upside down so ,when in div and after div cotainer something there then it comes after it  */}
         <div> 
          <FcGlobe/>
         </div>
         Closed
        </button>
      </div>
      {/* changing the text based on the button clicked */}
      <p>Start a room <span>{room == 'closed'? "for people I choose" :room=="social"? "with people I follow": "open to everyone"}</span></p>
      <div className='text-center'>
         <button className={style.letGoBtn }
        //  now in this when clicked then lets give it a loading effect that we used while poppingv sheet swipe up
         onClick={()=> 
         {
          props.setSheetCreateRoom(true);
          props.setSheetVisible(true);
         }}>
          🎉Let's go!
         </button>
      </div>
    </div>
  )
}

export default StartRoom
