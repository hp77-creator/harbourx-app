import React, { Component } from 'react';
import { PageHeader,Button,Dropdown,Menu,Table, Tag, Space, Switch,Spin  } from 'antd';
import { EllipsisOutlined,LoadingOutlined  } from '@ant-design/icons';
import { BrowserRouter,Link,Route } from 'react-router-dom';


import hosts from "./../../../hosts.json";
import endpoints from "./../../../endpoints.json";
import cookies from '../../../functions/cookies';



const routes = [
    {
      breadcrumbName: 'Home',
    },
    {
      breadcrumbName: 'Friends',
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
      render: text => <span>{text}</span>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Joined At',
      key: 'joinedat',
      dataIndex:"joinedat"
    },
  ];



  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default class Friends extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:[],
      isLoading:true
    }
  }

  getAllFriends = async ()=>{
    let re = await fetch(hosts.default + endpoints.getAllFriends,{
      method:"GET",
      headers:{
        'Authorization': 'Bearer '+cookies.getCookie("accessToken")
      }
    });


    let da = await re.json()

    console.log(da)
    
    let newd = []
    for(let i=0; i < da.length; i++){
      let obj = {};
      obj["key"] = da[i].id;
      obj["username"] = da[i].username;
      obj["name"] = da[i].firstname +" "+ da[i].lastname;
      obj["email"] = da[i].email;
      obj["joinedat"] = (new Date(Number(da[i].joinedat))).toString()

      newd.push(obj)
    }
    console.log(newd)
    this.setState({data:newd,isLoading:false})

  }
  componentDidMount(){

    this.getAllFriends()
    

  }






    render() {
        return (
            <div>
                <div style={{margin:"0 auto", maxWidth:"1386px"}}>
                <PageHeader
                    className="site-page-header"
                    title="Friends"
                    breadcrumb={{ routes }}
                    extra={[
                        <Button key="1" type="primary">
                          Add a Friend
                        </Button>,
                        <DropdownMenu key="more" />,
                      ]}
                />





                <div >
                  {this.state.isLoading ?<Spin indicator={antIcon} size="large" /> : "" }
                    <Table columns={columns} dataSource={this.state.data} />
                </div>

                    {/* <BrowserRouter>
                          <Route path="/" exact render={()=><div>frie </div>}/>
                          <Route path="test" render={()=><div>frisdfsdfge </div>}/>
                    </BrowserRouter> */}


                </div>
            </div>
        )
    }
}
