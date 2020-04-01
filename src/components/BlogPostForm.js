import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const BlogPostForm = ({initialValues, onSubmit}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button title="Save Post" onPress={() => onSubmit(title, content)}/>
        </View>
    )
}

export default BlogPostForm

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
})