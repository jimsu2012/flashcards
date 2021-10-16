import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { Box, Center, Heading, Button } from '@chakra-ui/react'

export default function StudyCard({ cards }) {

    const [flip, setFlip] = React.useState(false)

    const handeClick = () => {
        setFlip(!flip)
    }

    return (
        <Box>
            {cards.map((i, k) => {
                return (
                    <ReactCardFlip isFlipped={flip} flipDirection="vertical" key={k} >
                        <Button onClick={handeClick} >
                            <Center>
                                <Heading>{'Word'}</Heading>
                            </Center>
                        </Button>
                        <Button onClick={handeClick} >
                            <Center>
                                <Heading>{'Meaning'}</Heading>
                            </Center>
                        </Button>
                    </ReactCardFlip>
                )
            })}
        </ Box>
    )
}
