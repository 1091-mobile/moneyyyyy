import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { firebase } from '../../firebase/config'

import page1 from './page1';
import page2 from './page2';
import chart from '../ChartScreen/Chart';

function SignOut({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>登出看我</Text>
      
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="記帳點我" component={page1} />
      <Drawer.Screen name="圖表看我" component={page2} />
      <Drawer.Screen name="登出走這裡" component={SignOut}/>
      <Drawer.Screen name="真正的圖表看這裡" component={chart}/>
      
    </Drawer.Navigator>
  );
}

export default function homescreen() {
  return (
    
      <MyDrawer />
    
  );
}
