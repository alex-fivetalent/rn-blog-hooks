import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet } from 'react-native';
import { Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const { state, updateBlogPost } = useContext(BlogContext);
    const paramId = navigation.getParam('id');
    const blogPost = state.find(post => post.id === paramId);

    const handleSubmit = ( title, content ) => {
        updateBlogPost(paramId, title, content, () => {navigation.pop()});
    }

    const initialValues = {
        title: blogPost.title,
        content: blogPost.content,
    }

    return (
        <BlogPostForm onSubmit={handleSubmit} initialValues={initialValues}/>
    )
}

export default EditScreen

const styles = StyleSheet.create({

})
