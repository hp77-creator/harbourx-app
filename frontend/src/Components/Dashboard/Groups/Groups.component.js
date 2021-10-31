import { Button, Typography,Table,Menu,Dropdown,Tag,Space,PageHeader } from 'antd';
import React, { Component } from 'react'
import { EllipsisOutlined } from '@ant-design/icons';
// Typography
import hosts from "./../../../hosts.json";
import endpoints from "./../../../endpoints.json";

const { Title } = Typography;

const routes = [
    {
      breadcrumbName: 'Home',
    },
    {
      breadcrumbName: 'Groups',
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  
const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu} placement="topLeft" arrow>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );




  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
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
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
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
      tags: ['cool', 'teacher'],
    },
  ];
export default class Groups extends Component {

      
    render() { 
        
        return (
            <div style={{margin:"0 auto", maxWidth:"1386px"}}>
                <PageHeader
                    className="site-page-header"
                    title="Friends"
                    breadcrumb={{ routes }}
                    extra={[
                        <Button key="1" type="primary">
                          Primary
                        </Button>,
                        <DropdownMenu key="more" />,
                      ]}
                />




                <div>
                   
                    <Table columns={columns} dataSource={data} />
                </div>
                
            </div>

        )
    }
}
