import {
  Image,
  ImageBackground,
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
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const CoverHeight = 300;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const movie = route.params.movie;
  return (
    <LinearGradient colors={[Colors.dark, Colors.black]} style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={movie.cover}
          style={{
            height: CoverHeight,
            width: "100%",
          }}
        >
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: Colors.background,
                width: Spacing * 4,
                height: Spacing * 4,
                borderRadius: Spacing * 2,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
                marginRight: Spacing * 3,
              }}
            >
              <Ionicons name="close" size={Spacing * 2.5} color={Colors.text} />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <Image
            style={{
              height: Spacing * 10,
              width: Spacing * 20,
            }}
            resizeMode="contain"
            source={movie.logo}
          />
          <View
            style={{
              marginVertical: Spacing * 2,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: Spacing * 2,
                backgroundColor: Colors.secondary,
                paddingVertical: Spacing,
                flexDirection: "row",
                borderRadius: Spacing,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="play"
                size={Spacing * 2}
                color={Colors.onSecondary}
              />
              <Text
                style={{
                  fontSize: Spacing * 1.4,
                  fontFamily: Font["poppins-regular"],
                  marginLeft: Spacing / 2,
                }}
              >
                PLAY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: Spacing,
                backgroundColor: Colors.black,
                paddingVertical: Spacing,
                flexDirection: "row",
                borderRadius: Spacing * 5,
                marginLeft: Spacing,
                borderColor: Colors.border,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="add"
                size={Spacing * 2}
                color={Colors.onPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.black,
                paddingVertical: Spacing,
                flexDirection: "row",
                marginLeft: Spacing,
                borderColor: Colors.border,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                height: Spacing * 4,
                width: Spacing * 4,
                borderRadius: Spacing * 3,
              }}
            >
              <MaterialCommunityIcons
                name="download"
                size={Spacing * 2}
                color={Colors.onPrimary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>{movie.year}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
