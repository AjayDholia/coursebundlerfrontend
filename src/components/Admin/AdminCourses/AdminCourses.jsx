import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Button, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import './admincorse.css'
import purplecursor from '../../../assets/images/purplecursor.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
function AdminCourses() {
  const courses = [
    {
      _id: "jwdefk",
      title: "React",
      category: "web ",
      poster: 
      {
        url:"https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_946_720.jpg",
      },
      subscription:{
        status:'active'
      },
      createdBy:"Ajay Dholia",
     views:123,
     numOfVideos:9


    }
  ]
  const lectures= [];
  const courseId = "SDHFKSAJGHAKSGHASKLASGKDL"
  const {isOpen,onClose,onOpen} = useDisclosure();
  const courseDetailHandler = (userid) =>{
    console.log(userid);
    onOpen();
  }
  const deleteButtonHandler = (userid) =>{
    console.log(userid);
  }

const deletelectureButtonHandler =(courseId,lectureId) =>{
console.log(courseId);
console.log(lectureId);
}

const addLectureHandler = (e,courseId,title,description,video) =>{
  e.preventDefault();
  // console.log("sdlkgalsgjasgd");

}
  return (
    <Grid minH={'100vh'}
      css={{
        cursor: `url(${purplecursor}),default`,
      }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} className='coursesclass'
        overflowX={'auto'}>
        <Heading textTransform={'uppercase'}
          children="All Courses"
          my={'16'}
          textAlign={['center', 'left']} />

        <TableContainer
          w={['100vw', 'full']}
        >
          <Table variant={'simple'} size={'lg'}>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lecture</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  courses.map((item) => (
                    <Row key={item._id} item={item} deleteButtonHandler={deleteButtonHandler} courseDetailHandler={courseDetailHandler}/>
                  ))
                }
              </Tbody>
                    <TableCaption > All Available Courses in the DataBase
            </TableCaption>
          </Table>
        </TableContainer>
<CourseModal  isOpen={isOpen} onClose={onClose} courseId={courseId} deleteButtonHandler={deletelectureButtonHandler}
addLectureHandler={addLectureHandler}
courseTitle="React Course"
lectures={lectures}
/>
{/* lectures={lecture} */}
      </Box>
      <Sidebar />
    </Grid>
  )
}
function Row({ item , courseDetailHandler,deleteButtonHandler }) {
  return (
    <Tr>
      <Td>
        #{item._id}
      </Td>

      <Td>
<Image src={item.poster.url} />
      </Td>
      <Td>
        {item.title}
      </Td>
      <Td>
        {item.category}
      </Td>

      <Td>
        {item.createdBy}
      </Td>
      <Td isNumeric>
        {item.views}
      </Td>
      <Td isNumeric>
        {item.numOfVideos}
      </Td>


      {/* <Td>
        {item.subscription.status === "active" ? 'Active' : "Not Active"}
      </Td> */}
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} >
          <Button variant={'outline'} onClick={()=>courseDetailHandler(item._id)} color={'purple.500'} >
            Change Role
          </Button>
          <Button color={'puprle.600'} onClick={()=>deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}

export default AdminCourses