import React from 'react'
import { StyleSheet, TextInput, View,Text } from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        
        <View style={styles.background}>
        <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
             style={styles.inpuStyle} placeholder='Search' 
             value={term}
             onChangeText={(text)=>onTermChange(text)}
             autoCapitalize='none'
             autoCorrect={false}
             onEndEditing={onTermSubmit}
             />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:"#F0EEEE",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:15
    },
    inpuStyle:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{
        alignSelf:"center",
        fontSize:30,
        marginHorizontal:15
    }
})
