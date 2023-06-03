import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button ,Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'

const LinkButton =  ({url,title,onClose}) =>{
    return(
        <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}> {title}
            </Button>
            </Link>
    )
}

function Header() {
    const LogoutHandler = () =>{
        console.log('logout');
        onClose();
    }
   const user  = {
    role:"admin"
   }
    const isAuthenticated = true;
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
<>
<ColorModeSwitcher/>
<Button 
onClick={onOpen}
zIndex={"overlay"}
colorScheme='yellow'
width={"12"}
height={'12'}
rounded={'full'}
position={'fixed'}
top={'6'}
left={'6'}
>
<RiMenu5Fill/>
</Button>
<Drawer placement='left' isOpen={isOpen} onClose={onClose}>
<DrawerOverlay backdropFilter={'blur(1px)'} />
    <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>
            Course Bundler
        </DrawerHeader>
        <DrawerBody>
<VStack spacing={'4'} alignItems={'flex-start'}>
    <LinkButton url="/" title='Home' onClose={onClose}/>
    <LinkButton url="/courses" title='Browse All Courses' onClose={onClose}/>
    <LinkButton url="/request" title='Browse a request' onClose={onClose}/>
    <LinkButton url="/contact" title='contacts' onClose={onClose}/>
 <LinkButton url="/about" title='About' onClose={onClose}/>
 <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={'2rem'} width={'80%'}>

{
    isAuthenticated === true ? (<>
    <VStack>
        <HStack>
        <Link onClick={onClose} to="/profile">
            <Button variant={"ghost"} colorScheme='yellow'>
                profile
            </Button>
        </Link>
        <Button  variant={"ghost"} onClick={LogoutHandler} >
            <RiLogoutBoxLine/>
                Logout
            </Button>
        </HStack>
        {
            user && user.role === 'admin' && <Link onClick={onClose} to="/admin/dashboard">
                <Button colorScheme='purple' variant={"ghost"} >
                    <RiDashboardFill/>
                    Dashboard
                </Button>
            </Link>
        }
    </VStack>
    </>) : (
        <>
        <Link to="/login">
            <Button colorScheme='yellow'>
                Login
            </Button>
        </Link>
        <p>OR</p>
        <Link to="/register">
            <Button colorScheme='yellow'>
                Sign Up
            </Button>
        </Link>

        </>
    )
}
 </HStack>
</VStack>
        </DrawerBody>
    </DrawerContent>
{/* </DrawerOverlay> */}
</Drawer>
</>
  )
}

export default Header