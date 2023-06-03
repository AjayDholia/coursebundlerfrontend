import { Avatar, Container, Heading, Stack, VStack, Button, HStack, Text, Input, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, color, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// import { fileUploadCss } from '../Auth/Signup'

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "#ECC94B",
    backgroundColor: "white"
}
const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}
function Profile() {
    const removeFromPlaylistHandler = (id) => {
        console.log(id, "id");
    }
    const user = {
        name: "ajay",
        email: "ajaydholia19@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "Admin",
        subscription: {
            status: undefined
        },
        playlist: [
            {
                course: "eriuwiruwoirw",
                poster: "https://www.google.com/search?q=image&rlz=1C1RXQR_enIN1027IN1027&oq=image&aqs=chrome..69i57j35i39i650j35i39j0i433i512l5j0i512j0i433i512.1096j0j15&sourceid=chrome&ie=UTF-8#imgrc=Y98xGnR8n4O4OM"
            },
            //  {
            //     course:"eriuwiruwoirw",
            //     poster:"dfkeghekgekljgeklrjrewlk"
            // },
        ]
    }

    const { isOpen, onClose, onOpen } = useDisclosure()

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
    }
    return (
        <Container minH={'95vh'} maxW={"container.lg"} py={"8"}>
            <Heading children="Profile" textTransform={'uppercase'} m='8' />
            <Stack
                justifyContent={'flex-start'}
                direction={["column", 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
                        Change Photo
                    </Button>
                </VStack>
                <VStack spacing={'4'} alignItems={['center', "flex-start"]}>
                    <HStack>
                        <Text children="Name" fontWeight={'bold'} />\
                        <span>:</span>
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children="Email" fontWeight={'bold'} />
                        <span>:</span>
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children="CreatedAt" fontWeight={'bold'} />
                        <span>:</span>
                        <Text children={user.createdAt.split("T")[0]} />
                    </HStack>
                    {
                        user.role !== 'admin' && (
                            <HStack>
                                <Text children="Subscription" fontWeight={'bold'} />
                                {
                                    user.subscription.status === "active" ?
                                        <Button color={'yellow.500'} variant={'unstyled'}>
                                            Cancle Subscription
                                        </Button>
                                        :
                                        <Link to="/subscribe">
                                            <Button colorScheme='yellow' >
                                                Subscribe
                                            </Button>
                                        </Link>
                                }

                            </HStack>
                        )

                    }

                    <Stack direction={["column", 'row']}
                        alignItems={'center'}>
                        <Link to='/updateprofile'>
                            <Button  >
                                Update Profile
                            </Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button  >
                                Change Password
                            </Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>
            <Heading children={'Playlist'} size={'md'} my={'8'} />

            {
                user.playlist.length > 0 && (
                    <Stack direction={["column", 'row']}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        p={'4'}>
                        {
                            user.playlist.map((element) => (
                                <VStack w={'48'} m={'2'} key={element.course}>
                                    <Image boxSize={'full'} objectFit={"contain"} src={element.poster} />
                                    <HStack>
                                        <Link to={`/course/{element.course}`}>
                                            <Button variant={'ghost'} colorScheme='yellow'>Watch Now</Button></Link>
                                        <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>

                                </VStack>
                            ))
                        }

                    </Stack>
                )
            }

            <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />
        </Container>
    )
}

export default Profile



function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
    const [image, setImage] = useState("")
    const [imageprev, setImagePrev] = useState("")
    const ChangeImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(reader.result)
        }
    }
    const handleClose = () => {
        onClose();
        setImagePrev("")
        setImage("")

    }
    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay backdropFilter={'blur(10px'}>
                <ModalContent>
                    <ModalHeader>
                        Change Photo
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container>
                            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
                                <VStack spacing={'8'}>
                                    {
                                        imageprev && <Avatar boxSize={'48'} src={imageprev} />
                                    }
                                    <Input type='file'
                                        //  css={{"&::file-selector-botton":fileUploadCss}}
                                        css={fileUploadStyle}
                                        onChange={(element) => ChangeImage(element)} />
                                    <Button w={'full'} colorScheme='yellow' type='submit' >Change</Button>
                                </VStack>
                            </form>
                        </Container>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}