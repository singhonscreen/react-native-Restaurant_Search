import { useState, useEffect } from 'react'
import Yelp from '../Api/Yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    
      const searchApi = async (term)=>{
      try { const response = await Yelp.get('/search', {
          params:{
            limit:50,
            term,
            location:'san jose'
          }
        })
        setResults(response.data.businesses)
      }catch(err){
        setErrorMessage('Something went wrong')
      }
       }
       useEffect(() => {
       searchApi()
      }, [])
    return [searchApi, results, errorMessage ] 
}
  


