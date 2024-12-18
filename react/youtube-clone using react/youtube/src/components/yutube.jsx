import React from 'react'

export const Yutube = () => {
  return (
    <div>
        <iframe 
          src="https://www.youtube.com"  // Replace with your desired video ID
          className="iframe"  
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
    </div>
  )
}
