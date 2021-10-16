import React from 'react'
import { } from '@chakra-ui/icons'
import { Container, Grid, Stack, Text, GridItem, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

function Card({ term, meaning, routeId }) {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/deck/${routeId}`)
    }

    return (

             <button onClick={handleClick} >
                <Grid w={"1000px"} fontFamily={"serif"} color={"white"} templateColumns={"repeat(5, 1fr)"} marginTop={"5"}  backgroundColor={"blue.700"} padding={4} borderRadius={"25"} >
                    <GridItem colSpan={2} >
                        <Text>{term}</Text>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text>{meaning}</Text>
                    </GridItem>
                </Grid>
            </button>
    )
}

export default Card
