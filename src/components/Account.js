import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Account extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.message}>{this.props['message']}</Text>
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

export default Account
