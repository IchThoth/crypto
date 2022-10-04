import React from 'react';
import {Button,Menu,Typography,Avatar} from 'antd';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar />
            <Typography.Title level={2} className="logo">
                <link to="./">Cryptodog</link>
            </Typography.Title>
            {/*<Button className="menu-control-container">

            </Button>*/}
        </div>
    </div>
  )
}

export default Navbar