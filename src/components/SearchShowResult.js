import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View,FlatList, Image } from 'react-native';
import Yelp from '../Api/Yelp';


const SearchShowResult = ({route}) => {
    const [result, setResult] = useState(null)
    const id = (route.params.id);
    const getResult = async(id)=>{
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id)
    },[])
    // console.log(result)
    if(!result){
        return null
    }
    return (
        <View >
            <Text style={styles.textStyle} >{result.name}</Text>
            <FlatList 
            keyExtractor={(photos)=>photos}
            data = {result.photos}
            renderItem={({item})=>{
                return <Image style={styles.imageStyle} source={{uri:item}} />
            }}  
            />
        </View>
    )
}

export default SearchShowResult

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        marginHorizontal:10,
        flex:1,
        marginVertical:10
    },
    textStyle:{
        marginLeft:10,
        fontSize:18,
        fontWeight:"bold"
    }
})
