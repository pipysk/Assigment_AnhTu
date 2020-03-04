import React, { useState } from 'react';
import { StyleSheet, Text, View,Modal, ScrollView } from 'react-native';

import Index from './List';
import ListBook from './List/bookList';
export default function App() {

  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>

      <Index /> 
      <ListBook />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
