import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from '../../pages/Main';
import AlarmPage from '../../pages/Alarm';
import CartPage from '../../pages/Cart';
import ChangeInfoPage from '../../pages/ChangeInfo';
import SignPage from '../../pages/Sign';
import MapPage from '../../pages/Map';
import MenuDetailPage from '../../pages/MenuDetail';
import MyInfoPage from '../../pages/MyInfo';
import PicnicingPage from '../../pages/Picnicing';
import PicnicedPage from '../../pages/Picniced';
import PwdCheckPage from '../../pages/PwdCheck';
import SearchResultPage from '../../pages/SearchResult';
import ShopPage from '../../pages/Shop';
import ShopHomePage from '../../pages/ShopHome';
import ShopMenuPage from '../../pages/ShopMenu';
import ShopReviewPage from '../../pages/ShopReview';
import WishListPage from '../../pages/WishList';
import RegisterReview from '../../pages/RegisterReview';

/**
 * LDJ | 2022.05.06
 * @name MyApp_Sign
 * @des
 * 로그인 안했을 때 Sign Page가 뜨게 하기 위해서 일단 추가했습니다.
 * 좀 더 나은 방법이 나올 때 까진 이렇게 하겠습니다.
 * MyApp은 로그인이 되었을 때 로직입니다. (Main Page로 감)
 *  */

const MyApp_Sign = () => {
  const Stack = createNativeStackNavigator();
  const TopTab = createMaterialTopTabNavigator();
  const Tab = createBottomTabNavigator();

  function MainNav({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          initialRouteName: 'Homes',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Stack.Screen
          name="Homes"
          component={MainPage}
          options={{
            title: '홈',
            headerRight: () => (
              <Icon.Button
                onPress={() =>
                  navigation.navigate('Alarm', {navigation: `${navigation}`})
                }
                name="notifications-outline"
                color="white"
                backgroundColor="#F2A7B3"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchResultPage}
          options={{title: '검색결과'}}
        />
        <Stack.Screen
          name="Alarm"
          component={AlarmPage}
          options={{title: '알람', headerRight: null}}
        />
        <Stack.Screen
          name="ShopDetail"
          component={TopTabStackShopScreen}
          options={{title: '가게 상세정보'}}
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
          options={{title: '지도'}}
        />
      </Stack.Navigator>
    );
  }

  function TopTabStackShopScreen() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Shoptap"
          component={ShopNav}
          options={{title: '가게이름'}}
        />
      </Stack.Navigator>
    );
  }

  function ShopNav() {
    return (
      <TopTab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle: {backgroundColor: '#F2A7B3'},
          tabBarStyle: {
            backgroundColor: '#white',
          },
          tabBarLabelStyle: {fontSize: 12},
          initialRouteName: 'ShopHome',
        }}>
        <TopTab.Screen
          name="ShopHome"
          component={ShopHomePage}
          options={{title: '홈'}}
        />
        <TopTab.Screen
          name="ShopMenu"
          component={ShopMenuPage}
          options={{title: '메뉴'}}
        />
        <TopTab.Screen
          name="ShopReview"
          component={ShopReviewPage}
          options={{title: '리뷰'}}
        />
      </TopTab.Navigator>
    );
  }

  function WishListNav({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
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
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Stack.Screen
          name="PicnicTap"
          component={PicnicNav}
          options={{title: '피크닉'}}
        />
        <Stack.Screen
          name="RegisterReview"
          component={RegisterReview}
          options={{title: '리뷰 등록'}}
        />
      </Stack.Navigator>
    );
  }

  function PicnicNav() {
    return (
      <TopTab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle: {backgroundColor: '#F2A7B3'},
          tabBarStyle: {
            backgroundColor: '#F8F8F8',
          },
          tabBarLabelStyle: {fontSize: 12},
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
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
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
          headerTitleAlign: 'left',
          initialRouteName: 'MyInfo',
          headerStyle: {
            backgroundColor: '#F2A7B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Stack.Screen
          name="MyInfo"
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
          tabBarActiveTintColor: '#F2A7B3',
          tabBarInactiveTintColor: '#6A6A6A',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Home"
          component={MainNav}
          options={{
            tabBarLabel: '홈',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({focused}) => (
              <Icon
                name="home-outline"
                style={{color: focused ? '#F2A7B3' : '#6A6A6A'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WishList"
          component={WishListNav}
          options={{
            title: '위시리스트',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({focused}) => (
              <Icon
                name="heart-outline"
                style={{color: focused ? '#F2A7B3' : '#6A6A6A'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Picnic"
          component={TopTabStackPicnicScreen}
          options={{
            title: '피크닉',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({focused}) => (
              <Icon
                name="flower-outline"
                style={{color: focused ? '#F2A7B3' : '#6A6A6A'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartNav}
          options={{
            title: '장바구니',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({focused}) => (
              <Icon
                name="cart-outline"
                style={{color: focused ? '#F2A7B3' : '#6A6A6A'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyInfos"
          component={MyInfoNav}
          options={{
            title: '내정보',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({focused}) => (
              <Icon
                name="person-outline"
                style={{color: focused ? '#F2A7B3' : '#6A6A6A'}}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignScreen" component={SignPage} />
      {/* <Stack.Screen name="appScreen" component={MyAppNav} /> */}
    </Stack.Navigator>
  );
};

export default MyApp_Sign;