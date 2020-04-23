
import React from 'react'
import {Row, Col, Card, CardTitle, CardBody, CardHeader} from 'reactstrap';

export default function SpleetePackages(props) {

    return(
        <Col sm={12} md={6} lg={4}>
        <Card style={{padding: '14px', marginBottom: '15px'}}>
        <Row>
            <Col md={3} className="spleeteCard">
                {props.image} 
            </Col>
        
            <Col>
                    <CardHeader style={{ padding: 0, borderBottom: '0px',}}>
                    <CardTitle style={{fontSize: '15px'}}> {props.title}</CardTitle>
                    </CardHeader>
                    <CardBody  style={{padding: '0px', fontSize: '12px'}}>
                        {props.renderTitle}
                    </CardBody>
                
            </Col>
        </Row>
        </Card>
        </Col>
    )
}