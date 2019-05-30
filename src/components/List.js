import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Avatar, Button } from 'antd';
import { Col, Row } from 'antd';

class List extends Component {

	constructor(props){
		super(props);
	}

	onReadChange=(e)=>{
	  this.props.onReadChange(e);
  }
  render(){
	let art = this.props.data;
	let tags = null;
	tags = art.tags.map((element) => <span className = "ListTag">{element}</span> );

    return (
      <div className="List">
	  	<div className = "ListInfoCard">
		  <div class="d-flex d-align-items-center">
		  	<div>
			  <Avatar className="Avatar" size={64} src="images/avatar.png" />
			</div>
			<div style={{width: '150px', flexShrink: 0}}>
					<div className = "ListAuthorFont">{art.author}</div>
					<div className = "ListMailFont">{art.email}</div>
					<div className = "ListJobTileFont">{art.jobTitle}</div>
		    </div>
			<div >
				<div className = "block-with-text-list1 ListTitleFont"><strong>{art.title}</strong></div>
				<div className = "block-with-text-list ListDescFont">{art.desc}</div>
			</div>
			</div>
			<div class="d-flex">
				<div className="ListTagContainer">{ tags}</div>
				<div className="d-flex d-justify-content-center d-align-items-center">
					<img style={{marginRight: 20}} src = "images/delete.svg"></img>
					<Button type="primary" hidden = {art.isRead == true} onClick={ ()=>this.onReadChange(art.id) }>Mark as read</Button>
					<span className = "ListMarkRed" width={100} hidden ={art.isRead == true}></span>
				</div>
			</div>

		</div>
      </div>
    )
  }
}



export default List;
