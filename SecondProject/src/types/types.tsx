import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  FlatList: undefined;
  Header: {studentName: string; age: number};
  MapList: undefined;
  LifeCycle: {name?: string};
  Loader: undefined;
  Modal: undefined;
  Pressable: undefined;
  BottomTabScreen: undefined;
  TopTabScreen: undefined;
  FetchData: undefined;
  JsonServerApi: undefined;
  SearchWithAPI: undefined;
  RefExample: undefined;
  AsyncExample: undefined;
};

export type HomenavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HeadenavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Header'
>;

export type LifeCyclenavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'LifeCycle'
>;
