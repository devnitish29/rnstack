import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { Platform, Image } from "react-native";
import Colors from '../utils/ColorsUtils'
import Icon from 'react-native-vector-icons/FontAwesome';

/* Bottom Tabs */
import ServicesTab from '../module/servicesTab/container/ServicesTabContainer';
import MyAadharTab from '../module/myAadharTab/container/MyAadharTabContainer';
import MoreTab from '../module/moreTab/container/MoreTabContainer';
import EcTab from '../module/ecTab/container/EcTabContainer';

/* Feedback Screen */
import FeedbackScreen from '../module/feedback/container/FeedbackContainer';
const MoreScreen  = createStackNavigator({
    MoreMain: {
        screen:MoreTab
    },
    Feedback:{
        screen:FeedbackScreen
    }
}, 
 {
     initialRouteName:"MoreMain",
     headerMode:"none"
 }

);


const MainAppTab = createBottomTabNavigator(
    {


        Services: {
            screen: ServicesTab,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="diamond"
                        size={20}
                        style={{ color: tintColor }} />
                )
            })
        },
        'My-Aadhaar': {
            screen: MyAadharTab,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="user-o"
                        size={20}
                        style={{ color: tintColor }} />
                )
            })
        },
        'Enrolment Center': {
            screen: EcTab,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="bank"
                        size={20}
                        style={{ color: tintColor }} />
                )
            })
        },
        More: {
            screen: MoreScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="ellipsis-v"
                        size={20}
                        style={{ color: tintColor }} />
                )
            })
        }

    }, {
        initialRouteName: "Services",
        tabBarPosition: 'bottom',
        lazy: false,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: Colors.primary,
            inactiveTintColor: 'gray',
            activeBackgroundColor: Colors.very_light_gray,
            inactiveBackgroundColor: Colors.white,
            style: {
                backgroundColor: Colors.white,
                height: 56,
            },
            labelStyle: {
                fontSize: 12,
                textAlign: "center",
                marginBottom: 5

            }

        }


    });




export default AppTabContainer = createAppContainer(MainAppTab);