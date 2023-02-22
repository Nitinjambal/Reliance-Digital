import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom,Slide} from 'react-slideshow-image'
import HomePage from './HomePage'



const slideImages=[
  {
    id:1,
    url:"https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU"
  },
  {
    id:2,
    url:"https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-Series-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NjUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDQ5Lzk5NjA4ODU3ODA1MTAuanBnfGRkM2Y5OTExODVjYzYwNmY2ZWFhMDRjZDUzODhjMTAwNWRjNjQ5Yjg0NmI2ZTQzZGQ0MDViNmNhMTg2ZDJkZDc"
  },
  {
    id:3,
    url:"https://www.reliancedigital.in/medias/Personal-Care-Carousel-Banner-21-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NjA0OHxpbWFnZS9qcGVnfGltYWdlcy9oZGQvaDA0Lzk5NjQzNDAwMTkyMzAuanBnfDYwNDkxMGU4MDIyMzgzYWI0MWQ5NWZjNzZmMGMwMWNmMjg4NmU1YWE0ZDg1MWUxMTE3NmVkZGZmNjdhOTc1NjA"
  },
  {
    id:4,
    url:"https://www.reliancedigital.in/medias/OnePlus-Buds-Pro-2-CLP-Banner-14-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NTEwN3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDE3Lzk5NjA4ODU2NDk0MzguanBnfGI5ZTY2YWFhMmVmOWQ2N2YwZTcwM2JkODBmYzRlZWJjMWIxYjkxN2FkMWFlOTkyZTk5MGQ3OGE2OWI2NDI4Mjg"
  },

]

const divStyle={
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:"290px",
  backgroundSize:'cover'
}

function ImageSlider() {
  return (
    <div>
         <Slide>
          {
            slideImages.map((image,index)=>(
              <div key={index}>
                 <div style={{...divStyle,backgroundImage:`url(${image.url})`}}></div>
                
              </div>
            ))
          }
         </Slide>
    </div>
  )
}

export default ImageSlider