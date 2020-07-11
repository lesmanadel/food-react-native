import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term} onTermChange={setTerm}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
       />
       {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Search Screen</Text>
      <Text>Found {results.length} result(s)</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice(2)}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice(3)}
          title="Not that Cheap"
        />
        <ResultsList
          results={filterResultsByPrice(4)}
          title="Higher End"
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen;
