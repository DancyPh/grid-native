import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CATEGORIES } from '../data/categories';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
      headerRight: () => (
        <Icon
          name='star'  
          size={28}
          color="yellow"
          style={{ marginRight: 15 }}
          onPress={() => { /* Handle favorite action */ }}
        />
      ),
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.screen}>
      <Image source={selectedCategory.image} style={{ height: 210, width: 360, marginVertical: 30 }} />
      <Text>Meals for {selectedCategory.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MealsOverviewScreen;
