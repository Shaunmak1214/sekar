import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	useWindowDimensions,
} from 'react-native';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import { isImageSourcePropType } from '@/types/guards/image';

import SendImage from '@/theme/assets/images/send.png';
import ColorsWatchImage from '@/theme/assets/images/colorswatch.png';
import TranslateImage from '@/theme/assets/images/translate.png';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

function Login() {
	const { width, height } = useWindowDimensions();
	const { colors, layout, gutters, fonts } = useTheme();
	const bottomSheetRef = useRef<BottomSheet>(null);

	if (
		!isImageSourcePropType(SendImage) ||
		!isImageSourcePropType(ColorsWatchImage) ||
		!isImageSourcePropType(TranslateImage)
	) {
		throw new Error('Image source is not valid');
	}

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

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
						<Text style={[fonts.size_16, fonts.sekarBlack]}>
							Scan, Split and Share, bills easily
						</Text>
					</View>
				</View>

				<View style={[gutters.paddingHorizontal_16]}>
					<View style={[gutters.marginTop_16]}>
						<Text style={[fonts.size_24, fonts.gray800, fonts.bold]}>
							Sign In
						</Text>
						<Text
							style={[fonts.gray400, fonts.size_16, gutters.marginBottom_32]}
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
								if (bottomSheetRef) {
									bottomSheetRef.current?.snapToIndex(0);
								}
							}}
						>
							<Text style={[fonts.sekarBlack, fonts.size_14, fonts.bold]}>
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
							<Text style={[fonts.white, fonts.size_14, fonts.bold]}>
								Youre an apple guy
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<BottomSheet
				ref={bottomSheetRef}
				onChange={handleSheetChanges}
				snapPoints={[height * 0.3, height * 0.5, height * 0.8]}
				enablePanDownToClose
				backgroundStyle={{
					backgroundColor: colors.white,
					width: width - 30,
					marginLeft: 15,
				}}
			>
				<BottomSheetView
					style={[
						layout.justifyStart,
						layout.itemsStart,
						gutters.paddingHorizontal_12,
						gutters.paddingVertical_12,
						{
							backgroundColor: colors.white,
							height: 200,
							width: width - 30,
							marginLeft: 15,
						},
					]}
				>
					<Text style={[fonts.size_20]}>What was the occasion?</Text>
				</BottomSheetView>
			</BottomSheet>
		</SafeScreen>
	);
}

export default Login;
