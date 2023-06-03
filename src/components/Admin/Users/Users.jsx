import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import purplecursor from '../../../assets/images/purplecursor.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'
function Users() {
  const users = [
    {
      _id: "jwdefkljelkfjlglkwejlewqkgjeglk",
      name: "ajay",
      email: "ajaydholia19@gmail.com",
      role: "admin",
      subscription: {
        status: "active"
      },

    }
  ]
  const updateHandler = (userid) =>{
    console.log(userid);
  }
  const deleteButtonHandler = (userid) =>{
    console.log(userid);
  }
  return (
    <Grid minH={'100vh'}
      css={{
        cursor: `url(${purplecursor}),default`,
      }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '0']}
        overflowX={'auto'}>
        <Heading textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']} />

        <TableContainer
          w={['100vw', 'full']}
        >
          <Table variant={'simple'} size={'lg'}>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map((item) => (
                    <Row key={item._id} item={item} deleteButtonHandler={deleteButtonHandler} updateHandler={updateHandler}/>
                  ))
                }
              </Tbody>
                    <TableCaption > All Available Users in the DataBase
            </TableCaption>
          </Table>
        </TableContainer>

      </Box>
      <Sidebar />
    </Grid>
  )
}

export default Users
function Row({ item , updateHandler,deleteButtonHandler }) {
  return (
    <Tr>
      <Td>
        #{item._id}
      </Td>

      <Td>
        {item.name}
      </Td>
      <Td>
        {item.email}
      </Td>

      <Td>
        {item.role}
      </Td>

      <Td>
        {item.subscription.status === "active" ? 'Active' : "Not Active"}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} >
          <Button variant={'outline'} onClick={()=>updateHandler(item._id)} color={'purple.500'} >
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