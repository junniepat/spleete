
import React from 'react'
import {Row, Col, Card, CardTitle, CardBody, CardHeader} from 'reactstrap';

export default function BusinessCard(props) {

    return(
        <>
            <Col  sm={12} md={6} lg={3}>
                <Card style={{ marginBottom: '15px'}}>
                    <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    </CardHeader>
                    <CardBody className=' text-center'>
                        {props.renderTitle}
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}