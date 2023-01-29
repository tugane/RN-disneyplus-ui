import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { Movie as MovieType } from "../data";
import Movie from "./Movie";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

interface Props {
  movies: MovieType[];
  title?: string;
}

const MoviesList: React.FC<Props> = ({ movies, title }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        paddingHorizontal: Spacing * 2,
        paddingTop: Spacing * 2,
      }}
    >
      {title && (
        <Text
          style={{
            color: Colors.text,
            fontFamily: Font["poppins-bold"],
            fontSize: FontSize.large,
          }}
        >
          {title}
        </Text>
      )}
      <ScrollView
        horizontal
        style={
          title
            ? {
                paddingTop: Spacing,
              }
            : {}
        }
        showsHorizontalScrollIndicator={false}
      >
        {movies.map((movie) => (
          <Movie
            onPress={() => navigation.navigate("Detail", { movie })}
            key={movie.id}
            movie={movie}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
