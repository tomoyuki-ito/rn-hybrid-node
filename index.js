import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

// components
import Profile from './src/components/Profile'
import Account from './src/components/Account'
import Other from './src/components/Other'

// register
AppRegistry.registerComponent('Profile', () => Profile)
AppRegistry.registerComponent('Account', () => Account)
AppRegistry.registerComponent('Other', () => Other)
