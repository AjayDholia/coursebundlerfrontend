import { Grid, Box, Container, Heading, VStack, Input, Select, Image, Button } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import purplecursor from '../../../assets/images/purplecursor.png'
import { useState } from 'react'
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
function CreateCourse() {
  const ChangeImagehandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result)
      setImage(reader.result)
    }
  }
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [createdBy, setCreatedBy] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [imagePrev, setImagePrev] = useState("")
  const categories = [
    "Web Development",
    "Artificial Intellegence ",
    "Data Structure",
    "App Development",
    "Data Science",
    "java Script",
    "web designing"
  ]
  return (
    <Grid minH={'100vh'}
      css={{
        cursor: `url(${purplecursor}),default`,
      }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading textTransform={'uppercase'}
            children="Create Course"
            my={'16'}
            textAlign={['center', 'left']} />
          <VStack
            m={'auto'}
            spacing={'8'}
          >
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Title'
              focusBorderColor='purple.300'
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type='text'
              placeholder='Description'
              focusBorderColor='purple.300'
            />
            <Input
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              type='text'
              placeholder='Creater Name'
              focusBorderColor='purple.300'
            />
            <Select focusBorderColor='purple.300'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={''}>Select Category</option>
              {
                categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </Select>
            <Input
              required

              accept='image/*'
              type='file'
              focusBorderColor='purple.300'
              css={fileUploadStyle}
              onChange={(e) => ChangeImagehandler(e)}
            />
            {
              imagePrev && (
                <Image src={imagePrev} boxSize={"64"} objectFit={'contain'} />
              )}
            <Button w={'full'} colorScheme='purple' type='submit'>
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  )
}

export default CreateCourse