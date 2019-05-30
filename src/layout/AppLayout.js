import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Radio, Button } from 'antd';
import { Col, Row } from 'antd';

import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import Content from "../components/Content";

class AppLayout extends Component {
  render(){
    return (
      <Layout className="MainLayout">
        <SideMenu />
		<Row className="MainContent">
			<Header />
			<Content />
		</Row>
      </Layout>
    )
  }
}



export default AppLayout;
