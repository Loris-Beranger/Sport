import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'
import { getFieldList } from './Hooks'
import FieldThumbnail from './FieldThumbnail/FieldThumbnail'

const Home = () => {
  const { isLoading, data } = getFieldList()

  if (isLoading) {
    return <Text>loading...</Text>
  }
  console.log(data)
  const fieldList = data['data'].records
  console.log(fieldList)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.homeContainer}>
        {fieldList.map((field) => (
          <FieldThumbnail key={field.recordid} field={field} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  homeContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
})
