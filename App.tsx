import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { Divider, Colors } from 'react-native-paper'
import CounterBasic from './src/components/CounterBasic'
import store from './src/store'
import CounterRTKwithSliceConnect from './src/modules/CounterRTKwithSliceConnect'
import CounterRTKwithSliceReactHook from './src/modules/CounterRTKwithSliceReactHook'
import RTKwithSliceReduxHooksThunkAsync from './src/modules/RTKwithSliceReduxHooksThunkAsync'
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
          <CounterRTKwithSliceReactHook />
          <MyDivider />
          <CounterRTKwithSliceConnect />
          <Text>if ↓ click, it will be applied after 1 sec.</Text>
          <RTKwithSliceReduxHooksThunkAsync />
          <MyDivider />
        </View>
      </Provider>
    </SafeAreaView>
  )
}
