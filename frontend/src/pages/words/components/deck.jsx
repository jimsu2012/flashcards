import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Container, Grid, Stack, Text, GridItem, Button, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../router/router'

export default function Deck({ name, routeId, stars }) {

    const history = useHistory()

    return (
        <button style={{ width: '80%' }} onClick={() => history.push(`/deck/${routeId}?stars=${stars}&deck=${name}`)} mx={"10"} my={"5"} bg={"blue.600"}>
            <Grid backgroundColor={"blue.600"} borderRadius={20} color={"white"} padding={4} templateColumns={"repeat(10, 1fr)"} marginY={5} >
                <GridItem colSpan={5} >
                    <Text fontWeight={"bold"} >{name}</Text>
                </GridItem>
                <GridItem colStart={7} colEnd={9}>
                    <Text>{stars} <StarIcon /></Text>
                </GridItem>
            </Grid>
        </button>
    )
}

//<>
        //     <Button justifyContent={"flex-start"} width={"100%"} onClick={() => history.push(`/deck/${routeId}?stars=${stars}&deck=${name}`)} mx={"10"} my={"5"} bg={"blue.600"} color={"white"} padding={"5"} >
                    
        //         <Text paddingRight={"70%"} fontWeight={"bold"} >{name}</Text>
        //         <Stack
        //             flex={{ base: 1, md: 0 }}
        //             justify={'flex-end'}
        //             direction={'row'}
        //             spacing={6}>
        //             <Text justifyContent={"end"} >{stars}</Text>
        //         </Stack>
        //     </Button>
        // </>