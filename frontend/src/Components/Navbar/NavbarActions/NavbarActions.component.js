import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./NavbarActions.scss"
import { MainContext } from '../../../ContextAPIs/ContextAPIs';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const menu = (
    <Menu>
      <Menu.Item key={1}>
          Friends
      </Menu.Item>
      <Menu.Item  key={2}>
          Groups
      </Menu.Item>
      <Menu.Item key={3}>
          Settings
      </Menu.Item>
      <Menu.Item danger > Logout </Menu.Item>
    </Menu>
  );


export default function NavbarActions() {
    let mainContext = useContext(MainContext)
    
    return (
        <div className="navbar-actions-container">
            <div><div className="action-item">Home</div></div>
            <div><div className="action-item">Features</div></div>
            <div><div className="action-item">About</div></div>
            <div>
                {mainContext.appState.islogged == false ? 
                    <Link to="/login"><div className="dark-action-item">Login / Sign Up</div></Link>
                
                : 
                <div>
                    <Link to="/home">
                        <Dropdown overlay={menu}>
                            <div className="dark-action-item">
                                pushpendrahpx <DownOutlined />
                                </div>
                            
                        </Dropdown>
                    </Link>
                </div>
                    
                }
            </div>
        </div>
    )
}
