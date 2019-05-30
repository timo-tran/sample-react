import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Avatar, Button } from 'antd';
import { Col, Row } from 'antd';

class Header extends Component {
  render(){
    return (
      <Layout className="Header">
        <Input className="SearchInput" 
			prefix={<Icon type="search" style={{ fontSize: '25px', color: 'rgba(0,0,0,.25)' }} />}
			placeholder="Find a user, team, meeting…" />
		<Avatar className="Avatar" size={64} src="images/avatar.png" />
      </Layout>
    )
  }
}



export default Header;
