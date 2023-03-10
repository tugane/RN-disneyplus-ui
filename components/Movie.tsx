import {
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import { Movie as MovieType } from "../data";

interface Props {
  movie: MovieType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const movieHeight = 170;
const movieWidth = 110;

const Movie: React.FC<Props> = ({ movie, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: movieHeight,
          width: movieWidth,
          marginRight: Spacing,
          overflow: "hidden",
          borderRadius: Spacing / 2,
        },
        style,
      ]}
    >
      <Image source={movie.image} style={{ height: "100%", width: "100%" }} />
    </TouchableOpacity>
  );
};

export default Movie;

const styles = StyleSheet.create({});
