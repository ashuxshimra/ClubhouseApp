import React from 'react'
import style from '../style/explore.module.css'
import {DownOutlined, FireOutlined} from "@ant-design/icons";
import data from '../data/Explore.json'
import { Input } from 'antd';
import SubHeader from '../components/SubHeader';
function Explore() {
  const {people, conversation}=data;
    return (
    <div>
      <div className={style.exploreContainer}>
        <div className={style.header}>
            <SubHeader pageTitle="EXPLORE"/>
            <Input style={{backgroundColor:"#f4f4f4",
                           borderRadius:"0.8em",
                           padding: "0.3em -1em",
                           border: "none",
                           boxShadow: "none"      
        }}
        size='large'
        placeholder='Find People and Clubs'
        prefix={<img src='images/search.png' width="15px"/>}
        ></Input>
        </div>
        <h6>PEOPLE TO FOLLOW</h6>
        <div className={style.peopleContainer}>
            {people.map((item) => ( //loop thgrough
                <div>
                    <div className='d-flex align-items-center'>
                        <img src='/images/user-img.jpg' alt=''/>
                        <div className='ml-2' style={{marginLeft:"8px"}}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <button>
                      Follow
                    </button>
                   
                    </div>
            ))}
            <button className={style.showMore}>
              Show more people <DownOutlined/>
            </button>
        </div>  
         {/* conversation cards */}
         <h6>
                        FIND CONVERSATIONS ABOUT...
                    </h6>
                    {/* here below styling done by makiing sure card appears in form of rows and columns and thus this is how containers */}
                    {/* It seems to be a class used for creating a layout row, often used with CSS frameworks like Bootstrap's grid system. */}
                    <div className='row mx-0' style={{backgroundColor: "#e7e4d5"}}>
                    {conversation.map((item)=>(
                        // The combination of these classes is commonly used to create a responsive layout with evenly spaced columns and proper spacing between elements in a grid-based design.
                   <div className='col-6 px-2 mb-3'>
                  <div className={style.conversationCard}>
                    <h6>
                        <FireOutlined/>
                        {item.title}
                    </h6>
                    <p>{item.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
      </div>
    </div>
  )
}

export default Explore
