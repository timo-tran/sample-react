import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Avatar, Button } from 'antd';
import { Col, Row } from 'antd';
import ArticleInfoCard from './ArticleInfoCard';

class Card extends Component {
  render(){
	let art = this.props.data;
    return (
	  	<div className = "CardInfo">
		  <Row className="d-justify-content-between ">
			  <Col span={12} >
	    		  <Avatar className="Avatar" size={100} src="images/avatar.png" />
			  </Col>
			  <Col span = {12}>
				<div className = "CardFontBold" style={{fontSize:"18px"}}>{art.author}</div>
				<div className = "CardFont" style={{marginBottom:"10px", fontSize:"14px"}}>{art.email}</div>
				<div className = "CardFont" style={{fontSize:"15px"}}>{art.jobTitle}</div>
     			</Col>
		  </Row>
			<div className = "CardFontBold" style={{marginBottom:"15px"}}>{art.title}
			</div>
			<div className = "CardFont block-with-text">{art.desc}</div>
			<div className = "CardMarkRed" hidden ={art.isRead == true}></div>

		</div>
    )
  }
}



export default Card;
