
import React, {Component} from 'react';
import {Row, Col, CardTitle, CardBody} from 'reactstrap';

import { Form, Input, Button, Checkbox, Table, Tag, Card } from 'antd';
import ProfileBar from '../../MiniComponents/ProfileBar';

export default class AddEmployee extends Component {

    render(){
     
        return(
            <>
                <Row>
                   <ProfileBar className="d-md-none"/>

                    <Col md={9} className="mainBg p-4">
                      <Card>
                          <Col lg={12} className='border-bottom pb-2'>
                                <Row>
                                    <Col>
                                        <b>Add Employees</b>
                                    </Col>
                                    <Col className='text-right'>
                                        <Button small type='danger' className='mr-2'>cancel</Button>
                                    </Col>
                                </Row>
                          </Col>


                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            >
                            
                            <Row>
                                <Col md={6}>
                                <Form.Item
                                label="Name"
                                name="Name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input />
                            </Form.Item>
                                </Col>

                                <Col md={6}>
                            <Form.Item
                                label="Position"
                                name="position"
                                rules={[{ required: true, message: 'Please input your position!' }]}
                            >
                                <Input/>
                            </Form.Item>
                                </Col>


                                
                                <Col md={6}>
                            <Form.Item
                                label="Salary"
                                name="salary"
                                rules={[{ required: true, message: 'Please input your salary!' }]}
                            >
                                <Input/>
                            </Form.Item>
                                </Col>

                                <Col lg={12} className='border-bottom pb-2'>
                                    <b>Employment Details</b>
                                </Col>


 
                            <Col md={6}>
                                <Form.Item
                                    label="Salary"
                                    name="salary"
                                    rules={[{ required: true, message: 'Please input your salary!' }]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>


                            </Row>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                            </Form.Item>
                            </Form>
                         
                      </Card>
                    </Col>

                </Row>

            </>
        )
    }
}