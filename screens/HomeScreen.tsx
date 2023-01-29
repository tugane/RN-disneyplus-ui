import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import { movies, studios, trendingMovies } from "../data";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Movie from "../components/Movie";
import MoviesList from "../components/MoviesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const studioHeight = 70;
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const TrendingMovieWidth = width - Spacing * 4;
  const TrendingMovieHeight = 200;

  return (
    <LinearGradient colors={[Colors.dark, Colors.black]} style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <Image
            resizeMode="contain"
            style={{
              width: Spacing * 10,
              height: Spacing * 5,
              alignSelf: "center",
            }}
            source={require("../assets/images/logo.png")}
          />

          <ScrollView
            horizontal
            contentContainerStyle={{
              padding: Spacing * 2,
            }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={TrendingMovieWidth + Spacing}
            pagingEnabled
            decelerationRate="fast"
          >
            {trendingMovies.map((movie) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { movie: movie })}
                style={{
                  height: TrendingMovieHeight,
                  width: TrendingMovieWidth,
                  borderRadius: Spacing / 2,
                  overflow: "hidden",
                  marginRight: Spacing,
                }}
                key={movie.id}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={movie.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView
            style={{
              paddingHorizontal: Spacing * 2,
            }}
            horizontal
          >
            {studios.map((studio) => (
              <TouchableOpacity
                style={{
                  height: studioHeight,
                  width: studioHeight,
                  marginRight: Spacing,
                }}
                key={studio.id}
              >
                <LinearGradient
                  style={{
                    borderRadius: Spacing,
                    borderWidth: 1,
                    borderColor: Colors.border,
                  }}
                  colors={[Colors.darkBlue, Colors.blue]}
                >
                  <Image
                    resizeMode="contain"
                    source={studio.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: [{ scale: 1.3 }],
                    }}
                  />
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <MoviesList title="Recommended For You" movies={movies.slice(0, 4)} />
          <MoviesList title="Originals" movies={movies.slice(4, 9)} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
