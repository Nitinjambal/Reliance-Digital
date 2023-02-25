import React from 'react';
import { Box, IconButton, useBreakpointValue,Image,Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useParams,Link as RouterLink } from 'react-router-dom'



// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
};

export default function Carousel({cards1}) {
 
  
  
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });


  return (
    <Box
      position={'relative'}
      height={'380px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards1?.map((item, index) => (
        
        <RouterLink to={`/Product/${item.id}`}>
         <Box p={"1rem"} m={"1rem"} h="350px" cursor={'pointer'} >
            <Box >
            <Image src={item.url} h="14rem"/>
            </Box>

            <Box h="80px" w="100%">
            <Heading as="h5" size="sm" color="blue">
                {item.heading}
            </Heading>
            </Box>

            <Box fontWeight={"bold"}>
                Deal Price : {item.price}
            </Box>
         </Box>
         </RouterLink>
        ))}
      </Slider>
    </Box>
  );
}