import React from 'react'
import { Formik, Form } from 'formik'
import { Text, Input, Container, Button } from '@chakra-ui/react'
import WithSubnavigation from './authnavbar'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../router/router'

function FormikExample() {

    const history = useHistory()

    const firebase = {
        submit: values => {
            setUser(values.username)
            setPassword(values.password)
            history.replace(ROUTES.view)
        }
    }

    const [user, setUser] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [ruser, rsetUser] = React.useState('')
    const [rpassword, rsetPassword] = React.useState('')

    return (
        <>
            <WithSubnavigation />
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
        </>
    )
}

export default FormikExample