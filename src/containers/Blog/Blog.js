import React, {Component} from 'react';
import { Layout } from 'antd';
import axios from  'axios';
import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';

const {
     Content,
  } = Layout;

class Blog extends Component{
    componentDidMount(){
        axios.get('http://localhost:3001/posts').then(result=>{
            console.log(result.data);
        });
    }
    render(){
        return(
            <h1>Blog</h1>
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



