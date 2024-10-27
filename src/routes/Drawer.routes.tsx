import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './Stack.routes';
import theme from '../theme';
import StackBBRoutes from './StackBB.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {

  return (
    <Drawer.Navigator screenOptions={{
        title: "",
        drawerActiveBackgroundColor: theme.colors.green_500,
        headerStyle:{
          backgroundColor: theme.colors.green_20
        },
        drawerContentContainerStyle:{
            flex: 1,
            backgroundColor: theme.colors.green_20,
        },
        drawerLabelStyle:{
            color: theme.colors.black
        },
    }}>
      <Drawer.Screen
      name="HomeScreen"
      component={StackRoutes} 
      options={{
        drawerLabel: "Home"
      }}/>
      <Drawer.Screen
      name="Biblie"
      component={StackBBRoutes} 
      options={{
        drawerLabel: "Bíblia"
      }}/>
    </Drawer.Navigator>
  );
}