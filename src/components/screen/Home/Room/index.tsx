import {observer} from 'mobx-react';
import React, {createContext, useContext, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getDummyRoom} from '../../../../shared/functions/makeDummyData';
import HomeStore from '../../../../stores/HomeStore';

interface RoomProps {
  navigation: any;
  route: any;
}

const HomeContext = createContext<HomeStore>(new HomeStore());

const Room = observer(({navigation, route}: RoomProps) => {
  const {roomId} = route.params;

  const homeStore = useContext(HomeContext);

  useEffect(() => {
    homeStore.setRoom(getDummyRoom(roomId));
  }, []);

  console.log('homestore room, ', homeStore.room);

  return (
    <View style={styles.container}>
      <Text>Room</Text>
    </View>
  );
});

export default Room;

const styles = StyleSheet.create({
  container: {},
});
