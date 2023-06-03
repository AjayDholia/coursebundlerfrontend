import { Grid , Box, Heading ,Text, VStack} from '@chakra-ui/react'
import React,{useState} from 'react'
import intro from "../../assets/videos/intro.mp4"
const Coursepage = () => {
    const [lecturenumber,setLecturenumber] = useState(0);
    // const lectureTitle = "description"
    const lectures = [{
      _id : "sasfsefwlejel",
title:'sample1',
description : "fdkgklgjl algjalsjlasd ldjkglajlasgdj kjgladgal",
video:{
  url:"gjljfljlwjgwel"
}
    },
    {
      _id : "s d,vdnn,nasdfsdsa",
title:'sample2',
description : "fdkgklgjl algjalsjlasd ldjkglajlasgdj kjgladgal",
video:{
  url:"gjljfljlwjgwel"
}
    },
    {
      _id : "sasfsfk",
title:'sample3',
description : "fdkgklgjl algjalsjlasd ldjkglajlasgdj kjgladgal",
video:{
  url:"gjljfljlwjgwel"
}
    },
    {
      _id : "sasfsfkf",
title:'sample4',
description : "fdkgklgjl algjalsjlasd ldjkglajlasgdj kjgladgal",
video:{
  url:"gjljfljlwjgwel"
}
    }
  ]
  return (
<Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
<Box>
<video 
autoPlay
 controls
  controlsList='nodownload  noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={intro}
                width={'100%'}

></video>
<Heading m="4" children={`#${lecturenumber+1} ${lectures[lecturenumber].title}`} />
<Heading m='4' children="Description" />

<Text m="4">
{lectures[lecturenumber].description}
</Text>
</Box>
<VStack>
  {
    lectures.map((element,index)=>(
      <button 
      onClick={()=>setLecturenumber(index)}
      key={element._id}
      style={{
        width:"100%",
        padding:"1rem",
        alignItems:"center",
        margin:"0%",
        borderBottom:"1px solid rgba(0,0,0,0.2)"
      }}
      >
      <Text noOfLines={1}>
  #{index+1}{element.title}
      </Text>
    </button>
    ))
  }
 
</VStack>
</Grid>
  )
}

export default Coursepage