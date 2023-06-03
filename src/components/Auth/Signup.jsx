import { Container, FormLabel, Heading, Input, VStack ,Box, Button, Avatar} from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export const fileUploadCss = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white"
}
const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss,
}
function Signup() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[name,setName] = useState("")
    const[imagePrev,setImagePrev] = useState("")
    const[image,setImage] = useState("")
    const ChangeImagehandler = (e) =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImagePrev(reader.result)
            setImage(reader.result)
        }
    }
  return (
    <Container height={'100vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'10'}>
            <Heading children={"Register"} marginTop={'2%'} />
                <form style={{width:"100%",marginTop:"0%"}} >
                    <Box marginY={'4'} display={'flex'} justifyContent={'center'} spacing={'16'}>
                        <Avatar src={imagePrev}
                        size={'2xl'}
                        />
                    </Box>
                <Box marginY={'4'}>
                    <FormLabel htmlFor='Name' children="Enter Your Name"/>
                    <Input 
                    required
                    id='name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder={"XYZ"}
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
                    <FormLabel htmlFor='chooseAvtar' children="chooseAvtar"/>
                    <Input 
                    required
                    id='chooseAvtar'
                    accept='image/*'
                  type='file'
                    focusBorderColor='yellow.500'
                    css={fileUploadStyle}
                    onChange={(e)=>ChangeImagehandler(e)}
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
                  
                    <Button my="4" colorScheme='yellow' type='submit'>Sign Up</Button>
                    <Box marginBottom={'4%'}>
                        Already User?{' '}
                        <Link to='/Login'>
                            <Button colorScheme='yellow' variant={'link'}>
                                Login
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


export default Signup