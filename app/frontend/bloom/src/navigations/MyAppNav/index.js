import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../../pages/Main';
import AlarmPage from '../../pages/Alarm';
import CartPage from '../../pages/Cart';
import ChangeInfoPage from '../../pages/ChangeInfo';
import InitPage from '../../pages/Init';
import MapPage from '../../pages/Map';
import MenuDetailPage from '../../pages/MenuDetail';
import MyInfoPage from '../../pages/MyInfo';
import PicnicingPage from '../../pages/Picnicing';
import PicnicedPage from '../../pages/Picniced';
import PicnicPage from '../../pages/Picniced';
import PwdCheckPage from '../../pages/PwdCheck';
import SearchResultPage from '../../pages/SearchResult';
import ShopPage from '../../pages/Shop';
import ShopHomePage from '../../pages/ShopHome';
import ShopMenuPage from '../../pages/ShopMenu';
import ShopReviewPage from '../../pages/ShopReview';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import WishListPage from '../../pages/WishList';

const MyApp = () => {
  const Stack = createNativeStackNavigator();
  const TopTab = createMaterialTopTabNavigator();
  const Tab = createBottomTabNavigator();

  function MainNav({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          initialRouteName: 'Homes',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Homes"
          component={MainPage}
          options={{title: '홈'}}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResultPage}
          options={{title: '검색', headerRight: null}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopPage}
          options={{title: '가게'}}
        />
      </Stack.Navigator>
    );
  }

  function WishListNav({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="WishLists"
          component={WishListPage}
          options={{title: '위시리스트'}}
        />
        <Stack.Screen
          name="Shops"
          component={ShopPage}
          options={{title: '가게'}}
        />
      </Stack.Navigator>
    );
  }

  function TopTabStackPicnicScreen() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="PicnicTap"
          component={PicnicNav}
          options={{title: '피크닉'}}
        />
      </Stack.Navigator>
    );
  }
  function PicnicNav({}) {
    return (
      <TopTab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle: {backgroundColor: '#F2A7B3'},
          tabBarStyle: {
            backgroundColor: '#white',
          },
          tabBarLabelStyle: {fontSize: 15},
          initialRouteName: 'Picnicing',
        }}>
        <TopTab.Screen
          name="Picnicing"
          component={PicnicingPage}
          options={{title: '진행중인 예약'}}
        />
        <TopTab.Screen
          name="Picniced"
          component={PicnicedPage}
          options={{title: '완료된 예약'}}
        />
      </TopTab.Navigator>
    );
  }
  function CartNav() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Carts"
          component={CartPage}
          options={{title: '장바구니'}}
        />
        <Stack.Screen
          name="Menus"
          component={MenuDetailPage}
          options={{title: '상품상세페이지'}}
        />
      </Stack.Navigator>
    );
  }

  function MyInfoNav() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          initialRouteName: 'MyInfos',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="MyInfos"
          component={MyInfoPage}
          options={{title: '내 정보'}}
        />
        <Stack.Screen
          name="PwdCheck"
          component={PwdCheckPage}
          options={{title: '비밀번호 확인'}}
        />
        <Stack.Screen
          name="ChangeInfo"
          component={ChangeInfoPage}
          options={{title: '내 정보 수정'}}
        />
      </Stack.Navigator>
    );
  }

  function MyAppNav() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          initialRouteName: 'Home',
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Home"
          component={MainNav}
          options={{tabBarLabel: '홈'}}
        />
        <Tab.Screen
          name="WishList"
          component={WishListNav}
          options={{title: '위시리스트'}}
        />
        <Tab.Screen
          name="Picnic"
          component={TopTabStackPicnicScreen}
          options={{title: '피크닉'}}
        />
        <Tab.Screen
          name="Cart"
          component={CartNav}
          options={{title: '장바구니'}}
        />
        <Tab.Screen
          name="MyInfo"
          component={MyInfoNav}
          options={{title: '내정보'}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="InitScreen" component={InitPage} /> */}
      <Stack.Screen name="appScreen" component={MyAppNav} />
    </Stack.Navigator>
  );
};

export default MyApp;