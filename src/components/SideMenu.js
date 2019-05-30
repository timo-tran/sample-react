import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Radio, Button } from 'antd';
import { Col, Row } from 'antd';

class SideMenu extends Component {
  render(){
    return (
      <Layout className="SideMenu">
        <Row className="Logo">
			<img src="/images/logo.png" ></img>
		</Row>
		<Row className="Menu">
			<Row className="MenuItem">
				<img src="/images/dashboard_icon.svg" ></img>
			</Row>
			<Row className="MenuItem">
				<img src="/images/sessions_icon.svg" ></img>
			</Row>
			<Row className="MenuItem">
				<img src="/images/meetings_icon.svg" ></img>
			</Row>
			<Row className="MenuItem">
				<img src="/images/files_icon.svg" ></img>
			</Row>
			<Row className="MenuItem">
				<img src="/images/conversations_icon.svg" ></img>
			</Row>
			<Row className="MenuItem">
				<img src="/images/settings_icon.svg" ></img>
			</Row>
		</Row>
      </Layout>
    )
  }
}



export default SideMenu;
