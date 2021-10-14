import {makeAutoObservable} from 'mobx';
import {CategoryInterface, RoomInterface, UserInterface} from '../types';

export default class HomeStore {
  categories: CategoryInterface[] = [];
  rooms: RoomInterface[] = [];
  room: RoomInterface | null = null;
  user: UserInterface | {} = {};

  constructor() {
    makeAutoObservable(this);
  }

  setCategories(param: CategoryInterface[]) {
    this.categories = param;
  }

  setRooms(param: RoomInterface[]) {
    this.rooms = param;
  }

  setRoom(param: RoomInterface) {
    this.room = param;
  }

  setUser(param: UserInterface) {
    this.user = param;
  }
}
