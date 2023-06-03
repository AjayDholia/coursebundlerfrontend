import { Container, FormLabel, Heading, Input, VStack ,Box, Button, Textarea} from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Request() {
    const[email,setEmail] = useState("")
    const[name,setName] = useState("")
    const[course,setCourse] = useState("")
 
  return (
    <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'10'}>
            <Heading children={"Course Request"}  />
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
                    <FormLabel htmlFor='course' children="Course"/>
                    <Textarea
                    required
                    id='course'
                    value={course}
                    onChange={e=>setCourse(e.target.value)}
                    placeholder={"Explain About Course ..."}
                    focusBorderColor='yellow.500'
                    />
                   
                    </Box>
                  
                  
                    <Button my="4" colorScheme='yellow' type='submit'>Submit</Button>
                    <Box>
                        See Available Course !{' '}
                        <Link to='/courses'>
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

export default Request