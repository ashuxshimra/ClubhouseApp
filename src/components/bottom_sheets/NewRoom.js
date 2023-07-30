import React, { useState, useEffect } from 'react';
import style from '../../style/roomDetail.module.css';
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';

function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [cardDetail, setCardDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const[itemsVisible, setItemsVisible]= useState(true);
  // Simulating data fetching with useEffect
  useEffect(() => {
    // Replace this with your actual data fetching logic
    // For example, fetch data from an API endpoint or from props
    // This is just a placeholder to demonstrate the useEffect behavior

    // Simulating a delay to fetch data (1 second)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = {
        "members": [
            {
            "first_name": "Ashutosh",
            "last_name": "Mishra"
              },
              {
                "first_name": "Aryan",
                "last_name": "Saini"
              }
        ]
      };
      setCardDetail(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle the case when 'cardDetail' is null or doesn't have the 'members' property
  if (!cardDetail || !cardDetail.members) {
    return <div>Card data not available</div>;
  }

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className='d-flex align-items-center'>
            <a href='#' onClick={() => { props.setSheetVisible(false); }}>
              <img src='/images/arrow.png' alt='' className={style.arrow_icon} />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img src='/images/user-img.jpg' alt='' className={style.profile_img} />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div className='d-flex align-items-center justify-content-between flex-wrap' style={{ padding: "0.5em 1em" }}>
            {cardDetail.members.map((member, index) => (
              <div key={index} className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <div>
                 <img src='/images/user-img.jpg' alt=''/>
                  <p>*{member.first_name}</p>
                  {/* <p>{member.last_name}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button onClick={()=>{
            props.setSheetVisible(false);
          }}
          >
            <img src='/images/hand-peace.png' alt=''/> Leave Quietly!
          </button>
          <div>
            <button>
              <AiOutlinePlus/>
            </button>
            <button>
              <img src='/images/stopHandIcon.png' alt=''/>
            </button>
            {/* so in below we have a dynamic mic mute button , which if clciked will change the state of mic Mute VISIBILITY and if lciked it becomews true then in above , then MicMuteVisible icon renders , also here we have to make sure that if its true thenwe show micmutevisible button otherwise non mute button */}
            <button onClick={()=> setMicMuteVisible(!micMuteVisible)}>
             {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRoom;
