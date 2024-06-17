import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	useWindowDimensions,
	TextInput,
	Image,
} from 'react-native';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import { isImageSourcePropType } from '@/types/guards/image';

import LoginVector from '@/theme/assets/images/login-vector.png';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

const dummyData = [
	{
		id: 1,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 2,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 3,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 4,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 5,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 6,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 7,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 8,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 9,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
	{
		id: 10,
		sekarName: 'Lunch at Restoran Kim Fan',
		paidAt: '13 Jun 2:03PM',
	},
];

function Home() {
	const { width, height } = useWindowDimensions();
	const { colors, layout, gutters, fonts } = useTheme();
	const bottomSheetRef = useRef<BottomSheet>(null);
	const stepOneRef = useRef<View>(null);

	const [step, setStep] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	const stepOneOpacity = useSharedValue(0);
	const stepTwoOpacity = useSharedValue(0);

	const renderItem = ({ item }) => {
		return (
			<View
				style={[
					layout.row,
					layout.justifyBetween,
					layout.itemsCenter,
					gutters.marginBottom_16,
					gutters.paddingHorizontal_16,
					{
						width: width - 30,
						marginLeft: 15,
						height: 80,
						borderRadius: 20,
						backgroundColor: colors.pureBlack,
					},
				]}
			>
				<View>
					<Text
						style={[
							fonts.size_14,
							{
								fontFamily: 'Poppins-SemiBold',
							},
							{
								color: colors.white,
							},
						]}
					>
						{item.sekarName}
					</Text>
					<Text
						style={[
							fonts.size_12,
							{
								fontFamily: 'Poppins-Regular',
							},
							{
								color: colors.white,
							},
						]}
					>
						{item.paidAt}
					</Text>
				</View>
				<View>
					<Text
						style={[
							fonts.size_14,
							{
								fontFamily: 'Poppins-SemiBold',
							},
							{
								color: colors.white,
							},
						]}
					>
						RM 20.00
					</Text>
				</View>
			</View>
		);
	};

	useEffect(() => {
		switch (step) {
			case 0:
				if (isOpen) {
					stepOneOpacity.value = withTiming(1, { duration: 500 });
				} else {
					stepOneOpacity.value = withTiming(0, { duration: 500 });
				}
				break;
			case 1:
				if (isOpen) {
					stepTwoOpacity.value = withTiming(1, { duration: 500 });
				} else {
					stepTwoOpacity.value = withTiming(0, { duration: 500 });
				}
				break;
			case 2:
				break;
			default:
				break;
		}
	}, [isOpen, step]);

	const stepOneAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: stepOneOpacity.value,
		};
	});

	const stepTwoAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: stepTwoOpacity.value,
		};
	});

	return (
		<SafeScreen>
			<ScrollView
				style={[
					gutters.marginTop_40,
					gutters.paddingTop_24,
					gutters.marginBottom_40,
				]}
			>
				{dummyData.map(item => {
					return renderItem({ item });
				})}
			</ScrollView>
			<View
				style={[
					layout.absolute,
					layout.justifyBetween,
					layout.fullWidth,
					gutters.marginTop_16,
					gutters.paddingHorizontal_16,
					gutters.paddingVertical_16,
					{ top: 0, backgroundColor: colors.pureBlack },
				]}
			>
				<View
					style={[
						layout.row,
						layout.justifyBetween,
						layout.itemsCenter,
						{ width: '100%' },
					]}
				>
					<View>
						<Text
							style={[
								fonts.size_20,
								{
									color: colors.white,
									fontFamily: 'Montserrat-Bold',
								},
							]}
						>
							Sekar.
						</Text>
					</View>
				</View>
			</View>
			<View
				style={[
					layout.absolute,
					layout.justifyBetween,
					layout.fullWidth,
					gutters.marginTop_16,
					gutters.paddingHorizontal_16,
					{ bottom: 0 },
				]}
			>
				<TouchableOpacity
					activeOpacity={0.9}
					testID="fetch-user-button"
					style={[
						gutters.marginBottom_16,
						{
							width: '100%',
							height: 45,
							borderRadius: 14,
							backgroundColor: colors.white,
							justifyContent: 'center',
							alignItems: 'center',
						},
					]}
					onPress={() => {
						if (bottomSheetRef) {
							bottomSheetRef.current?.snapToIndex(0);
							setIsOpen(true);
							setStep(0);
						}
					}}
				>
					<Text
						style={[
							fonts.sekarBlack,
							fonts.size_12,
							fonts.bold,
							{
								fontFamily: 'Montserrat-Regular',
							},
						]}
					>
						Split the bill
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.9}
					testID="fetch-user-button"
					style={[
						gutters.marginBottom_16,
						{
							width: '100%',
							height: 45,
							borderRadius: 14,
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
							fonts.size_12,
							fonts.bold,
							{
								fontFamily: 'Montserrat-Regular',
							},
						]}
					>
						Snap receipt
					</Text>
				</TouchableOpacity>
			</View>
			<BottomSheet
				ref={bottomSheetRef}
				onChange={handleSheetChanges}
				snapPoints={[height * 0.32, height * 0.5, height * 0.8]}
				enablePanDownToClose
				onClose={() => {
					setIsOpen(false);
				}}
				backgroundStyle={{
					backgroundColor: colors.white,
					width: width - 30,
					marginLeft: 15,
				}}
			>
				<BottomSheetView>
					{step === 0 && (
						<Animated.View
							style={[
								layout.justifyStart,
								layout.itemsStart,
								gutters.paddingHorizontal_20,
								gutters.paddingVertical_12,
								{
									width: width - 30,
									marginLeft: 15,
								},
								stepOneAnimatedStyle,
							]}
							ref={stepOneRef}
						>
							<Text
								style={[
									fonts.size_20,
									{
										fontFamily: 'Poppins-SemiBold',
									},
									gutters.marginBottom_14,
								]}
							>
								What was the occasion?
							</Text>

							<TextInput
								style={[
									{
										width: '100%',
										borderColor: colors.pureBlack,
										borderWidth: 2,
										borderRadius: 14,
										paddingHorizontal: 16,
										paddingVertical: 14,
										fontFamily: 'Poppins-Regular',
										color: colors.sekarBlack,
										backgroundColor: colors.white,
									},
									fonts.size_14,
									gutters.marginBottom_16,
								]}
								onChangeText={() => {}}
								placeholder="EG: Lunch at Restaurant Kim Fan"
								keyboardType="default"
							/>

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
								onPress={() => {
									setStep(1);
								}}
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
									Next
								</Text>
							</TouchableOpacity>
						</Animated.View>
					)}

					{step === 1 && (
						<Animated.View
							style={[
								layout.justifyStart,
								layout.itemsStart,
								gutters.paddingHorizontal_20,
								gutters.paddingVertical_12,
								{
									width: width - 30,
									marginLeft: 15,
								},
								stepTwoAnimatedStyle,
							]}
							ref={stepOneRef}
						>
							<Text
								style={[
									fonts.size_20,
									{
										fontFamily: 'Poppins-SemiBold',
									},
									gutters.marginBottom_14,
								]}
							>
								Add your first item
							</Text>

							<TextInput
								style={[
									{
										width: '100%',
										borderColor: colors.pureBlack,
										borderWidth: 2,
										borderRadius: 14,
										paddingHorizontal: 16,
										paddingVertical: 14,
										fontFamily: 'Poppins-Regular',
										color: colors.sekarBlack,
										backgroundColor: colors.white,
									},
									fonts.size_14,
									gutters.marginBottom_16,
								]}
								onChangeText={() => {}}
								placeholder="EG: Lunch at Restaurant Kim Fan"
								keyboardType="default"
							/>

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
								onPress={() => {
									setStep(1);
								}}
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
									Next
								</Text>
							</TouchableOpacity>
						</Animated.View>
					)}
				</BottomSheetView>
			</BottomSheet>
		</SafeScreen>
	);
}

export default Home;
