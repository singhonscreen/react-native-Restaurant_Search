import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList'

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage ] = useResults()
      const filterResultByPrice = (price)=>{
        return results.filter((result)=>{
          return result.price ===price
        })
      }
   
    return (
        <View style={{flex:1}}>
          <SearchBar term={term} onTermChange ={setTerm}
          onTermSubmit = {()=>searchApi(term)} />
          {errorMessage ? <Text>{errorMessage}</Text> :null}
         <ScrollView>
         <ResultList navigation={navigation} results = {filterResultByPrice('$')} title = 'Cost Effective' />
         
         <ResultList navigation={navigation} results = {filterResultByPrice('$$')} title = 'Bit Pricer' />
        
         <ResultList navigation={navigation} results = {filterResultByPrice('$$$$')} title = 'Big Spencer' />
         </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
