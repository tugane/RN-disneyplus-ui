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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Spacing from "../constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { movies, studios, trendingMovies } from "../data";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const studioSize = 70;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { width } = Dimensions.get("window");
  const TrendingMovieWidth = width - Spacing * 4;
  const TrendingMovieHeight = 200;

  const MovieHeight = 170;
  const MovieWidth = 110;

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[Colors.dark, Colors.black]}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView>
          <Image
            resizeMode="contain"
            style={{
              height: Spacing * 5,
              width: Spacing * 10,
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
            decelerationRate={"fast"}
            pagingEnabled
          >
            {trendingMovies.map((movie) => (
              <TouchableOpacity
                style={{
                  width: TrendingMovieWidth,
                  height: TrendingMovieHeight,
                  marginRight: Spacing,
                  overflow: "hidden",
                  borderRadius: Spacing / 2,
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
          <ScrollView style={{ paddingHorizontal: Spacing * 2 }} horizontal>
            {studios.map((studio) => (
              <TouchableOpacity
                style={{
                  width: studioSize,
                  height: studioSize,
                  overflow: "hidden",
                  borderRadius: Spacing,
                  marginRight: Spacing,
                  borderColor: Colors.border,
                  borderWidth: 1,
                }}
                key={studio.id}
              >
                <LinearGradient colors={[Colors.darkBlue, Colors.blue]}>
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
          <View
            style={{
              padding: Spacing * 2,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-bold"],
              }}
            >
              Recommended for you
            </Text>
            <ScrollView
              horizontal
              style={{
                paddingVertical: Spacing,
              }}
              showsHorizontalScrollIndicator={false}
            >
              {movies.slice(0, 4).map((movie) => (
                <TouchableOpacity
                  key={movie.id}
                  style={{
                    height: MovieHeight,
                    width: MovieWidth,
                    borderRadius: Spacing / 2,
                    overflow: "hidden",
                    marginRight: Spacing,
                  }}
                >
                  <Image
                    source={movie.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-bold"],
              }}
            >
              Originals
            </Text>
            <ScrollView
              horizontal
              style={{
                paddingVertical: Spacing,
              }}
              showsHorizontalScrollIndicator={false}
            >
              {movies.slice(4, 9).map((movie) => (
                <TouchableOpacity
                  key={movie.id}
                  style={{
                    height: MovieHeight,
                    width: MovieWidth,
                    borderRadius: Spacing / 2,
                    overflow: "hidden",
                    marginRight: Spacing,
                  }}
                >
                  <Image
                    source={movie.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
