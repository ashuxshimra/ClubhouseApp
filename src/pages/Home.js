import React ,{useState} from 'react'
import Header from '../components/Header'
import DailyInfoCard from '../components/DailyInfoCard'
import style from '../style/home.module.css'
import RoomInfoCard from '../components/RoomInfoCard'
import {AiOutlinePlus} from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from '../components/BottomSheet'
import newRoomData from '../data//newRoom.json'
function Home() {
  const[itemsVisible, setItemsVisible]=useState(true);
  const[sheetVisible,setSheetVisible]=useState(false);
  const[sheetCreateRoom,setSheetCreateRoom]=useState(false);
  const[loaderVisibility,setLoaderVisibility]=useState(false);
  const[cardId,setCardId]=useState(1);
  return (  
  <div> 
    {/* if the laoderVisibility is true then we are making a cintainer within which we have loading gif */}
  {loaderVisibility ? (
    <div style={{
      position: "fixed",
      top:"0",
      right:'0',
      bottom: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>
      <img src='/images/loader.gif' alt=''/>
      </div>
  ) : (
    "" //otherwise nothing
  )}

  <Header/>
  {/* note DailyInfoCard was not working ,so we wrapped it around a div contaiuner and styled it in a way by padding from every ddirection that it actully appeared */}
  <div className={style.home_container}>
  <DailyInfoCard/>
   <RoomInfoCard/>
  </div>
  <div className={style.action_btn}>
    {/* when the button is clicked then we will set the swipe sheet to be true  */}
    <button onClick={()=> setSheetVisible(true)}>
     <AiOutlinePlus style={{marginRight: "4px"}}/>
     Start a Room
    </button>
    <button><BsGrid3X3Gap/></button>
  </div>
  {/* here now we have to put a sweipable bottom sheet to appear */}
  <BottomSheet 
  sheetTitle="start room"
  // belopw setSheetVisible takes true or false so passing an item and we are setting SheetVisible which will update sheeVisible
  setSheetVisible={(item)=>setSheetVisible(item)} //passing this function using props to BottomSheet component
  // doing below also refer the BottomSheet component where thios is used as props
  sheetVisible={sheetVisible}
  cardDetail={data.find((item)=>item.id==cardId)}
  setItemsVisible={(item)=> setItemsVisible(item)}
  setSheetCreateRoom={(item) => { //this will be activated when lets go button of startroom component is clicked that is true
    setLoaderVisibility(true);  
    setTimeout(()=>{
    setSheetCreateRoom(item);
    setLoaderVisibility(false);  
    }, 1000);
  }} />
  <BottomSheet sheetTitle="new room"
  setSheetVisible={(item)=>setSheetCreateRoom(item)}
  sheetVisible={sheetCreateRoom}
  cardDetail={newRoomData}
  setItemsVisible={(item)=>setItemsVisible(item)}/>
  </div>
  )
}

export default Home
