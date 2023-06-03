import { Modal, ModalBody, ModalCloseButton, Input, ModalContent, ModalHeader, ModalOverlay, Grid, Box, Heading, Stack, Text, Button, VStack, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "purple",
    backgroundColor: "white",
    focusBorderColor: 'purple.300'
}
const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}




function CourseModal({ isOpen, onClose, id, deleteButtonHandler, courseId, courseTitle, addLectureHandler, lectures }) {
    // const CourseTitle = 'React PROJECT'

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [video, setVideo] = useState("")
    const [videoPrev, setVideoPrev] = useState("")
    const changeVideoHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result)
            setVideo(file)
        }
    }
    const handleClose =() =>{
        setTitle('');
        setDescription('');
        setVideo('');
        setVideoPrev('');
        onClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            size={'full'}
            onClose={handleClose}
            scrollBehavior='outside'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{courseTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={'16'}>
                    <Grid
                        templateColumns={['1fr', '3fr 1fr']}
                    >
                        <Box px={['0', '16']}>
                            <Box my={'5'}>
                                <Heading children={courseTitle} />
                                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
                            </Box>
                            <Heading children={'lectures'} size={'lg'} />
                            <VideoCard
                                title={'React Intro'}
                                description="this is an Intro lecture Where you will can see this lecture "
                                num={1}
                                lectureId="sfagkahkewhekwqwq"
                                courseId={courseId}
                                deleteButtonHandler={deleteButtonHandler}
                            />
                        </Box>

                        <Box>
                            <form onSubmit={e => addLectureHandler(e, courseId, title, description, video)}>
                                <VStack spacing={'4'} >
                                    <Heading children="Add lecture"
                                        size={'md'}
                                        textTransform={'uppercase'} />

                                    <Input focusBorderColor="purple.300"
                                        placeholder="Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)} />
                                    <Input focusBorderColor="purple.300"
                                        placeholder="Description"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)} />
                                    <Input
                                        required

                                        accept='video/mp4'
                                        type='file'
                                        focusBorderColor='purple.300'
                                        css={fileUploadStyle}
                                        onChange={(e) => changeVideoHandler(e)}
                                    />

                                    {
                                        videoPrev && (
                                            <video
                                                controlsList='nodownload' controls
                                                src={videoPrev}
                                            >

                                            </video>
                                        )
                                    }
                                    <Button w={'full'}
                                        colorScheme='purple'
                                        type='submit'
                                    >
                                        Upload
                                    </Button>
                                </VStack>


                            </form>
                        </Box>
                    </Grid>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClose}>
                        close
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    )
}

export default CourseModal


function VideoCard({ title, description, num, lectureId, courseId, deleteButtonHandler }) {
    return (
        <Stack direction={['column', 'row']} my={'8'} borderRadius={"lg"} boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
            justifyContent={['flex-start', 'space-between']}
            p={['4', '8']}
        >
            <Box>
                <Heading size={'sm'} children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>
            <Button color={"purple.600"} onClick={() => deleteButtonHandler(courseId, lectureId)} >
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}