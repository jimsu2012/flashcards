import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { Text, Input, Container, Button, InputGroup, InputLeftElement, InputRightElement, Flex, useColorModeValue, Stack, Heading, Link, Box } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import WithSubnavigation from './authnavbar'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../router/router'
import { baseUrl } from '../../constants/constants'

function FormikExample() {
    const url = [baseUrl, 'api', 'api-token-auth'].join('/');

    const history = useHistory()

    const [error, setError] = useState(null);
    const [show, setShow] = useState(false)

    const handleChangePass = () => {
        setShow(!show)
    }

    const apiSubmit = values => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: values.username,
                password: values.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then((result) => {
            const token = result.token;
            localStorage.setItem('token', token);
            console.log(result);
            if (token) {
                history.replace(ROUTES.view)
            } else {
                setError('Invalid username/password combination');
            }
        }, (error) => {
            setError(error);
        })
    }

    return (
        <>

            <WithSubnavigation />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Formik
                                initialValues={{
                                    password: '',
                                    username: ''
                                }}


                                onSubmit={(values, actions) => {
                                    apiSubmit(values)
                                    actions.setSubmitting(false)
                                }}
                            >
                                {props => (
                                    <Container paddingTop={"15"} >
                                        <Form onSubmit={props.handleSubmit} >
                                            <Container padding="2" >
                                                <Text mb="8px" fontWeight={"semibold"}>Email: </Text>

                                                <InputGroup>
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<EmailIcon color="gray.600" />}
                                                    />
                                                    <Input
                                                        name="username"
                                                        id="username"
                                                        value={props.values.username}
                                                        onChange={props.handleChange}
                                                        placeholder="Enter your username here..."
                                                        size="md"
                                                        onBlur={props.handleBlur}
                                                    />
                                                </InputGroup>
                                            </Container>
                                            <Container padding="2">
                                                <Text mb="8px" fontWeight={"semibold"} >Password: </Text>
                                                <InputGroup>
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<LockIcon color="gray.600" />}
                                                    />
                                                    <Input
                                                        name="password"
                                                        id="password"
                                                        value={props.values.password}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        placeholder="Enter your password here..."
                                                        size="md"
                                                        type={show ? "text" : "password"}

                                                    />
                                                    <InputRightElement>
                                                        <Button mr={7} paddingX={6} h="2rem" size="sm" onClick={handleChangePass}>
                                                            {show ? "Hide" : "Show"}
                                                        </Button>
                                                    </InputRightElement>

                                                </InputGroup>


                                            </Container>
                                            <Container padding="2" >
                                                <Button
                                                    onClick={props.handleSubmit}
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
                                                <Button
                                                    onClick={() => history.replace(ROUTES.view)}
                                                    fontFamily={'heading'}
                                                    mt={8}
                                                    w={'full'}
                                                    bgGradient="linear(to-r, green.400,blue.400)"
                                                    color={'white'}
                                                    _hover={{
                                                        bgGradient: 'linear(to-r, green.400,blue.400)',
                                                        boxShadow: 'xl',
                                                    }}>
                                                    Next Page
                                                </Button>
                                            </Container>
                                        </Form>
                                    </Container>
                                )}
                            </Formik>
                            <div style={{color: 'red'}}>{error ? <div>Error: {error}</div> : null}</div>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>

        </>
    )
}

export default FormikExample