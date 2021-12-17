import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultList = ({title,results,navigation}) => {
    if(!results.length){
        return null
      }
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('SearchShowResult', {id : item.id} )} >
                    <ResultDetails result = {item} />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
})
export default ResultList
