import { Grid, Box, Text, Heading, Stack, HStack, Progress } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import purplecursor from '../../../assets/images/purplecursor.png'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'

function DataBox({ profit, title, qty, qtypercent }) {

    return (
        <Box
            w={['full', '20%']}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
            p={'8'}
            borderRadius={'lg'}
        >

            <Text children={title} />
            <HStack spacing={'6'}>
                <Text fontSize={"2xl"} fontWeight={'bold'} children={qty} />
                <HStack>
                    <Text children={`${qtypercent}%`} />
                    {
                        profit ? <RiArrowUpLine color='green' /> :
                            <RiArrowDownLine color='red' />

                    }

                </HStack>

            </HStack>
            <Text children={"Since Last Month"}
                opacity={0.6}
            />
        </Box>
    )
}

const Bar = ({title,value,profit}) =>{
    return(
        <Box py={'4'}
        px={['0','20']}
        >
            <Heading size={'sm'} children={title} mb={'2'} />
<HStack
w={'full'}
alignItems={'center'}
>
<Text children={profit ? 0 : `${-value}%`}/>
<Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
<Text children={`${value > 100?value:100}% `}/>
</HStack>
        </Box>
    )
}

function Dashboard() {
    return (
        <Grid minH={'100vh'}
            css={{
                cursor: `url(${purplecursor}),default`,
            }}
            templateColumns={['1fr', '5fr 1fr']}
        >
            <Box boxSize={'border-box'} py={'16'} px={['4', '0']}>
                <Text textAlign={'center'}
                    opacity={0.5}
                    children={`Last Change was on ${String(new Date()).split('G')[0]}`} />

                <Heading
                    children="Dashboard"
                    ml={["0", "16"]}
                    mb={'16'}
                    textAlign={['center', 'left']}
                />
                <Stack direction={['column', 'row']}
                    minH={'24'}
                    justifyContent={'space-evenly'}>

                    <DataBox title="Views" qty={123} qtypercent={30} profit={true} />
                    <DataBox title="Users" qty={23} qtypercent={78} profit={true} />
                    <DataBox title="Subscription" qty={12} qtypercent={20} profit={false} />

                </Stack>
                <Box
                    m={['0', '16']}
                    borderRadius={'lg'}
                    p={['0', '16']}
                    mt={['4', '16']}
                    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                >
                    <Heading
                        textAlign={['center', 'left']}
                        size={'md'}

                        children="Views Graph"
                        pt={['8', '0']}
                        ml={['0', '16']}
                    />


                    {/* Line Graph Here  */}
                    <LineChart />
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box
                        p={'4'}>
                        <Heading
                            textAlign={['center', 'left']}
                            size={'md'}
                            children="Progress Bar"
                            my="8"
                            ml={['0', '16']}
                        />
                        <Box>
<Bar title={"Views"} value={30} profit={true} />
<Bar title={"Users"} value={78} profit={true} />
<Bar title={"Subscription"} value={20} profit={false} />
                        </Box>
                    </Box>

<Box p={['0','16']} boxSizing='border-box' py={'4'}>
<Heading textAlign={'center'} size={'md'} mb={'4'} children="Users" />
{/* graph  */}
<DoughnutChart/>
</Box>
                </Grid>
            </Box>
            <Sidebar />
        </Grid>
    )
}


export default Dashboard