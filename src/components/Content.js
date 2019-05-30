import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Layout, Radio } from 'antd';
import { Col, Row } from 'antd';
import ArticleInfoCard from './ArticleInfoCard';
import List from './List';
import Card from './Card';
import sampleData from '../db.json';

class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			viewMode : "card",
			numberOfArticles : 0,
			numberOfUnRead : 0,
			data: sampleData,
			radioBackColor:[
				"#F4F8F9",
				"#FFFFFFFF"
			],
			iconImage:[
				"/images/card_active.svg",
				"/images/card.svg",
				"/images/table.svg",
				"/images/table_active.svg"
			],
			changeState:1
		}
		this.userlist =[]
		this.selectUserName = []
	}
	changeMode = (e) => {
		this.state.changeState ^=1;
		this.setState({viewMode: e.target.value});
	}
	onReadChange = (e) => {
		var {data} = this.state;
		data.articles[e].isRead = true;
		this.setState({numberOfUnRead: data.articles.filter(article => article.isRead==false).length});
		this.setState({data});
	}
	onReadAllChange(){
		var {data} = this.state;
		for( var i = 0; i < data.articles.length; i++ ){
			data.articles[i].isRead = true;
		}
		this.setState({data});
		this.setState({numberOfUnRead: data.articles.filter(article => article.isRead==false).length});
	}
	componentDidMount(){
		const {data} = this.state;
		this.setState({numberOfArticles: data.articles.length});
		this.setState({numberOfUnRead: data.articles.filter(article => article.isRead==false).length});
	}
  render(){
	const {viewMode, data} = this.state;

	let articles = null
	if (viewMode == "card") {
		articles = data.articles.map((element) => <Card data = {element} />);
	}else{
		articles = data.articles.map((element) => <List data = {element} onReadChange={e=>this.onReadChange(e)}/>);
	}
	
    return (
      <Layout className="Content">
        <Row>
			<div style={{display:"inline-block", float:"left"}}>
				<span style={{fontSize: 20}}>Article</span>
			</div>
			<div style={{backgroundColor: "#F4F8F9", padding: 10, borderRadius: 5, display:"inline-block", float:"right"}}>
				<Radio.Group defaultValue="card" buttonStyle="primary" onChange={this.changeMode}>
					<Radio.Button value="card" style = {{background:this.state.radioBackColor[this.state.changeState] }}><img src={this.state.iconImage[1-this.state.changeState]} ></img><span style={{marginLeft:'5px'}}>Card</span></Radio.Button>
					<Radio.Button  value="table" style = {{background:this.state.radioBackColor[1-this.state.changeState] }}><img src={this.state.iconImage[3-this.state.changeState]} ></img><span style={{marginLeft:'5px'}}>Table</span></Radio.Button>
				</Radio.Group>
			</div>
		</Row>
		<Row className="ArticleInfoCardContainer">
			<ArticleInfoCard value={this.state.numberOfArticles} labelId={0} onReadAllChange={()=>this.onReadAllChange()}/>
			<ArticleInfoCard value={this.state.numberOfUnRead} labelId ={1} onReadAllChange={()=>this.onReadAllChange()}/>
		</Row>
        <Row>
			<div className = "TodayFont">Today</div>
		</Row>
		<Row className="d-flex" style = {{flexWrap:"wrap"}}>{ viewMode == "card" && articles }</Row>
		<Row>{ viewMode == "table" && articles }</Row>
      </Layout>
    )
  }
}



export default Content;
