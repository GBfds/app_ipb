import { createDrawerNavigator } from '@react-navigation/drawer';
import theme from '../theme';
import StackBBRoutes from './StackBB.routes';
import StackProfile from './StackProfile.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {

  return (
    <Drawer.Navigator screenOptions={{
        title: "",
        drawerActiveBackgroundColor: theme.colors.green_500,
        drawerContentContainerStyle:{
            flex: 1,
            backgroundColor: theme.colors.green_20,
        },
        drawerLabelStyle:{
            color: theme.colors.black
        },
    }}>
      <Drawer.Screen
      name="Biblie"
      component={StackBBRoutes} 
      options={{
        drawerLabel: "Bíblia"
      }}/>

      <Drawer.Screen
      name="Profile"
      component={StackProfile}
      options={{
        drawerLabel: "Perfil"
      }}/>

    </Drawer.Navigator>
  );
}