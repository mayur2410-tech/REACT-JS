import './spotify.css'


function Mainmenu(){


const data = [
    {id:1,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true'},
    {id:2,title: 'Neffex Playlist',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true'},
    {id:3,title: 'K/DA',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true'},
    {id:4,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true'},
    {id:5,title: 'Dance / Electronic',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true'},
    {id:6,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true'},
    {id:7,title: 'Neffex Playlist',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true'},
    {id:8,title: 'K/DA',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true'},
    {id:9,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true'},
    {id:10,title: 'Dance / Electronic',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true'}
];

const filtereven = data.filter(i => i.id%2==0);

const card =[
{id:1,title:'Weekly Motivation',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true'},
{id:2,title:'MEDITATION SELF',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true'},,
{id:3,title:'Words Beyound act.. ',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true'},
{id:4,title:'The Alexa show ',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true'},
{id:5,title:'The Stories Of Ma.. ',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true'},
{id:6,title:'Motivation Daily b.',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true'}
]



    return(
    <>
    
    
    
    <div className="cointainer2">
<img className="toparrow" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" />
<img className="user" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" />
</div>
    
<div className='h1'>
<h1 className="good">Good Morning</h1>
</div>
    
    {/* this is using map method */}
<div className="cointainer3">
    {filtereven.map((i)=> (
       <div key={i.id} className="likedviedo">
        <div><img className='liked1' src={i.img_url} /></div>
        <div className="te-xt"><p className="liked">{i.title}</p></div>
       </div>  
    )
    )}
</div>

{/* filter method */}






    
{/*     
<div className="cointainer3">
<div className="likedviedo">
<div> <img className='liked1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" /></div>
<div className='te-xt'> <p className='liked'>Liked Songs</p></div>
  </div>

<div className="likedviedo">
   <div> <img className='liked1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" /></div>
   <div className='te-xt'> <p className='liked'>Neffex Playlist</p></div>
  </div>

<div className="likedviedo">
   <div> <img className='liked1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" /></div>
   <div className='te-xt'> <p className='liked'>K/DA</p></div>
  </div>

<div className="likedviedo">
   <div> <img className='liked1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" /></div>
   <div className='te-xt'> <p className='liked'>Liked Songs</p></div>
  </div>

<div className="likedviedo">
   <div> <img className='liked1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" /></div>
   <div className='te-xt'> <p className='liked'>Dance / Electronic<br /> Mix</p></div>
  </div>
</div> */}



<h2>Shows you might like</h2>
<h4>SEE ALL</h4>

<div className="card">
{/* <div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" />
    <p>Weekly Motivation...</p>
</div>

<div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" />
    <p>MEDITATION SELF</p>
</div>

<div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" />
    <p>Words Beyound act..</p>
</div>

<div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" />
    <p>The Alexa show</p>
</div>

<div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" />
    <p>The Stories Of Ma..</p>
</div>
<div className="card1" >
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" />
    <p>Motivation Daily b.</p>
</div> */}


{card.map((i)=> (
<div key={i.id}className="card1">
<img src={i.img_url } />
<p>{i.title}</p>
</div>


))}

</div>
    
    
    </>
    )
}

export default Mainmenu;