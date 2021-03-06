import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { closeModal } from '../native/NativeRequest'

class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.message}>{this.props['message']}</Text>
        <Button
          title={'Close'}
          onPress={() => closeModal()}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
})

export default Profile
