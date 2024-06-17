import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	useWindowDimensions,
	Image,
} from 'react-native';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import LoginVector from '@/theme/assets/images/login-vector.png';

function Login({ navigation, route }) {
	const { height } = useWindowDimensions();
	const { colors, layout, gutters, fonts } = useTheme();

	return (
		<SafeScreen>
			<ScrollView>
				<View
					style={[
						layout.justifyStart,
						layout.itemsStart,
						gutters.marginTop_24,
						gutters.paddingHorizontal_16,
					]}
				>
					<View
						style={[
							layout.relative,
							{
								width: '100%',
								height: height * 0.55,
								borderRadius: 20,
								backgroundColor: colors.white,
							},
							layout.justifyStart,
							layout.itemsCenter,
							gutters.paddingVertical_24,
						]}
					>
						<Text
							style={[
								fonts.size_32,
								fonts.sekarBlack,
								fonts.bold,
								gutters.marginBottom_12,
								{
									fontFamily: 'Montserrat-Regular',
								},
							]}
						>
							Sekar.
						</Text>
						<Text
							style={[
								fonts.size_16,
								fonts.sekarBlack,
								{
									fontFamily: 'Montserrat-Regular',
								},
							]}
						>
							Scan, Split and Share, bills easily
						</Text>

						<View
							style={[
								layout.itemsCenter,
								layout.justifyCenter,
								gutters.marginTop_40,
							]}
						>
							<Image source={LoginVector} style={{ width: 150, height: 150 }} />
						</View>
					</View>
				</View>

				<View style={[gutters.paddingHorizontal_16]}>
					<View style={[gutters.marginTop_32]}>
						<Text
							style={[
								fonts.size_24,
								fonts.gray800,
								fonts.bold,
								{
									fontFamily: 'Montserrat-Regular',
								},
							]}
						>
							Sign In
						</Text>
						<Text
							style={[
								fonts.gray400,
								fonts.size_16,
								gutters.marginBottom_32,
								{
									fontFamily: 'Montserrat-Regular',
								},
							]}
						>
							Scan, Split and Share, bills easily
						</Text>
					</View>

					<View
						style={[
							layout.col,
							layout.justifyBetween,
							layout.fullWidth,
							gutters.marginTop_16,
						]}
					>
						<TouchableOpacity
							activeOpacity={0.9}
							testID="fetch-user-button"
							style={[
								gutters.marginBottom_16,
								{
									width: '100%',
									height: 50,
									borderRadius: 20,
									backgroundColor: colors.white,
									justifyContent: 'center',
									alignItems: 'center',
								},
							]}
							onPress={() => {
								navigation.navigate('Home');
							}}
						>
							<Text
								style={[
									fonts.sekarBlack,
									fonts.size_14,
									fonts.bold,
									{
										fontFamily: 'Montserrat-Regular',
									},
								]}
							>
								Continue with google
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							activeOpacity={0.9}
							testID="fetch-user-button"
							style={[
								gutters.marginBottom_16,
								{
									width: '100%',
									height: 50,
									borderRadius: 20,
									backgroundColor: colors.pureBlack,
									justifyContent: 'center',
									alignItems: 'center',
								},
							]}
							onPress={() => {}}
						>
							<Text
								style={[
									fonts.white,
									fonts.size_14,
									fonts.bold,
									{
										fontFamily: 'Montserrat-Regular',
									},
								]}
							>
								You're an apple guy 
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

export default Login;
