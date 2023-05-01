import React from "react";
import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import { Box, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
// import ProductCarousel from "../Components/ProductCarousel"
import Carousel from "../Components/ProductCarousel";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index.js";

//sliderImages

const slideImages1 = [
  {
    id: 1,
    url: "https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU",
  },
  {
    id: 2,
    url: "https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-Series-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NjUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDQ5Lzk5NjA4ODU3ODA1MTAuanBnfGRkM2Y5OTExODVjYzYwNmY2ZWFhMDRjZDUzODhjMTAwNWRjNjQ5Yjg0NmI2ZTQzZGQ0MDViNmNhMTg2ZDJkZDc",
  },
  {
    id: 3,
    url: "https://www.reliancedigital.in/medias/Personal-Care-Carousel-Banner-21-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NjA0OHxpbWFnZS9qcGVnfGltYWdlcy9oZGQvaDA0Lzk5NjQzNDAwMTkyMzAuanBnfDYwNDkxMGU4MDIyMzgzYWI0MWQ5NWZjNzZmMGMwMWNmMjg4NmU1YWE0ZDg1MWUxMTE3NmVkZGZmNjdhOTc1NjA",
  },
  {
    id: 4,
    url: "https://www.reliancedigital.in/medias/OnePlus-Buds-Pro-2-CLP-Banner-14-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NTEwN3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDE3Lzk5NjA4ODU2NDk0MzguanBnfGI5ZTY2YWFhMmVmOWQ2N2YwZTcwM2JkODBmYzRlZWJjMWIxYjkxN2FkMWFlOTkyZTk5MGQ3OGE2OWI2NDI4Mjg",
  },
];

const slideImages2 = [
  {
    id: 1,
    url: "https://www.reliancedigital.in/medias/GOVO-Gosurround-900-CLP-Banner-03-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NTU5OHxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDMwLzk5NjA3OTg5NDUzMTAuanBnfDczZjA1MjFhY2Q3MTEzOWUyMDE1MzRiODYwNWM5OTNjYjFhODM0NWYwYzY4NDgzOWJkNjY1MmQ1NjgzZWM0N2Y",
  },
  {
    id: 2,
    url: "https://www.reliancedigital.in/medias/MacBook-Pro-CLP-Banner-31-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w3MDc1OHxpbWFnZS9qcGVnfGltYWdlcy9oMmMvaDlkLzk5NTU0OTI2MjY0NjIuanBnfDY1YTA2ZGYyYjU0YzQxZmFkMDk3MDQ5N2RmZmVlODg0MTczYWE5YWNlOTJkMDQ1NmMyMzAwNzFhNGY5MDM2MDA",
  },
  {
    id: 3,
    url: "https://www.reliancedigital.in/medias/One-Plus-11-CLP-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w3MDM0OHxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGUwLzk5NjI2MTEzMTA2MjIuanBnfGIxYTZiNzVkMjE4ZmEyY2E1NDQxMWExYWZkNGUzYTQyZDNiZTMxMWI5YmM2NWJmMjhkZWQzNzFhMjQ1ZTk5NzY",
  },
  {
    id: 4,
    url: "https://www.reliancedigital.in/medias/jiobook-Banner-1680x320.jpg?context=bWFzdGVyfGltYWdlc3wxMTYxMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hhNS85OTU2MjE0OTMxNDg2LmpwZ3wyOGE5ODcwYTUwYmI4ZjllZDc3NjQ4NzQyNGM5MTM0ZmViMjk1ZDVmYmE5Nzk5OTA5NzA4MzNiYzcyMmRjYzIw",
  },
  {
    id: 5,
    url: "https://www.reliancedigital.in/medias/JBL-CLP-Banner-21-02-2023.jpg?context=bWFzdGVyfGltYWdlc3wxNDY4ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gwYS85OTY0MzM5NzU3MDg2LmpwZ3w0ZWQxMjlkMjIxMjEzMGQ1MjMyM2Q2OTY3Mjk4ZTI3MDMwY2Q2Y2Y4M2NiMjQzMzY3YzE4OTQzMGYyMGMyYzc3",
  },
];

//slider products

const cards1 = [
  {
    heading: "boAt Airdopes 138 Twin Wireless Earbuds with IWP Technology",
    url: "https://www.reliancedigital.in/medias/boAt-Airdopes-138-Airdopes-491973383-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTY1fGltYWdlL2pwZWd8aW1hZ2VzL2gyMS9oNDAvOTkwNDQ4NjY3ODU1OC5qcGd8OGMyZjU0OGZmN2RmMDg5ZGQwNzU1ZjAyMmE1YWMxNWQ5NDU4MzdkZmRmNTQ0ZDI3N2I4Nzg5YzJmMjgwMDA3Mw",
    price: 2000,
  },
  {
    heading: "boAt Flash Edition Smart Watch with Activity Tracker",
    url: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",
    price: 500,
  },
  {
    heading:
      "boAt Rockerz 235V2  bluetooth Wireless Neckband with IPX5 Sweat and Water Resistance",
    url: "https://www.reliancedigital.in/medias/Boat-Rockerz-235-V2-Earphones-492579328-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQwNXxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDdjLzk3NjUzNzM0MTEzNTguanBnfDk1MDg1YmQ4MzFlYTIxZTE4NGExMDZkYjdjMmQwODllNzkyNTQxNGY1YTIwNDY3NjM3NzI3N2EwNjdhZDhiZjU",
    price: 1000,
  },
  {
    heading: "boAt Wave Lynk Voice Smartwatch with Bluetooth Calling",
    url: "https://www.reliancedigital.in/medias/boAt-Lynk-Voice-Smart-Watch-493664886-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oNDQvaDI1Lzk5NDk3Njk2Mjk3MjYuanBnfDhmOGE5ZjdhOTM2ZWE5NGM2OGQzYjYzMGIzMmEyMzQyYjU2MzlmMGFlYjQ4ZWU3OTQwYjAxNDA5OTUzZTk4YzU",
    price: 700,
  },
  {
    heading:
      "boAt Airdopes 148 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime",
    url: "https://www.reliancedigital.in/medias/boAt-Airdopes148-TrueWireless-492579512-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODQxNHxpbWFnZS9qcGVnfGltYWdlcy9oODMvaDIwLzk4MTY0MDE1MTA0MzAuanBnfDA2YzYxZGIxZmViZGE4MmY4ZTI0MTI0MmNhMDY1YzYzYTI1NjQzZjY4YWMyY2ZkNjNhYWYzZTUwNTE0NmE1Yzk",
    price: 800,
  },
  {
    heading: "boAt Flash Edition Smart Watch with Activity Tracker",
    url: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574194-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MjAzNnxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaGZmLzk3NTU3NzkyMDMxMDIuanBnfDQ3OGM5MjJhYzNkMjcwZTY1MWNmYzAxMTc5ODYwOThkY2UyZjc1NzVjZGRiYmMyMjIwYWI0YTcyOTA5OTBjZjg",
    price: 1500,
  },
  {
    heading: "boAt Flash Edition Smart Watch with Activity Tracker",
    url: "https://www.reliancedigital.in/medias/boAt-Lynk-Voice-Smart-Watch-493664887-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjA5MnxpbWFnZS9qcGVnfGltYWdlcy9oOTkvaDcxLzk5NDk3NjkzMDIwNDYuanBnfDk0ODg4NGQzN2Y3YzRlNGI1YmE4Nzk2ZmU1NGZiYzBhYTkyNTg3ZTg1YmFjN2EzNzQwYzAyMzYxZTQwMWJhZGM",
    price: 2000,
  },
  {
    heading: "boAt Airdopes 138 Twin Wireless Earbuds with IWP Technology",
    url: "https://www.reliancedigital.in/medias/boAt-Aavante-Bar-908-Sound-Bar-493179276-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjA1N3xpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDQ2Lzk5MTA4MDIwODc5NjYuanBnfDY0YmExZDEwMjgwZmRlOTEwYTlmYWFiOGIwMzRlZmY2NjcyYWM5N2M4NDJjMGFhZGE3MWYzMmRmODQ1YWYzZWI",
    price: 200,
  },
];

const cards2 = [
  {
    heading:
      "Apple Watch Series 8 GPS + Cellular 45mm Midnight Aluminium Case with Midnight Sport Band",
    url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177937-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NjAyN3xpbWFnZS9qcGVnfGltYWdlcy9oZjcvaGE0Lzk4OTE5NDUwNTQyMzguanBnfDUzMWY2ZWFjYTBiMzAzZDA3MjFlOGRiOTlhZjQyYjMzNzFjNmZjYTQyMzNmYWYwNzUzYjdjODlkZmU2Y2UxZDU",
    price: 2000,
  },
  {
    heading:
      "Apple Watch Series 8 GPS 41mm Midnight Aluminium Case with Midnight Sport Band",
    url: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",
    price: 500,
  },
  {
    heading:
      "Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Midnight Ocean Band",
    url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177936-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NDEwMHxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaGY4Lzk4OTE5NDQwNzExOTguanBnfGZkYTM5ZjVjYTNlOWVhMDVmMjQwOGU1YmI5YjQxOGZiNDhlZGY2YTY2NzM1ZTU3YWE4ZTViNDlmNmFmNTQxM2I",
    price: 1000,
  },
  {
    heading:
      "Apple Watch Series 8 GPS 41mm Starlight Aluminium Case with Starlight Sport Band",
    url: "https://www.reliancedigital.in/medias/Apple-Series-8-Sports-Fitness-Watches-493177899-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjI3NHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGQzLzk4OTE4ODc3MTAyMzguanBnfDkxOWE5MThkMjliMDQzYjg1ZDQ5ZGE2ZmIxNWU3OWM5ZDc5N2JiMjE1MzZlNWY1MjcxNzZjOTEwMDU0ZDg5NDY",
    price: 700,
  },
  {
    heading:
      "Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Orange Alpine Loop - Medium, Precision dual-frequency GNSS",
    url: "https://www.reliancedigital.in/medias/Apple-SE-Sports-Fitness-Watches-493177926-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDk1OXxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDJkLzk4OTE5OTE5NzgwMTQuanBnfDdjNDY1NzJlNjlkNjg0MmZiZDQ2MTBjNzM0ZmY1NTZhYjExYTZlYTk2MmVlNDRmYzU4Yjc5MTNhZDkyOTZkNjc",
    price: 800,
  },
  {
    heading:
      "Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Yellow/Beige Trail Loop - S/M, Precision dual-frequency GNSS",
    url: "https://www.reliancedigital.in/medias/Apple-Series-8-Sports-Fitness-Watches-493177915-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTI1MHxpbWFnZS9qcGVnfGltYWdlcy9oYWYvaGNmLzk4OTE5MDY3MTU2NzguanBnfDVlODVlZGRmYTE0ZWYyNjQ3MDliOTQxZDljZWJjNjU4OWYyZDlkZmY2MjFhODJkYjUzNDVjZmExN2VkODNhYjE",
    price: 1500,
  },
  {
    heading:
      "Apple Watch SE (2nd Generation) GPS 40mm Silver Aluminium Case with White Sport Band",
    url: "https://www.reliancedigital.in/medias/Apple-SE-Sports-Fitness-Watches-493177921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjk1M3xpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDhhLzk4OTE5ODYwNzk3NzQuanBnfGVkNWZhOGU5YjI5NjZhNjQ3ZjUwNjZjYmRhNTU5YmVjOTMzZmFiZDA1YjY1NmExZjRhNGY0N2I3ODg4NzQxMzg",
    price: 2000,
  },
  {
    heading:
      "Apple Watch Series 8 GPS + Cellular 45mm Silver Aluminium Case with White Sport Band",
    url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177934-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODc2NHxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDY3Lzk4OTE5MzgxNzI5NTguanBnfDFmMGJiNGQzMTVlMDk1ZGUzNDgyYzEyMjRiNWRlYjUxMGUwNmZkNjgzMTExMGJhMWVmNGU3YWVhOTYzZGM2MjU",
    price: 200,
  },
];

// const cards3=[
//   {heading:"Lifelong 3 litre Instant Geyser with Advanced Level Safety, LLWH110, White",url:"https://www.reliancedigital.in/medias/Lifelong-LLWH110-Instant-Geyser-493620662-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTY2MXxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaGM4Lzk4OTkyMzY1ODk1OTguanBnfGEyNmM0NjlhM2Y2NDlkOWU2MGQ2MmQ0YTJjZjMzNDUyNDM1NTJhMGRjMDIwYWQ2YjA0NGFiYzU2YWEwNmY2MmQ",price:2000},
//   {heading:"Eureka Forbes Maxima 7 litres RO + UV + MTDS ME Water Purifier (White)",url:"https://www.reliancedigital.in/medias/EUREKA-GWPDMRUMM00000-Water-Purifier-492911044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE3N3xpbWFnZS9qcGVnfGltYWdlcy9oODAvaDdhLzk4MzUxODgzODc4NzAuanBnfGFmNzJjMmZlOWM1MGM2Y2QzYzhmNTE3ZDFlMTc4YTg2YjJkYzk1ZGIwNDU5ZTk3NDAyYzk5ZDAzODI3M2QwMzQ",price:9000},
//    {heading:"Candes 25 litres Storage Water Geyser ABS Body (Gracia)",url:"https://www.reliancedigital.in/medias/Candes-Gracia-Geysers-493620541-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzI0N3xpbWFnZS9qcGVnfGltYWdlcy9oNTMvaDc5Lzk4Nzg5NTY5MzMxNTAuanBnfGM1ZWY4NThiODM5NjY3MTNmY2VkMThkNDJhMWYyNjY4YjEyMjAxM2M0OTQyNTZiYjJiMjEwMmEzNTE3OTM4OGE",price:3000},
//    {heading:"Lifelong LLCF150 High Speed Decorative Premium Ceiling Fan (1200MM, Coffee Brown)",url:"https://www.reliancedigital.in/medias/Lifelong-LLCF150-FANS-492910946-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTk4MHxpbWFnZS9qcGVnfGltYWdlcy9oMmQvaDNiLzk4MzEwMDcxMjU1MzQuanBnfDdhNjMwMzQ3MDY1YjUwZTMxZWUwZGE3NzVmOWVjOGQ5OTA2YzgyMTBkOGIzYThhN2QzMDRlNjFiOWY5NTlhYzA",price:1000},
//   {heading:"Sansui JSE37RIC-KAZE 37 Litres Portable Air Cooler with Dust & Mosquito Filter",url:"https://www.reliancedigital.in/medias/SANSUI-JSE37RIC-KAZE-AIR-COOLER-492664422-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MDA5MnxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDgwLzk3Nzk0MzYzMjI4NDYuanBnfDRlY2QzNWZlZjNhOGM2MWRmOWU5Y2EyNWVmOWNlYjY0M2EyYmNmZjdjODc1MzczN2M4YzIwMDYxNTNlMzc3OTU",price:8000},
//   {heading:"Hindware Calisto 7 Litres RO+UV+UF Water Purifier with Smart LED Indicators, White",url:"https://www.reliancedigital.in/medias/Eufy-Robovac-11s-Vacuum-Cleaners-491891985-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTA2NHxpbWFnZS9qcGVnfGltYWdlcy9oZTAvaDY1LzkzNjA2MjQxMjM5MzQuanBnfGI2ZWM1NjVhNzU3ZGVjMTJjMTI2MWQzYzQ1ZmI5NWZlMzZkNTc0YmQ1YzEzYWEzYmRjOWUzYTc2ZTNiMjU2YzU",price:1500},
//   {heading:"Candes Acura 1200 mm High Speed BLDC Ceiling Fan with Smart Remote, Brown",url:"https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MzU5fGltYWdlL2pwZWd8aW1hZ2VzL2g5MS9oN2IvOTc0NDQ0NzMwNzgwNi5qcGd8MzM4MWE0NzdmMzIwODQ1NDU3ODE0YTY1YjNlY2JlODYxNmFlZGUyYjFlYzRkODQ5YjkzMDZlNmQyYzQ2MjFmZA",price:2000},
//   {heading:"Mandes mm High Speed  Ceiling Fan with Remote, Brown",url:"https://www.reliancedigital.in/medias/CANDESAR-Acura-Fans-492664655-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjE0MHxpbWFnZS9qcGVnfGltYWdlcy9oZTMvaGM0Lzk3ODc0MTgxMTYxMjYuanBnfDNkOGE3NzViM2E1NjFkYjIyOTcxYTgyOGE0ZjY2NDdhNjZiNGUxNjBjODNhOGVlMzEyZjQ0YmU3OWYxNTE2NzA",price:3000},
// ];

const cards4 = [
  {
    heading:
      "Lifelong 3 litre Instant Geyser with Advanced Level Safety, LLWH110, White",
    url: "https://www.reliancedigital.in/medias/Philips-HD9270-70-Airfryer-492572874-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTc2MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Ni9oMWYvOTg0MzEyNTQ1MjgzMC5wbmd8MTBkOTJlZWU0ZWI0MDA0Y2FhZjNkMjYzNzlkZDU1MzkyMzEzOTI5NjU3YjMwMTZlZDAxMzFkNDcyMWVjZjU3Yg",
    price: 2000,
  },
  {
    heading:
      "Eureka Forbes Maxima 7 litres RO + UV + MTDS ME Water Purifier (White)",
    url: "https://www.reliancedigital.in/medias/Lifelong-Infinia-Juicer-Mixer-Grinder-492391909-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDNjLzk2NDk2NDg1MDA3NjYuanBnfDViM2QyYTQ0NGJkMDYyNTZiZWEyM2MxNTJkNWM2Mjc2OTZhZmI5ZmRkNGViNzY5MGM4ZDRjMDE3NGNhMjEwZGU",
    price: 9000,
  },
  {
    heading: "Candes 25 litres Storage Water Geyser ABS Body (Gracia)",
    url: "https://www.reliancedigital.in/medias/Philips-Viva-Collection-HL7701-00-Mixer-Grinder-491265144-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDYyMHxpbWFnZS9qcGVnfGltYWdlcy9oMjUvaDk5Lzg5MzA2ODY5OTI0MTQuanBnfDY0ZGVhYzlkMTA2ODkwNjU3ZTAzNWI0N2I2ZjI5MmNmMGE4ZTBkYzY4OTQxZDI3Njc2MmM5Y2U2NmE3MTYxZDk",
    price: 3000,
  },
  {
    heading:
      "Lifelong LLCF150 High Speed Decorative Premium Ceiling Fan (1200MM, Coffee Brown)",
    url: "https://www.reliancedigital.in/medias/Greenchef-Sparkle-Induction-Cooktops-493620560-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDQ4MXxpbWFnZS9qcGVnfGltYWdlcy9oMDEvaDU3Lzk5MDM2OTIzNDk0NzAuanBnfGQxYzQxOGRiMzBjODRlMzViMmNkZDFiODk4MTJlM2MyNjY0MzIzMzJjOGM5M2JiZDE5NGM5NjBkYTk2ZTk2MDY",
    price: 1000,
  },
  {
    heading:
      "Sansui JSE37RIC-KAZE 37 Litres Portable Air Cooler with Dust & Mosquito Filter",
    url: "https://www.reliancedigital.in/medias/Ambrane-AHD-21-HairDryersandStylers-492664658-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYjkvaDliLzk4ODc2Njc3NDg4OTQuanBnfDdiZThjZmVkMzQ1NzAxZmUxMTAxNzVlN2E3MzM2Y2UzZmIxM2RlYTlkYzNlYjgzNDZkOWE4ZDc4OTM5YjA1MDU",
    price: 8000,
  },
  {
    heading:
      "Hindware Calisto 7 Litres RO+UV+UF Water Purifier with Smart LED Indicators, White",
    url: "https://www.reliancedigital.in/medias/Bosch-MGM8842MIN-Mixer-Grinder-491891755-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDBhLzkzNzYxOTUxNDk4NTQuanBnfGFhMjA2ZDcxMmUxNTg2Mzg3ZGZhMjJhMmZiYzVhYmQ5NWM3OTBjYjJiMGU4OTFmYTk2ZWI0MDgwOTk0MjcyMTY",
    price: 1500,
  },
  {
    heading:
      "Candes Acura 1200 mm High Speed BLDC Ceiling Fan with Smart Remote, Brown",
    url: "https://www.reliancedigital.in/medias/Lifelong-LLPCM17-Personal-Care-492910978-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjEwOHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDM4Lzk4OTgzMDg5NjAyODYuanBnfDdmYTFmYWVkZTdiMzUyNjJlYThiMDcyYmIyMzdlODcxMzlkYWU5N2I5NjBjOTgwOTY1ZWZiYWYwZmQyMzcxZDk",
    price: 2000,
  },
  {
    heading: "Mandes mm High Speed  Ceiling Fan with Remote, Brown",
    url: "https://www.reliancedigital.in/medias/Orient-Electric-3134817112010-Fan-493627369-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjI0N3xpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDFjLzk5MzY1MDg3NDc4MDYuanBnfGU4YjVmNmJjNmQzNTRlM2Q3YTc3ZmM4NjUyN2MwYmNmMGMxYjhhZWJlMDJlOTE4M2RmNmFhMTRmYTRjYjJjMDU",
    price: 3000,
  },
];

const cards5 = [
  {
    heading:
      "Lenovo L2IN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4 /8GB/256GB SSD/Intel UHD",
    url: "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM5M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDE0Lzk0NDMwODM3ODAxMjYuanBnfGUwMGRjNjBhZDVlM2NlMmUyYmFhMTk1MjNmMDM5NTEzMWUzODRhODE0ZjdmOWM2OGEyODBjYjhjMGNlOWExZWY",
    price: 25000,
  },
  {
    heading:
      "Lenovo IdeaPad 3 Laptop (11th Gen Intel Core i5-1135G7/8 GB/512 GB SSD/Windows 11 Home/MSO/FHD)",
    url: "https://www.reliancedigital.in/medias/Hp-6N044PA-ACJ-Laptop-493177596-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYwMHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDMwLzk4ODIyOTA4NDc3NzQuanBnfDgzNzE4ZTExMDNkZmY1YmM2MzQyMWUwY2Y2NGRjMTA1MDJjNDVkNjQ5MTk0ZWIyMTA2NWQwY2I2MWNjOGQzZWI",
    price: 39000,
  },
  {
    heading:
      "Lenovo IdeaPad 5 Laptop (12th Gen Intel Core i5-1235U/16 GB/512 GB SSD/Windows 11 Home/MSO/FHD)",
    url: "https://www.reliancedigital.in/medias/Lenovo-82H701DNIN-Laptop-493178905-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzk1OXxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaDNiLzk5MTU0OTQ4MjYwMTQuanBnfDVmOGM3MzNkZWU2YjA4ZTNiNjlhYzgyOWQwMDA2ZTRiNzA5OWQ0ODhmZTI2YWQyMjJmNzcyMGFlMTc2NGM3Njg",
    price: 30000,
  },
  {
    heading:
      "HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB SSD/Radeon Graphics/Windows 11 Home/MSO/HD)",
    url: "https://www.reliancedigital.in/medias/HP-6Q2M3PA-ACJ-Laptop-493177049-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oZDgvaDYyLzk4NjQyODcwNTk5OTguanBnfGI5YjAxYjQ4MjliZjhjODU0NWY0NjJkODQ0MmJhZmI5Y2RmZTQ1NGZhZTg2MWFiOTRjMjQ2MzdjMzIwODg4Yjk",
    price: 41000,
  },
  {
    heading:
      "Lenovo IdeaPad 5 Laptop (12th Gen Intel Core i5-1235U/16 GB/512 GB SSD/Windows 11 Home/MSO/FHD)",
    url: "https://www.reliancedigital.in/medias/Lenovo-L2IN-Laptops-492574725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGQyLzk3NDczMjk5NzQzMDIuanBnfDMxMDY2NDQ1MjE3ZDFjOTZiNjRmYTE0NTlhNmYzMWZmNGNjNjY3NzhkZjE2MTdlZTZmMzE2Yjc3NDBmNjYwMGU",
    price: 27000,
  },
  {
    heading:
      "HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB SSD/Radeon Graphics/Windows 11 Home/MSO/HD)",
    url: "https://www.reliancedigital.in/medias/Lenovo-L2IN-Laptops-492574725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGQyLzk3NDczMjk5NzQzMDIuanBnfDMxMDY2NDQ1MjE3ZDFjOTZiNjRmYTE0NTlhNmYzMWZmNGNjNjY3NzhkZjE2MTdlZTZmMzE2Yjc3NDBmNjYwMGU",
    price: 55000,
  },
  {
    heading:
      "Candes Acura 1200 mm High Speed BLDC Ceiling Fan with Smart Remote, BrownApple MLXW3HNA MacBook Air (Apple M2 Chip/8GB/256GB SSD/macOS Monterey/Liquid Retina)",
    url: "https://www.reliancedigital.in/medias/Lenovo-82K101ECIN-Laptop-493177188-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTE2OXxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDJmLzk4OTIwNTQ3NjE1MDIuanBnfDk4Yjk5NGI4N2I4MDE2ZGQ5ODFlZDEzNTA1OWYwMmZkYTBjMzA5NDhjOTk4NjUzODcwYjdhODljNTE4MTk4Y2Y",
    price: 29000,
  },
  {
    heading:
      "Lenovo IdeaPad 5 Laptop (12th Gen Intel Core i5-1235U/16 GB/512 GB SSD/Windows 11 Home/MSO/FHD)",
    url: "https://www.reliancedigital.in/medias/HP-ER1501AU-Laptop-493178397-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDIyLzk5MDE1NTA5Mjc5MDIuanBnfDlkOGRhZGEyOWMyZWQzNTI2YTc4ZTY5ODJhYjBlNTRlZDg5YmQ5YTczM2Q2MTg0ZGRkYTE3Y2IyMmI1NTQzMDY",
    price: 30000,
  },
];

const cards6 = [
  {
    heading: "Dell MS116 Wired Optical Mouse, Black",
    url: "https://www.reliancedigital.in/medias/Dell-MS116-WIREDMOUSE-492574806-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjMwfGltYWdlL2pwZWd8aW1hZ2VzL2g3MC9oMTgvOTc3NDYwMzY5ODIwNi5qcGd8MmE5NmZkMTM2NTcwYTRjMWZkZDYxZjIxY2VlNzdkMzQwY2Y2ZWEzYTVkNWRkZjdmZjlmNTEzYzVmMTFhZDVkYQ",
    price: 500,
  },
  {
    heading: "HP 150 USB 2.0 Optical Wired Mouse 1600 DPI Resolution (Black)",
    url: "https://www.reliancedigital.in/medias/HP-150-Mouse-492574750-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDg5MnxpbWFnZS9qcGVnfGltYWdlcy9oMjcvaGYyLzk3NTkzNDU2Mzk0NTQuanBnfDg2ZWNiMWYxZDFmYWVkNWViNDJkYjVkNjA3YmJlMDYxYTM5MjhkYzk0NjUzZTEyOGFlOTFjODNkMjQ4N2NmNDM",
    price: 600,
  },
  {
    heading: "HP 150 Wired Keyboard and Mouse Combo (240J7AA)",
    url: "https://www.reliancedigital.in/medias/HP-150-Keyboards-493177210-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzgyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDEwLzk4Njc1NzQxMTYzODIuanBnfDEyN2U2MmUyZWEyODhhNTI0OTE0M2NlMTg5ZmM4NTgxYmZjYjMyMmE0NDdjOThmODU4NDBmZDA3Mzk4OTc5NmQ",
    price: 300,
  },
  {
    heading: "HP 15s-er1501AU Standard Laptop Mouse",
    url: "https://www.reliancedigital.in/medias/HP-X500-Mouse-492574752-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTIwfGltYWdlL2pwZWd8aW1hZ2VzL2hmYi9oYjAvOTc1OTM0ODkxNjI1NC5qcGd8MDg2YTliOGJlN2FkOWZlMzAwZDljOTk2NTBhZWQ1NDI4MzQxZjVhZTk4MmQwODVmYWEwYTlkNTU1MDhmOWRlNA",
    price: 400,
  },
  {
    heading:
      "Lenovo IdeaPad 5 Laptop Keyboard (12th Gen Intel Core i5-1235U/16 GB/512 GB SSD/Windows 11 Home/MSO/FHD)",
    url: "https://www.reliancedigital.in/medias/Logitech-K120-Keyboards-490743969-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTA3NnxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGU5Lzg5ODU2ODc3NTI3MzQuanBnfDU2MGQ2ZTVlZTg4ZDQ5NTUzYzg0YzNkM2IxODVlNGI5NTEzMGU1MWE4MDhmZTNlZjA4M2U2OWJmNWQzNmQ1ZDc",
    price: 700,
  },
  {
    heading: "HP 15s-er1501AU Standard Mouse ",
    url: "https://www.reliancedigital.in/medias/HP-150-Mouse-492574751-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzM0NXxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaDc5Lzk3NTkzNTA1NTQ2NTQuanBnfGY1ZmM0NjEzMWFjZjEzYzZjNWVkMTA0Nzc0MGFhZjY4NDcxYzNiZTIzOGJjMjU4ZDVlNzMyMzAxZjAxNjdiOTE",
    price: 500,
  },
  {
    heading: "HP 150 Wired Keyboard and Mouse Combo (240J7AA)",
    url: "https://www.reliancedigital.in/medias/HP-150-Keyboards-493177210-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzgyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDEwLzk4Njc1NzQxMTYzODIuanBnfDEyN2U2MmUyZWEyODhhNTI0OTE0M2NlMTg5ZmM4NTgxYmZjYjMyMmE0NDdjOThmODU4NDBmZDA3Mzk4OTc5NmQ",
    price: 200,
  },
  {
    heading: "HP 15s-er1501AU Standard Mouse ",
    url: "https://www.reliancedigital.in/medias/HP-X500-Mouse-492574752-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTIwfGltYWdlL2pwZWd8aW1hZ2VzL2hmYi9oYjAvOTc1OTM0ODkxNjI1NC5qcGd8MDg2YTliOGJlN2FkOWZlMzAwZDljOTk2NTBhZWQ1NDI4MzQxZjVhZTk4MmQwODVmYWEwYTlkNTU1MDhmOWRlNA",
    price: 300,
  },
];

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/products/all`,{
      withCredentials:true,
    })
    .then((res) =>
    // console.log(res.data.products)
     setData(res.data.products)
    ).catch((err)=>{
    console.log('err:', err)
    })
  }, []);

  // console.log(data)
  return (
    <>
      <Navbar />
      <SubNavbar />

      <Box>
        <Image
          src="https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-10-PM-8-AM-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjgxOXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGE3Lzk5NDk2NTc3NTk3NzQuanBnfDJiNzJkNDIzOWU2YWRkY2I2OTM1ZGYzOTk1NzVmYjI1M2JjYTY4MDA0MzhhMmRlODVkYTE1OGIzYjFhYzk1YjA"
          w="100%"
        />
      </Box>

      <ImageSlider details={slideImages1} />

      <Box fontSize={"30px"} margin={"20px"}>
        {" "}
        Special Offers on Boat
      </Box>

      <Carousel cards1={cards1} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        Great Deals on Electronics
      </Box>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        w={"96%"}
        m="auto"
        mb="5rem"
      >
        <Image src="https://www.reliancedigital.in/medias/Motorola-Moto-G42-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wyOTkyNXxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaGNmLzk5NTg4MjY2MzkzOTAuanBnfDU2YTBjMmZhZmYzODEzMjBhNGM0ZWFhODNjZjEyNzMyNDQyZTZiYTc2ZDZkNGMzNmY5MmNkN2Q4OTRjZDRmMjI" />
        <Image src="https://www.reliancedigital.in/medias/OnePlus-TVs-12999-Small-Banner-03-02-2023.jpg?context=bWFzdGVyfGltYWdlc3wzODc4N3xpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDc1Lzk5NTc2NTM3NzQzNjYuanBnfDQ3ZmNhYWNjYjQ4ZjUxMjkzYjJmNzM2YjNhYjYxMWQxNjExNzMzMWI1ZjQ0ZTYzMGNmMDhiNDljMWIzNmFhZDg" />
        <Image src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNTEvaGY3Lzk5Mzc4OTUyOTI5NTguanBnfDQ2NzM2YjAxZTkzYmJiMTNlMjk4ODkxNTNlMTczMDcxYzU4NjMzZDZmNWQ3N2I5MGViNmMzZDAwNjExMmUxNTE" />
        <Image src="https://www.reliancedigital.in/medias/Neckband-True-Wireless-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMjg5OHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDE2Lzk5Mzc4OTUwOTYzNTAuanBnfGE1OTcxMTM4NGUyMjU3MmM4NTc4YTI1NThkMmQwOTc1ZDU2N2YwNjRjMWNiZTU2YjZiMzcwOTVkYjc0MzQ4MDc" />
      </Grid>

      <ImageSlider details={slideImages2} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        Apple Watches at Best Prices
      </Box>

      <Carousel cards1={cards2} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        Clearance Sale on Everyday Appliances | Upto 70% off
      </Box>

      <Carousel cards1={data} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        Up To 70% off on Everyday Appliances{" "}
      </Box>

      <Carousel cards1={cards4} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        Best Selling Laptops
      </Box>

      <Carousel cards1={cards5} />

      <Box fontSize={"30px"} mt={"80px"} mb={"30px"}>
        IT Accessories Starting From Rs. 109
      </Box>

      <Carousel cards1={cards6} />

      <br />
      <br />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
