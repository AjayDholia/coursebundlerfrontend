import { Container, FormLabel, Heading, Input, VStack ,Box, Button} from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
  return (
    <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children={"Welcome to the Course"}  />
                <form style={{width:"100%"}}>
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
                    <FormLabel htmlFor='password' children="Password"/>
                    <Input 
                    required
                    id='password'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder={"123355556"}
                    focusBorderColor='yellow.500'
                    />
                    </Box>
                    <Box>
                        <Link to="/forgetpassword">
                            <Button fontSize={'sm'} variant='link'>
                                Forget Password
                            </Button>
                        </Link>
                    </Box>
                    <Button my="4" colorScheme='yellow' type='submit'>Login</Button>
                    <Box>
                        New User?{' '}
                        <Link to='/register'>
                            <Button colorScheme='yellow' variant={'link'}>
                                Sign Up
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

export default Login