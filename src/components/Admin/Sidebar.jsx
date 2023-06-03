import { VStack,Button } from '@chakra-ui/react'
import React from 'react'
import {Link,useLocation} from "react-router-dom"
import { RiAddCircleFill, RiDashboardFill, RiEyeCloseLine, RiUser3Fill } from 'react-icons/ri'

const Sidebar = () => {
    const location = useLocation()
      return (
    <VStack  spacing={'8'} 
    alignItems={'flex-start'}
    p={'16'}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
<LinkButton Icon={RiDashboardFill} Text={'Dashboard'} url={'dashboard'} active={location.pathname ==="/admin/dashboard"} />
<LinkButton Icon={RiAddCircleFill} Text={'Create Course'} url={'createcourses'} active={location.pathname ==="/admin/createcourses"} />
<LinkButton Icon={RiEyeCloseLine} Text={'Courses'} url={'admincourses'} active={location.pathname ==="/admin/admincourses"}/>
<LinkButton Icon={RiUser3Fill} Text={'Users'} url={'users'} active={location.pathname ==="/admin/users"}/>

    </VStack>
  )
}

export default Sidebar


function LinkButton({url,Icon,Text,active}) {
    return(
        <Link to={`/admin/${url}`}>
        <Button colorScheme={active ? 'purple' : ""} fontSize={'larger'} variant="ghost">
            <Icon style={{margin:"4px"}}/>
            {Text}
        </Button>
    </Link >
    )
 
}