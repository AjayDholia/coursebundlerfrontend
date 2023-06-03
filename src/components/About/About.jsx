import { Avatar, Container, Heading, Stack, VStack ,Text,Button, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import intro from "../../assets/videos/intro.mp4"
import {Link} from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'
const Founder = () =>(
    <Stack direction={['column','row']}
    spacing={['4','16']}
    padding={'8'}>
    <VStack>
        <Avatar boxSize={['35','40']} />
        <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
        <Heading children='Ajay Dholia' size={['md','lg']} />
        <Text children={`Hii , I am a Mern - Stack developer.
        my Mission is to Update my Self Day by Day`} alignItems={['center','left']}/>
    </VStack>
    </Stack>
)
const TandC = () =>(
    <Box>
        <Heading my={'4'} size={'md'} children="Terms and Condition" textAlign={['center','left']} />
        <Box h={'sm'}
         p={'4'}
         >
<Text fontFamily={'heading'}
letterSpacing={'widest'}
textAlign={['center','left']}>
    TermAndCondition
</Text>
<Heading
my='4'
size={'xs'}
children="Refund only applicable for cancellation within 7 days" />
        </Box>
    </Box>
)
const Videplayer = () =>(
    <Box>
     <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={intro}
                ></video>
    </Box>
)
function About() {
  return (
 <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
<Heading children="About Us" textAlign={['center',"left"]} />
<Founder />
<Stack m='8' direction={['column','row']} alignItems={'center'}>
<Text fontFamily={'cursive'} m='8' textAlign={['center','left']}>
    We are a video streaming platform with some premium courses available only for premium user
</Text>
<Link to='/subscribe'>
<Button variant={'ghost'} colorScheme='yellow'>
    checkout our plans
</Button>
</Link>
</Stack>
<Videplayer/>
<TandC termandcondition={'termandcondition'}/>
<HStack my={'4'}>
    <RiSecurePaymentFill/>
    <Heading
    size={'xs'}
    fontFamily={'sans-sarif'}
    textTransform={'uppercase'}
    children={'payment is secure by Razorpay'}
    />
</HStack>
 </Container>
  )
}

export default About