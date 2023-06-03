import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
function Resetpassword() {
    const [password,setPassword] = useState('')
    const param = useParams();
  return (
   <Container height={'70vh'} justifyContent={'center'} >
   <form>
        <Heading children="Reset Password" textAlign={['center','left']} my={'16'} />
        <VStack>
        <Input 
                    required
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder={"New Password"}
                    focusBorderColor='yellow.500'
                    type='password'
                    /> 
                   
    </VStack>
    <Button  type="submit" width={'full'} colorScheme='yellow' my={'4'}>Change Password</Button>
    </form>
   </Container>
  )
}

export default Resetpassword