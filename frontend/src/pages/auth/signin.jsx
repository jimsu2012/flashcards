import React from 'react'
import WithSubnavigation from './authnavbar'
import { Formik, Form } from 'formik'
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom'
import ROUTES from '../../router/router'



export default function SignIn() {

    const history = useHistory()

    const [user, setUser] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [ruser, rsetUser] = React.useState('')
    const [rpassword, rsetPassword] = React.useState('')

    const firebase = {
        submit: values => {
            setUser(values.username)
            setPassword(values.password)
            history.replace(ROUTES.view)
        }
    }

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Ordinary Students{' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            &
                        </Text>{' '}
                        Professional English Teachers
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            width={useBreakpointValue({ base: '44px', md: '60px' })}
                            height={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Join our community
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, green.400,blue.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            We’re looking for amazing people like you. People who like to 
                            empower their friends and everyone around them. 
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                           <FormIkForm firebase={firebase} />
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, green.400,blue.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, green.400,blue.400)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>


    )
}

function FormIkForm({ firebase }) {

    const [user, setUser] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [ruser, rsetUser] = React.useState('')
    const [rpassword, rsetPassword] = React.useState('')

    return (
            <Formik
                initialValues={{
                    password: '',
                    username: ''
                }}
                onSubmit={(values, actions) => {
                    firebase.submit(values)
                    actions.setSubmitting(false)
                }}
            >
                {props => (
                    <Container paddingTop={"15"} >
                        <Form onSubmit={props.handleSubmit} >
                            <Container padding="2" >
                                <Text mb="8px" fontWeight={"semibold"}>Email: </Text>
                                <Input
                                    name="username"
                                    value={props.values.username}
                                    onChange={props.handleChange}
                                    placeholder="Enter your username here..."
                                    size="md"
                                    onBlur={props.handleBlur}
                                />
                                <Text> Result: {user} </Text>
                                <Text> RealTime: {ruser} </Text>
                            </Container>
                            <Container padding="2">
                                <Text mb="8px" fontWeight={"semibold"} >Password: </Text>
                                <Input
                                    name="password"
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder="Enter your password here..."
                                    size="md"
                                />
                                <Text> Result: {password} </Text>
                                <Text> RealTime: {rpassword} </Text>
                            </Container>
                            <Container padding="2" >
                                <Button colorScheme="teal" onClick={props.handleSubmit} >Submit</Button>
                            </Container>
                        </Form>
                    </Container>
                )}
            </Formik>
    )
}

// export default function Signin() {
//     const history = useHistory()

//     const firebase = {
//         submit: values => {
//             setUser(values.username)
//             setPassword(values.password)
//             history.replace(ROUTES.view)
//         }
//     }

//     const [user, setUser] = React.useState('')
//     const [password, setPassword] = React.useState('')
//     const [ruser, rsetUser] = React.useState('')
//     const [rpassword, rsetPassword] = React.useState('')

//     return (
//         <>
//             <WithSubnavigation />
//             <Formik
//                 initialValues={{
//                     password: '',
//                     username: ''
//                 }}
//                 onSubmit={(values, actions) => {
//                     firebase.submit(values)
//                     actions.setSubmitting(false)
//                 }}
//             >
//                 {props => (
//                     <Container paddingTop={"15"} >
//                         <Form onSubmit={props.handleSubmit} >
//                             <Container padding="2" >
//                                 <Text mb="8px" fontWeight={"semibold"}>Email: </Text>
//                                 <Input
//                                     name="username"
//                                     value={props.values.username}
//                                     onChange={props.handleChange}
//                                     placeholder="Enter your username here..."
//                                     size="md"
//                                     onBlur={props.handleBlur}
//                                 />
//                                 <Text> Result: {user} </Text>
//                                 <Text> RealTime: {ruser} </Text>
//                             </Container>
//                             <Container padding="2">
//                                 <Text mb="8px" fontWeight={"semibold"} >Password: </Text>
//                                 <Input
//                                     name="password"
//                                     value={props.values.password}
//                                     onChange={props.handleChange}
//                                     onBlur={props.handleBlur}
//                                     placeholder="Enter your password here..."
//                                     size="md"
//                                 />
//                                 <Text> Result: {password} </Text>
//                                 <Text> RealTime: {rpassword} </Text>
//                             </Container>
//                             <Container padding="2" >
//                                 <Button colorScheme="teal" onClick={props.handleSubmit} >Submit</Button>
//                             </Container>
//                         </Form>
//                     </Container>
//                 )}
//             </Formik>
//         </>
//     )
// }

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];


export const Blur = props => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};