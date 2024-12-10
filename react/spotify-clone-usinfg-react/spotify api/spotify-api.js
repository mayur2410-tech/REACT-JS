const express= require('express');
const app = express();
const port = 3000;
const cors = require ('cors')
app.use(cors())

const data = [
    {id:1,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true'},
    {id:2,title: 'Neffex Playlist',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true'},
    {id:3,title: 'K/DA',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true'},
    {id:4,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true'},
    {id:5,title: 'Dance / Electronic',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true'},
    // {id:6,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true'},
    // {id:7,title: 'Neffex Playlist',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true'},
    // {id:8,title: 'K/DA',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true'},
    // {id:9,title: 'Liked Songs',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true'},
    // {id:10,title: 'Dance / Electronic',img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true'}
];


app.get('/api/data', (req,res)=>{
    res.json(data);
})


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});