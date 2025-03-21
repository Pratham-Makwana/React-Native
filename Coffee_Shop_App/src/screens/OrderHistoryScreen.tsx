import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CartItem from '../components/CartItem';
import EmptyListAnimation from '../components/EmptyListAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
import PopAnimation from '../components/PopAnimation';

const OrderHistoryScreen = ({navigation, route}: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const [showAnimation, setShowAnimation] = useState(false);
  // console.log('==>', OrderHistoryList.length);
  const tabBarHeight = useBottomTabBarHeight();
  const navigationHandler = ({index, id, type} : any) => {
    navigation.push('Details', {
      index, id , type
    })
  }
  const buttonPressHandler = () => {
    setShowAnimation(true)
    setTimeout(() => {setShowAnimation(false)}, 2000)
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation && (
        <PopAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/download.json')}
        />
      )}
      <ScrollView
        contentContainerStyle={styles.ScrollViewFlex}
        showsVerticalScrollIndicator={false}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title="No Order History" />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    OrderDate={data.OrderDate}
                    CartListPrice={data.CartListPrice}
                    CartList={data.CartList}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryCard.length > 0 && (
            <TouchableOpacity style={styles.DownloadButton} onPress={() => buttonPressHandler()}>
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  LottieAnimation: {
    height: 250,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor : 'red'
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
  DownloadButton: {
    margin : SPACING.space_20,
    backgroundColor : COLORS.primaryOrangeHex,
    alignItems : 'center',
    justifyContent : 'center',
    height : SPACING.space_36 * 2,
    borderRadius : BORDERRADIUS.radius_20
  },
  ButtonText: {
    fontFamily : FONTFAMILY.poppins_semibold,
    fontSize : FONTSIZE.size_18,
    color : COLORS.primaryWhiteHex
  },
});
export default OrderHistoryScreen;
