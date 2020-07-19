import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings81012Navigator from '../features/Settings81012/navigator';
import UserProfile81005Navigator from '../features/UserProfile81005/navigator';
import Settings81004Navigator from '../features/Settings81004/navigator';
import Settings81002Navigator from '../features/Settings81002/navigator';
import SignIn281000Navigator from '../features/SignIn281000/navigator';
import Settings80984Navigator from '../features/Settings80984/navigator';
import Settings80967Navigator from '../features/Settings80967/navigator';
import Settings80950Navigator from '../features/Settings80950/navigator';
import Settings80933Navigator from '../features/Settings80933/navigator';
import Settings80916Navigator from '../features/Settings80916/navigator';
import Settings80882Navigator from '../features/Settings80882/navigator';
import Settings80865Navigator from '../features/Settings80865/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings81012: { screen: Settings81012Navigator },
UserProfile81005: { screen: UserProfile81005Navigator },
Settings81004: { screen: Settings81004Navigator },
Settings81002: { screen: Settings81002Navigator },
SignIn281000: { screen: SignIn281000Navigator },
Settings80984: { screen: Settings80984Navigator },
Settings80967: { screen: Settings80967Navigator },
Settings80950: { screen: Settings80950Navigator },
Settings80933: { screen: Settings80933Navigator },
Settings80916: { screen: Settings80916Navigator },
Settings80882: { screen: Settings80882Navigator },
Settings80865: { screen: Settings80865Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
