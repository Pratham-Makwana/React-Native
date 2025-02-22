import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';

import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import FavoritesItemCard from '../components/FavoritesItemCard';

const FavoritesScreen = ({navigation}: any) => {
  const FavoriteList = useStore((state: any) => state.FavoriteList);
  console.log('==>', FavoriteList.length);

  const tabBarHeight = useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
   const deleteFromFavoriteList = useStore(
     (state: any) => state.deleteFromFavoriteList,
   );
   const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    console.log("==> ",favourite,type, id);
    
    favourite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };
  return (
    <View style={styles.ScreenContainer}>
    <StatusBar backgroundColor={COLORS.primaryBlackHex} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ScrollViewFlex}>
      <View
        style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
        <View style={styles.ItemContainer}>
          <HeaderBar title="Favourites" />
          {FavoriteList.length == 0 ? (
            <EmptyListAnimation title="No FAvourites" />
          ) : (
            <View style={styles.ListItemContainer}>
              {FavoriteList.map((data: any) => (
                <TouchableOpacity onPress={() => {
                  navigation.push('Details', {
                    index : data.index,
                    id : data.id,
                    type : data.type
                  })
                }} key={data.id}>
                  <FavoritesItemCard
                    id={data.id}
                    imagelink_portrait={data.imagelink_portrait}
                    name={data.name}
                    special_ingredient={data.special_ingredient}
                    type={data.type}
                    ingredients={data.ingredients}
                    average_rating={data.average_rating}
                    ratings_count={data.ratings_count}
                    roasted={data.roasted}
                    description={data.description}
                    favourite={data.favourite}
                    ToggleFavouriteItem={ToggleFavourite}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
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
});

export default FavoritesScreen;
