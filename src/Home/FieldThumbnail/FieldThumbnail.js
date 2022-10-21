import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FieldThumbnail = ({ field }) => {
  return (
    <View style={styles.fieldThumbnailContainer}>
      <View style={styles.topContentContainer}>
        <Text style={styles.locationText}>{field.fields.nom_commune}</Text>
        <Text style={styles.distanceText}>5km</Text>
      </View>

      <Text style={styles.title}>{field.fields.nomequipement}</Text>
    </View>
  )
}

export default FieldThumbnail

const styles = StyleSheet.create({
  fieldThumbnailContainer: {
    backgroundColor: 'rgba(0,183,227,0.8)',
    marginBottom: 10,
    flex: 1,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  topContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  locationText: {
    color: 'white',
  },
  distanceText: {
    color: 'white',
    position: 'absolute',
    right: 0,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    margin: 10,
    color: 'white',
  },
})
