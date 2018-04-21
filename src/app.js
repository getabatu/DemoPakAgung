import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { create } from 'apisauce'
import { observable } from 'mobx'

export default class App extends React.Component {
  
  render() {
    const { list } = this
    return (
      <View style={styles.container}>
        <Text>list.englishName</Text>
        <Text>list.englishNameTranslation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});