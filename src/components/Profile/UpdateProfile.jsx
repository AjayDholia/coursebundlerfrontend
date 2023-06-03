import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
function UpdateProfile() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
  return (
    <Container py={'16' } minH={'90vh'}>
    <form>
        <Heading
      textTransform={'uppercase'}
      children="Update Profile"
      my={'16'}
      textAlign={['center','left']}
        />
        <VStack spacing={'8'}>

        <Input 
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder={"Name"}
                    type='text'
                    focusBorderColor='yellow.500'
                    />
                      <Input 
                    value={email}
                    type='email'
                    onChange={e=>setEmail(e.target.value)}
                    placeholder={"Email"}
                    focusBorderColor='yellow.500'
                    />
                    
                    <Button w={'full'} colorScheme='yellow' >
Update
                    </Button>
        </VStack>
    </form>

  </Container>
  )
}

export default UpdateProfile