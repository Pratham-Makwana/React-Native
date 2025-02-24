import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenContainer} from 'react-native-screens';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImagebackgroundInfo from '../components/ImagebackgroundInfo';
import {useStore} from '../store/store';
import PriceFooter from '../components/PriceFooter';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log('Route', route.params);
  const ItemOfIndex = useStore((state: any) =>
    route?.params?.type == 'Coffee' ? state.CoffeeList : state.BeansList,
  )[route?.params?.index];
  console.log("==> ", ItemOfIndex);
  const [fullDesc, setFullDesc] = useState(false);
  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  // console.log('price', price);

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    // console.log("==> ",favourite,type, id);

    favourite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  const BackHandle = () => {
    navigation.pop();
  };

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Tab', {screen: 'Card'});
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImagebackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandle}
          ToggleFavourite={ToggleFavourite}
        />

        <View style={styles.FooterInfoArea}>
          {/* Description */}
          <Text style={styles.InfoTitle}>Description</Text>
          <TouchableWithoutFeedback onPress={() => setFullDesc(prev => !prev)}>
            <Text
              numberOfLines={fullDesc ? 0 : 3}
              style={styles.DescriptionText}>
              {ItemOfIndex.description}
            </Text>
          </TouchableWithoutFeedback>
          {/* Size */}
          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => {
                  setPrice(data);
                }}
                style={[
                  styles.SizeBox,
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        ItemOfIndex.type == 'Bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Price Footer */}
        <PriceFooter
          price={price}
          buttonTitle="Add To Cart"
          buttonPressHandler={() => {
            addToCartHandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            });
          }}
        />
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
    // by default scrollview take size of the content that inside the scrollview
    // using this we saying take whole space of the screen
    flexGrow: 1,
    justifyContent: 'space-between',
    // backgroundColor : 'red'
  },
  FooterInfoArea: {
    padding: SPACING.space_30,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    marginBottom: SPACING.space_20,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default DetailsScreen;
