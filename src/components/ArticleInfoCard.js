import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Popover, Icon, Input, Avatar, Button } from 'antd';
import { Col, Row } from 'antd';

class ArticleInfoCard extends Component {
	constructor(props){
		super(props);
		this.state={
			label:[
				"Number of articles",
				"Unread articles"
			],
			fontColor:[
				"#4DA1FF",
				"#FF6D4A"
			]
		}
	}
  onClick = () => {
	  this.props.onReadAllChange();
  }
  render(){
    return (
      <Layout className="ArticleInfoCard">
        <Row className="d-flex d-justify-between width-100">
			<div span="10">
				<div><strong>{this.state.label[this.props.labelId]}</strong></div>
				<div><span style={{fontSize: 24, color: this.state.fontColor[this.props.labelId], marginRight:10}} >{this.props.value}</span><span>This day</span></div>
			</div>
			<div  span = "14" className = "popover">
				<Popover
					placement="bottom" 
					content= { <div onClick={this.onClick} className = "popover">Mark as Read</div> }
					trigger="click">
					<div><Icon type="dash" /></div>
				</Popover>
			</div>
		</Row>
      </Layout>
    )
  }
}



export default ArticleInfoCard;
