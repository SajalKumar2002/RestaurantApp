import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, SetSearchTerm] = useState();
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={searchTerm}
        onTermChange={SetSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text  >{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
