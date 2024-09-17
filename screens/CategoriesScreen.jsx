import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

export default CategoriesScreen;
