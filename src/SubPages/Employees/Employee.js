
import React, {Component} from 'react';
import {Row, Col, CardTitle, CardBody} from 'reactstrap';

import {Table, Tag, Button, Card } from 'antd';
import ProfileBar from '../../MiniComponents/ProfileBar';

export default class Employee extends Component {

    render(){
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
                title: 'Position',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                  <span>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      if (tag === 'loser') {
                        color = 'volcano';
                      }
                      return (
                        <Tag color={color} key={tag}>
                          {tag.toUpperCase()}
                        </Tag>
                      );
                    })}
                  </span>
                ),
              },
            {
              title: 'Salary',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
         
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <>
                    <Button small type='primary' className='mr-2'>Edit</Button>
                    <Button small type='danger'>Delete</Button>
                </>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['Software developer'],
            },
          ];


        return(
            <>
                <Row>
                   <ProfileBar className="d-md-none"/>

                    <Col md={9} className="mainBg p-4">
                      <Card>
                          <Col lg={12} className='border-bottom pb-2'>
                                <Row>
                                    <Col>
                                        <b>Employees</b>
                                    </Col>
                                    <Col className='text-right'>
                                        <Button small type='primary' className='mr-2'>+ Add Employee</Button>
                                    </Col>
                                </Row>
                          </Col>
                          <Table columns={columns} dataSource={data} />
                      </Card>
                    </Col>

                </Row>

            </>
        )
    }
}