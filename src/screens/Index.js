import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost} = useContext(BlogContext)

    return (
        <View>
            {state && <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}}/>
            }
        </View>
    )
}

export default IndexScreen

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}></Feather>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    row: {
        borderTopWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    }
})
