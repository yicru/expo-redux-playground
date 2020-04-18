import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { Divider, Colors } from 'react-native-paper'
import CounterBasic from './src/components/CounterBasic'
import configureStore from './src/store'
const store = configureStore()
const MyDivider = () => <Divider style={{ backgroundColor: Colors.red900 }} />

export default function () {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Provider store={store}>
        <View>
          <MyDivider />
          <CounterBasic />
          <MyDivider />
        </View>
      </Provider>
    </SafeAreaView>
  )
}
