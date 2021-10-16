import React from 'react'
import { Formik, Form } from 'formik'
import { Text, Input, Container, Button } from '@chakra-ui/react'
import WithSubnavigation from './signednavbar'

function FormikExample() {

   
    const firebase = {
        submit: values => {
                  
        }
    }


    return (
        <>
        <WithSubnavigation />
        <Formik
            initialValues={{
                definition: '',
                term: ''
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
                            <Text mb="8px" fontWeight={"semibold"}>Term: </Text>
                            <Input
                                name="term"
                                value={props.values.term}
                                onChange={props.handleChange}
                                placeholder="Enter your card term here..."
                                size="md"
                                onBlur={props.handleBlur}
                            />
                        </Container>
                        <Container padding="2">
                            <Text mb="8px" fontWeight={"semibold"} >Meaning: </Text>
                            <Input
                                name="definition"
                                value={props.values.definition}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                placeholder="Enter your card meaning here..."
                                size="md"
                            />
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