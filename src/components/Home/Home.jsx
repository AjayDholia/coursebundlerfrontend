import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import './home.css'
// import {intro} from '../../assets/videos/intro.mp4'
import intro from "../../assets/videos/intro.mp4"
import vg from '../../assets/images/vg.jpg'
import { Link } from 'react-router-dom'
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
function Home() {
    return (
        <section className='home'>
            <div className="container">
                <Stack
                    direction={["column", 'row']}
                    height="100%"
                    justify={['center', 'space-between']}
                    alignItems={"center"}
                    spacing={['16', '56']}
                >
                    <VStack width={'full'} alignItems={['center', 'flex-end']}>
                        <Heading children="LEARN FROM THE EXPORT " size={"2xl"} />
                        <Text children=" Find Valueable Content At Reasonable Price" />
                        <Link to="/courses">
                            <Button size={'lg'} colorScheme='yellow'>
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>
                    <Image src={vg} className='vector-graphics' />
                </Stack>
            </div>
            <Box padding={'8'} bg="blackAlpha.800">
                <Heading children="OUR BRANDS " textAlign={'center'}
                    fontFamily={"body"}
                    color={"yellow.400"} />
                <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4'}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">
                <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={intro}
                ></video>
            </div>
        </section>
    )
}

export default Home