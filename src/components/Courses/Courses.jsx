import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({view,title,imagesrc,id,addtoplaylisthandler,creator,description,lecturecount}) =>{
    return(
<VStack className='course' alignItems={['center','flex-start']} >
    <Image src={imagesrc} boxSize={'60'} objectFit={'contain'} />
    <Heading textAlign={['center',"left"]} maxW={'200px'} fontFamily={"sans-serif"} noOfLines={3} children={title} size={'sm'}/> 
    <Text noOfLines={2} children={description} />
    <HStack>
        <Text fontWeight={'bold'}
        textTransform={'uppercase'}
        children="creator"
        />
      <Text fontFamily={'body'}
        textTransform={'uppercase'}
        children={creator}
        />

    </HStack>
    <Heading textAlign={'center'} size={'xs'} children={`Lecture - ${lecturecount}`} textTransform={'uppercase'}/>
    <Heading  size={'xs'} children={`view - ${view}`} textTransform={'uppercase'}/>
    <Stack direction={["column","row"]} alignItems={'center'}>

<Link to={`/course/${id}`}>
    <Button colorScheme='yellow'>
        Watch Now
    </Button>
</Link>
<Button colorScheme='yellow' variant={'ghost'} onClick={()=>addtoplaylisthandler(id)}>
    Add to Playlist
</Button>
    </Stack>

</VStack>
    )
}

function Courses() {
    const [keyword,setKeyword] = useState("")
    const [category,setCategory] = useState("")
    const addtoplaylisthandler = () =>{
        console.log("added to playlist");
    }
    const categories = [
        "Web Development",
        "Artificial Intellegence ",
        "Data Structure",
        "App Development",
        "Data Science",
        "java Script",
        "web designing"
    ]
  return (
<Container minH={"95vh"} maxW={"container.lg"} paddingY={'8'}  >
    <Heading children="All Courses" m={'8'}/>
    <Input type='text' placeholder='Search a course...' focusBorderColor='yellow.500' value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
    <HStack overflowX={'auto'} paddingY={'8'} style={{'&::-webkit-scrollbar': {
    display:"none"
},}}>
        {
            categories.map((item,index)=>(
                <Button onClick={()=>setCategory(item)} key={index} minW={'60'}>
                <Text children={item} />
               </Button>
            ))

        }
       
    </HStack>
    <Stack
    direction={["column","row"]}
    flexWrap={'wrap'}
    justifyContent={['flex-start','space-evenly']}
    alignItems={['center','flex-start']}
    >
<Course view = {3} title={'sample'} imagesrc={'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg'} id={1} addtoplaylisthandler={addtoplaylisthandler}creator={'sample'}description={'sample'} lecturecount={2}/>
    </Stack>
</Container>
  )
}

export default Courses