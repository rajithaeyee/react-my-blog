import React, {Component} from 'react';
import { Layout, Card, Col, Row, Icon, Avatar, Me } from 'antd';
import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';

const {
     Content,
  } = Layout;
  const { Meta } = Card;
class Blog extends Component{
    componentDidMount(){
        this.props.getAllPosts();
    }
    render(){
        console.log(this.props.posts);
        let posts = [];
        if(this.props.posts.length>0){
             posts = this.props.posts.map(post=>{
                return(
                    <Col key={post.id} className="gutter-row" span={12}>
                    <Card key={post.id}
                    style={{ width: 300, marginRight:100, marginBottom:100 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={post.title}
                    description={post.description.substring(0,15)}
                />
                </Card>
                </Col>
                );
            });
        }
        return(
            <div>
            <Row>
                <h1>Blog</h1>
            </Row>
            <Row gutter={16}>
            {posts}
            </Row>
                 
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getAllPosts: () => dispatch({type:actionTypes.GET_POSTS})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog); //Blog



