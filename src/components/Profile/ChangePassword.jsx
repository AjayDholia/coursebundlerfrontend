import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function ChangePassword() {
    const [oldpassword,setOldPassword] = useState('')
    const [newpassword,setNewPassword] = useState('')
  return (
  <Container py={'16' } minH={'90vh'}>
    <form>
        <Heading
      textTransform={'uppercase'}
      children="change password"
      my={'16'}
      textAlign={['center','left']}
        />
        <VStack spacing={'8'}>

        <Input 
                    required
                    id='password'
                    value={oldpassword}
                    onChange={e=>setOldPassword(e.target.value)}
                    placeholder={"Enter Old Password"}
                    focusBorderColor='yellow.500'
                    />
                     <Input 
                    required
                    id='password'
                    value={newpassword}
                    onChange={e=>setNewPassword(e.target.value)}
                    placeholder={"Enter New Password"}
                    focusBorderColor='yellow.500'
                    />
                    <Button w={'full'} colorScheme='yellow' >
Change
                    </Button>
        </VStack>
    </form>

  </Container>
  )
}

export default ChangePassword