import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CategoryInterface, RoomInterface} from '../../../types';
import Categories from './Categories';
import Rooms from './Rooms';

interface HomeProps {
  navigation: any;
  categories: CategoryInterface[];
  rooms: RoomInterface[];
}

const Home = ({navigation, categories, rooms}: HomeProps) => {

  // console.log('categories in Home, ', categories);
  // console.log('rooms in Home, ', rooms);

  const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={param => setCurrentCategoryId(param)}
      />
      <Rooms navigation={navigation} rooms={rooms} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
  },
});
