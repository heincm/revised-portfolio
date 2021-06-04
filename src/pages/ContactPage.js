/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';


function Contact() {
    useEffect(() => {
        document.title = "Contact Me | Chris Hein"
    })

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!'
        }
    };
    
    const apiLink = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/email' : 'https://chris-portfolio-backend-api.herokuapp.com/email'

    const history = useHistory()

    const modalConfig = {
        title: 'Message Sent!',
        content: (
            <>
                <p> Thanks for reaching out. If you're not redirected to the home page in a few seconds, 
                    please <a href="/">click here</a>.</p>
            </>
        ),
        onOk: () => history.push('/')
    };

    const errorModal = {
        title: "Error Encountered",
        content: (
            <>
                <p>Something went wrong and your message was not sent. 
                    Please email me at <a href="mailto:chris.m.hein@gmail.com?Subject=Website%20Email">chris.m.hein@gmail.com</a>.</p>
            </>
        ),
        onOk: () => history.push('/')
    }

    const makeCall = async (data) => {
        const responseData = await axios.post(apiLink, data)
            .then(function (response) {
                console.log(response)
                return response;
            })
            .catch(function (error) {
                console.error(error)
            })

        if (responseData) {
            setTimeout(() => {
                Modal.destroyAll()
                history.push('/')
            }, 3000);
            return Modal.info(modalConfig)
        }
        return Modal.error(errorModal)
    }

    const onFinish = (values) => {
        let { email, text } = values.body;
        let subject = `Website email from ${values.body.subject}`
        const data = { email, subject, text };
        makeCall(data);
    };

    return (
        <main>
            <div className="container contact-container">
                <h1 className="center-align">Contact Me</h1>
                <p>Use the form below to send me a message or email me at <a href="mailto:chris.m.hein@gmail.com?Subject=Website%20Email">chris.m.hein@gmail.com</a>.</p>
                <div className="row">
                    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name={['body', 'subject']}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['body', 'email']}
                            label="Email Address"
                            rules={[
                                {
                                    type: 'email',
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['body', 'text']}
                            label="Message"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Contact;