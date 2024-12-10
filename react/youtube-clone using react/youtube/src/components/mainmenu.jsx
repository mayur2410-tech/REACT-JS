import React, { useEffect, useState } from 'react'
import './mainmenu.css'


function Mainmenu() {


    const[main,setMain]=useState([]);
    useEffect(()=>{
        fetch('https://youtube-api-duz1.onrender.com/api/main')
        .then(response=>{
            if(!response.ok){
                throw new Error(`HTTP error ${response.status}`)
            }
            return response.json()
        })
        .then(main=>{
            console.log(main)
            setMain(main)
        })
        .catch((error)=>console.error(`Error to fetch api`,error));
    },[])

    const suggestion = [
        {id:1,sugg:'All'},
        {id:2,sugg:'Cook Studio'},
        {id:3,sugg:'UX'},
        {id:4,sugg:'Case Study'},
        {id:5,sugg:'Music'},
        {id:6,sugg:'Bangla Lofi'},
        {id:7,sugg:'Tour'},
        {id:8,sugg:'Saintmartin'},
        {id:9,sugg:'Tech'},
        {id:10,sugg:'iPhone 13'},
        {id:11,sugg:'User Interface Design'},
    ]

    return (
        <>
            <div className="mainmenu">


                <div className="nav-bar">

                    <div className="navbar">
                        <div className="search-container">
                            <input type="text" placeholder="Search" className="search-input" />
                            <div>
                                <button className="search-button">
                                    <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true'
                                        alt="Search" className="icon" />
                                </button>
                                <button className="mic-button">
                                    <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true'
                                        className="icon" />
                                </button>
                            </div>
                        </div>
                        <div className="navbar-icons">
                            <button className="icon-button">
                                <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true' />
                            </button>
                            <button className="icon-button">
                                <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true' />
                            </button>
                            <button className="icon-button">
                                <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true' />
                            </button>
                            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1.png?raw=true'

                                alt="User Profile"
                                className="profile-image"
                            />
                        </div>
                    </div>








                    <hr className='hr' />

                    <div className="suggestion">
                       {suggestion.map((i)=>(
                        <div key={i.id} className='navtext'>{i.sugg}</div>
                       ))}
                    </div>
                    <hr className='hr' />
                </div>







                <div className="strip">
                    {main.map((i) => (
                        <div key={i.id}>
                            <img src={i.img} className='img-main' />
                            <div id='logo1'>
                                <img src={i.logo} />
                            </div>
                            <p className='mayur'>{i.text}<br />{i.text1}</p>
                            <p className='thumbnail'>{i.thumbnail}<br /> {i.thumbnail1}</p>
                        </div>

                    ))}


                </div>




            </div>




        </>
    )
}

export default Mainmenu;