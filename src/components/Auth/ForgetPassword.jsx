import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ForgetPassword() {
    const [email,setEmail] = useState('')
  return (
   <Container height={'70vh'} justifyContent={'center'} >
   <form>
        <Heading children="Forget Password" textAlign={['center','left']} my={'16'} />
        <VStack>
        <Input 
                    required
                    id='email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder={"abc@gmail.com"}
                    focusBorderColor='yellow.500'
                    type='email'
                    /> 
                   
    </VStack>
    <Button  type="submit" width={'full'} colorScheme='yellow' my={'4'}>Send Reset Link</Button>
    </form>
   </Container>
  )
}

export default ForgetPassword