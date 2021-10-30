import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar.component'
import { Menu } from 'antd';
import { HomeOutlined,TeamOutlined,UserSwitchOutlined, NotificationOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard/Dashboard.component';
import Groups from '../../Components/Dashboard/Groups/Groups.component';
import Friends from '../../Components/Dashboard/Friends/Friends.component';
import Activity from '../../Components/Dashboard/Activity/Activity.component';
import Accounts from '../../Components/Dashboard/Accounts/Accounts.component';

const { SubMenu } = Menu;

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state ={
            current:props.match.params.action ? props.match.params.action : "dashboard"
        
        }
        console.log(props)

    }

    handleClick = e => {
        this.setState({ current: e.key });
      };
    

    render() {
        return (
            <div>
                <Navbar />
                
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                    <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                        <Link to="/home/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="groups" icon={<TeamOutlined />}>
                        <Link to="/home/groups">Groups</Link>
                    </Menu.Item>
                    <Menu.Item key="friends" icon={<UserSwitchOutlined />}>
                        <Link to="/home/friends">Friends</Link>
                    </Menu.Item>
                    <Menu.Item key="activity" icon={<NotificationOutlined />}>
                        <Link to="/home/activity">Activity</Link>
                    </Menu.Item>
                    <Menu.Item key="accounts" icon={<ProfileOutlined />}>
                        <Link to="/home/accounts">Account</Link>
                    </Menu.Item>
                </Menu>
                
                {this.state.current == "dashboard" ? <Dashboard /> : ""}
                {this.state.current == "groups" ? <Groups /> : ""}
                {this.state.current == "friends" ? <Friends /> : ""}
                {this.state.current == "activity" ? <Activity /> : ""}
                {this.state.current == "accounts" ? <Accounts /> : ""}

            </div>
        )
    }
}
