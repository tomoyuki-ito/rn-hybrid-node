import { NativeModules } from 'react-native'

export const closeModal = () => {
  NativeModules.NativeRequest.send('closeModal', null)
}
