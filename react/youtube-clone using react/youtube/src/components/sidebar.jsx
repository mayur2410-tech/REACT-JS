import './sidebar.css'

function Sidebar() {

  const home_box = [
    { id: 1, title: 'Home', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true' },
    { id: 2, title: 'Explore', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true' },
    { id: 3, title: 'Shorts', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true' },
    { id: 4, title: 'Subscription', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true' },
 
   ]
  const task_box = [
    { id: 1, title: 'Library', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true' },
    { id: 2, title: 'History', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true' },
    { id: 3, title: 'Your Viedo', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true' },
    { id: 4, title: 'Watch later', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true' },
    { id: 5, title: 'Liked Viedos', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true' },
    { id: 6, title: 'Show More', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true' },
 
   ]
  const subscriptions = [
    { id: 1, title: 'Nadir On The Go', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1.png?raw=true' },
    { id: 2, title: 'Coke Studio Bangla', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (1).png?raw=true' },
    { id: 3, title: 'MKBHD', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (2).png?raw=true' },
    { id: 4, title: 'Figma', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (3).png?raw=true' },
    { id: 5, title: 'ATC Android ToTo C..', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (2).png?raw=true' },
    { id: 6, title: 'Alux.com', img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (5).png?raw=true' },
 
   ]





  return (
    <>
    
      <div className="main-cointainer">
        <div className="logo-box">
          <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true' />
          <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true' />
        </div>
      
        
        {home_box.map((i) => (
          <div key={i.id} className="home-btn">
            <img src={i.img} />
            <p>{i.title}</p>
          </div>


        ))}
  <hr />


    {task_box.map((i) => (
          <div key={i.id} className="home-btn">
            <img src={i.img} />
            <p>{i.title}</p>
          </div>
        ))}
  <hr />
<p className="subscription">SUBSCRIPTION</p>

{subscriptions.map((i) => (
          <div key={i.id} className="home-btn">
            <img src={i.img} />
            <p>{i.title}</p>
          </div>
        ))}







      </div>
    </>
  )
}
export default Sidebar;