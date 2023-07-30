import React from 'react'
import style from '../style/bottomSheet.module.css'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import StartRoom from './bottom_sheets/StartRoom'
import NewRoom from './bottom_sheets/NewRoom'
function BottomSheet(props) {
  return (
      <SwipeableBottomSheet 
      // here this swipe sheet will open based on the value of sheetVisible which is false initually
       open={props.sheetVisible}
       onChange={()=> {  //now here when it is changed that is on click on start a room button the state of visibility got true so now when clicked anywhere and changhed it will reverse the state and close the sheet
        props.setSheetVisible(!props.sheetVisible);
        //the items of card will then be visible 
        props.setItemsVisible(true);
      }}
    fullScreen={props.sheetTitle == 'room detail' ? true : false}
    >
      {/* nopw what will be inside of the sheet making a container of that  */}
    <div className={style.BottomSheetContainer} style={{backgroundColor: props.sheetTitle == 'profile'? 'transparent':''}}>
   {/* now inside the container we will have this content , so StartRoom is under separate sheet folder */}
   {/* now below this StartRoom will render based on seTSheetCreateRoom which you refer in home.js is used to handle loading bar*/}
     {props.sheetTitle=="new room" ? (
     <NewRoom 
     setSheetVisible={(item)=>{   //here passing this as props so that this can be used in NewRoom componengt
       // hence once the loading bar takes place then the StartRoom will render and once all this is done that is sheet is visible woith the content inside it lets also manage visibility state of sheet as well as done
       //u are defining setSheetCreateRoom here so that it couild be passed to the StartRoom component using props as when clicked there then we need loader, and when clicked on add new then we need to show items  
       props.setSheetVisible(item);
       props.setItemsVisible(true);   
     }}
     />
     ): props.sheetTitle=='start room'?(
     <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
     setSheetVisible={(item)=>{  
       // hence once the loading bar takes place then the StartRoom will render and once all this is done that is sheet is visible woith the content inside it lets also manage visibility state of sheet as well as done
       //u are defining setSheetCreateRoom here so that it couild be passed to the StartRoom component using props as when clicked there then we need loader, and when clicked on add new then we need to show items  
       props.setSheetVisible(item);
       props.setItemsVisible(true);   
     }}
     />) : ("")}
    
    </div>
    </SwipeableBottomSheet>
  )
  }
export default BottomSheet
