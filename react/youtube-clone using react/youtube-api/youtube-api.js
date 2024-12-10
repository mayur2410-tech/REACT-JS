const express=require('express');
const app=express();
const cors = require ('cors')
app.use(cors())
const port=3000;

const main = [
    { id: 1, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
    { id: 2, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (2).png?raw=true', text: 'Infinix Note 12:', text1: 'AMOLED', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'ATC Android ToTo Company ', thumbnail1: '4.2M views 2 days ago' },
    { id: 3, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (3).png?raw=true', text: 'My first UX Design case study-', text1: 'This got me my first job.', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Saptarshi Prakash', thumbnail1: '4.8K views 1 years ago' },
    { id: 4, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (5).png?raw=true', text: 'My Mix', text1: '', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Lopamundra Mitra,Anupam Roy,and more', thumbnail1: '' },
    { id: 5, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (4).png?raw=true', text: 'UX Design-What is it?(From AJ', text1: '&Smart)', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'AJ&Smar', thumbnail1: '150K M views 3 years ago' },
    { id: 6, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (4).png?raw=true', text: 'Mix-Mombati | Mohon Sharif | Dhakaiya', text1: 'Dose | Mahib Ahsan ft Anika', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Mohon Sharif,Odd Signature,Shayan', thumbnail1: 'Chowdhury Arnob,and more' },
    { id: 7, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1.png?raw=true', text: '|48 VISA-FREE', text1: '', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Nadir On The Go', thumbnail1: '1.7M views 1 years ago' },
    { id: 8, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (6).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Mizko', thumbnail1: '53K views 1 years ago' },
    { id: 9, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
    { id: 10, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (3).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
    { id: 11, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 4 (6).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
    { id: 12, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (5).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
]

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

app.get('/api/main',(req,res)=>{
    res.json(main);
});

app.get('/api/suggestion',(req,res)=>{
    res.json(suggestion);
});

app.listen(port,()=>{
    console.log(`your Server is running on http://localhost:${port}`);
})