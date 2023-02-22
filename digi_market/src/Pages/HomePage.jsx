import React from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from '../Components/SubNavbar'
import {Box,Image} from "@chakra-ui/react"
import ImageSlider from './ImageSlider'


// const slideImages=[
//   {
//     id:1,
//     url:"https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU"
//   },
//   {
//     id:2,
//     url:"https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-Series-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NjUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDQ5Lzk5NjA4ODU3ODA1MTAuanBnfGRkM2Y5OTExODVjYzYwNmY2ZWFhMDRjZDUzODhjMTAwNWRjNjQ5Yjg0NmI2ZTQzZGQ0MDViNmNhMTg2ZDJkZDc"
//   },
//   {
//     id:3,
//     url:"https://www.reliancedigital.in/medias/Personal-Care-Carousel-Banner-21-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NjA0OHxpbWFnZS9qcGVnfGltYWdlcy9oZGQvaDA0Lzk5NjQzNDAwMTkyMzAuanBnfDYwNDkxMGU4MDIyMzgzYWI0MWQ5NWZjNzZmMGMwMWNmMjg4NmU1YWE0ZDg1MWUxMTE3NmVkZGZmNjdhOTc1NjA"
//   },
//   {
//     id:4,
//     url:"https://www.reliancedigital.in/medias/OnePlus-Buds-Pro-2-CLP-Banner-14-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NTEwN3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDE3Lzk5NjA4ODU2NDk0MzguanBnfGI5ZTY2YWFhMmVmOWQ2N2YwZTcwM2JkODBmYzRlZWJjMWIxYjkxN2FkMWFlOTkyZTk5MGQ3OGE2OWI2NDI4Mjg"
//   },

// ]

function HomePage() {
  return (
    <>
  <Navbar/>
  <SubNavbar/>

  <Box>
     <Image src="https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-10-PM-8-AM-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjgxOXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGE3Lzk5NDk2NTc3NTk3NzQuanBnfDJiNzJkNDIzOWU2YWRkY2I2OTM1ZGYzOTk1NzVmYjI1M2JjYTY4MDA0MzhhMmRlODVkYTE1OGIzYjFhYzk1YjA" w="100%"/>
  </Box>

  </>
  )
}

export default HomePage