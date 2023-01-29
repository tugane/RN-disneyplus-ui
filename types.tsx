/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Movie, Studio } from "./data";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Studio: { studio: Studio };
  Detail: { movie: Movie };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
