import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync(); // when the app is initially loading this is going to make the splash screen visible. It is the first screen a user sees when they open your app.
const Layout = () => {
	const [fontsLoaded] = useFonts({
		DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
		DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
		DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
	});

	if (!fontsLoaded) return null;

	return <Stack />;
};

export default Layout;
