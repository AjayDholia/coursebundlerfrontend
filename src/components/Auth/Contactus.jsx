import { Container, FormLabel, Heading, Input, VStack ,Box, Button, Textarea} from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Contactus() {
    const[email,setEmail] = useState("")
    const[name,setName] = useState("")
    const[message,setMessage] = useState("")
 
  return (
    <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'10'}>
            <Heading children={"Contact Us"}  />
                <form style={{width:"100%"}}>
                <Box marginY={'4'}>
                    <FormLabel htmlFor='name' children="Name"/>
                    <Input 
                    required
                    id='name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder={"abc"}
                    focusBorderColor='yellow.500'
                    />
                    </Box>
                    <Box marginY={'4'}>
                    <FormLabel htmlFor='email' children="Email Adrress"/>
                    <Input 
                    required
                    id='email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder={"abc@gmail.com"}
                    focusBorderColor='yellow.500'
                    />
                   
                    </Box>
                    <Box marginY={'4'}>
                    <FormLabel htmlFor='message' children="Message"/>
                    <Textarea
                    required
                    id='message'
                    value={message}
                    onChange={e=>setMessage(e.target.value)}
                    placeholder={"Enter Your Message ..."}
                    focusBorderColor='yellow.500'
                    />
                   
                    </Box>
                  
                  
                    <Button my="4" colorScheme='yellow' type='submit'>Contact Us</Button>
                    <Box>
                        Lookong For a Course?{' '}
                        <Link to='/request'>
                            <Button colorScheme='yellow' variant={'link'}>
                               Click
                            </Button> {" "}
                            here
                        </Link>
                    </Box>
                </form>
            {/* </Heading> */}
        </VStack>
    </Container>
  )
}

export default Contactus