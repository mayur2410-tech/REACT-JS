import React, { useEffect, useState } from 'react'
import './mainmenu.css'
import axios from 'axios'

const API_KEY="AIzaSyCc2FW9RxNFSIo1jkHHoL4EjPTBB1-PGp8"
function Mainmenu() {

// main menu fetch api

    // const[main,setMain]=useState([]);
    // useEffect(()=>{
    //     fetch('https://youtube-api-duz1.onrender.com/api/main')
    //     .then(response=>{
    //         if(!response.ok){
    //             throw new Error(`HTTP error ${response.status}`)
    //         }
    //         return response.json()
    //     })
    //     .then(main=>{
    //         console.log(main)
    //         setMain(main)
    //     })
    //     .catch((error)=>console.error(`Error to fetch api`,error));
    // },[])

    const [videos, setVideos] = useState([]);




  useEffect(() => {
    // Fetch videos using YouTube API
    const fetchVideos = () => {
      axios.get("https://react-js-1-e58g.onrender.com/youtubedata", 
        // {
      //   params: {
      //     part: "snippet,statistics", // Fetch both snippet and statistics
      //     chart: "mostPopular", // This can be removed if not needed
      //     regionCode: "IN", // Change region code as needed
      //     maxResults: 4, // Limit results
      //     key: API_KEY,
      //   },}
      )
      .then(response => {
        // Set videos with only necessary details
        const simplifiedVideos = response.data.items.map(video => ({
          id: video.id,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          channelTitle: video.snippet.channelTitle,
          viewCount: video.statistics.viewCount, // Get view count from statistics
        }));
        setVideos(simplifiedVideos);
      })
      .catch(error => {
        console.error("Error fetching videos:", error);
      });
    };

    fetchVideos();
  }, []);

// sugesstion api fetch

const[suggestion,setSuggestion]=useState([])

useEffect(()=>{
    fetch('https://youtube-api-duz1.onrender.com/api/suggestion')
    .then(response=>{
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        return response.json()
})
.then(suggestion=>{
    console.log(suggestion)
    setSuggestion(suggestion)
})
.catch((error)=>console.error('error to fetch',error))

},[])



// search code

// const [searchQuery, setSearchQuery] = useState(''); // State for search query
// useEffect(() => {
//   if (searchQuery.trim() === '') return; // Skip if the search query is empty

//   const fetchSearchResults = () => {
//     axios
//       .get("https://www.googleapis.com/youtube/v3/search", 
//         {
//         params: {
//           part: "snippet,statistics",
//           q: searchQuery,
//           type: "video",
//           maxResults: 4,
//           key: API_KEY,
//         },
//       }
//     )
//       .then((response) => {
//         const searchResults = response.data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.high.url,
//           channelTitle: item.snippet.channelTitle,
//           // viewCount: item.statistics.viewCount, // Get view count from statistics

//         }));
//         setVideos(searchResults);
//       })
//       .catch((error) => {
//         console.error("Error fetching search results:", error);
//       });
//   };

//   fetchSearchResults();
// }, [searchQuery]);



// Handle search input submission
// const handleSearch = (event) => {
//   event.preventDefault();
//   const input = document.querySelector('.search-input').value;
//   setSearchQuery(input);
// };

const [searchQuery, setSearchQuery] = useState(''); // State for search query
useEffect(() => {
  if (searchQuery.trim() === '') return; // Skip if the search query is empty

  const fetchSearchResults = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: searchQuery,
          type: "video",
          maxResults: 50,
          key: API_KEY,
        },
      })
      .then((response) => {
        response.json
        const searchResults = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channelTitle: item.snippet.channelTitle,
        })
      );
        setVideos(searchResults);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  fetchSearchResults();
}, [searchQuery]);

// Handle search input submission
const handleSearch = (event) => {
  event.preventDefault();
  const input = document.querySelector('.search-input').value;
  setSearchQuery(input);
};
    return (
        <>
            <div className="mainmenu">


                <div className="nav-bar">

                    <div className="navbar">
                        <div className="search-container">
                            <input type="text" placeholder="Search" className="search-input" />
                            <div>
                                <button  onClick={handleSearch} className="search-button">
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
                    {videos.map((i) => (
                        <div key={i.id}>
                            <img src={i.thumbnail} className='img-main' />
                            <div id='logo1'>
                                <img src={i.thumbnail} className='logo-img' />
                            </div>
                            <p className='mayur'>{i.title}<br /></p>
                            <p className='thumbnail'>{i.viewCount}<br /> </p>
                        </div>

                    ))}


                </div>




            </div>




        </>
    )
}

export default Mainmenu;




// import React, { useEffect, useState } from 'react';
// import './mainmenu.css';

// function Mainmenu() {
//     const [searchQuery, setSearchQuery] = useState(''); // Search query state
//     const [videos, setVideos] = useState([]); // Videos state
//     const [error, setError] = useState(null); // Error state
//     const [loading, setLoading] = useState(false); // Loading state

//     const API_KEY = 'AIzaSyCc2FW9RxNFSIo1jkHHoL4EjPTBB1-PGp8'; // Replace with your YouTube API key

//     const handleSearch = async () => {
//         if (!searchQuery.trim()) return; // Don't search if input is empty

//         setLoading(true); // Start loading
//         setError(null); // Reset errors

//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//                     searchQuery
//                 )}&type=video&maxResults=10&key=${API_KEY}`
//             );

//             if (!response.ok) {
//                 throw new Error(`Failed to fetch videos: ${response.status}`);
//             }

//             const data = await response.json();
//             const fetchedVideos = data.items.map((item) => ({
//                 id: item.id.videoId,
//                 title: item.snippet.title,
//                 channel: item.snippet.channelTitle,
//                 thumbnail: item.snippet.thumbnails.medium.url,
//                 publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
//             }));

//             setVideos(fetchedVideos);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false); // Stop loading
//         }
//     };

//     const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     return (
//         <>
//             <div className="mainmenu">
//                 {/* Search Bar */}
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Search YouTube"
//                         className="search-input"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onKeyDown={handleKeyDown} // Trigger search on Enter key press
//                     />
//                     <button className="search-button" onClick={handleSearch}>
//                         <img
//                             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                             alt="Search"
//                             className="icon"
//                         />
//                     </button>
//                 </div>

//                 {/* Error Display */}
//                 {error && <div className="error">Error: {error}</div>}

//                 {/* Loading Indicator */}
//                 {loading && <div>Loading videos...</div>}

//                 {/* Videos Display */}
//                 <div className="video-list">
//                     {videos.map((video) => (
//                         <div key={video.id} className="video-item">
//                             <img
//                                 src={video.thumbnail}
//                                 alt={video.title}
//                                 className="thumbnail"
//                                 onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
//                             />
//                             <div className="video-details">
//                                 <h4 className="video-title">{video.title}</h4>
//                                 <p className="video-channel">{video.channel}</p>
//                                 <p className="video-date">{video.publishedAt}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainmenu;




