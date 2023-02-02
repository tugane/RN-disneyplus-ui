import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import DotSeparator from "../components/DotSeparator";
import DetailFooter from "../components/DetailFooter";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const CoverHeight = 300;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const movie = route.params.movie;
  return (
    <LinearGradient
      colors={[Colors.dark, Colors.black]}
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <ImageBackground
          style={{
            height: CoverHeight,
          }}
          source={movie.cover}
        >
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: Spacing * 3.5,
                width: Spacing * 3.5,
                backgroundColor: Colors.background,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: Spacing * 2,
                alignSelf: "flex-end",
                marginRight: Spacing * 3,
              }}
            >
              <Ionicons name="close" size={Spacing * 2} color={Colors.text} />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>

        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <Image
            source={movie.logo}
            resizeMode="contain"
            style={{
              height: Spacing * 10,
              width: Spacing * 20,
              marginBottom: Spacing,
            }}
          />

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: Spacing * 2,
                flexDirection: "row",
                backgroundColor: Colors.secondary,
                height: Spacing * 4,
                borderRadius: Spacing / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="play"
                size={Spacing * 2.5}
                color={Colors.onSecondary}
              />
              <Text
                style={{
                  color: Colors.onSecondary,
                }}
              >
                PLAY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: Colors.black,
                height: Spacing * 4,
                width: Spacing * 4,
                borderRadius: Spacing * 2,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: Spacing,
                borderWidth: 2,
                borderColor: Colors.onPrimary,
              }}
            >
              <MaterialCommunityIcons
                name="plus"
                size={Spacing * 2.5}
                color={Colors.onPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: Colors.black,
                height: Spacing * 4,
                width: Spacing * 4,
                borderRadius: Spacing * 2,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: Spacing,
                borderWidth: 2,
                borderColor: Colors.onPrimary,
              }}
            >
              <MaterialCommunityIcons
                name="download"
                size={Spacing * 2.5}
                color={Colors.onPrimary}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: Spacing,
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {movie.year}
            </Text>
            <DotSeparator />
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {movie.length}
            </Text>
            <DotSeparator />
            {movie.tags.map((tag, index) => (
              <View
                key={tag.id}
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: FontSize.medium,
                      color: Colors.text,
                      fontFamily: Font["poppins-regular"],
                    }}
                  >
                    {tag.name}
                  </Text>
                </TouchableOpacity>
                {movie.tags.length - 1 !== index && (
                  <Text
                    style={{
                      fontSize: FontSize.medium,
                      color: Colors.text,
                      fontFamily: Font["poppins-regular"],
                    }}
                  >
                    {movie.tags.length - 2 === index ? " and " : ", "}
                  </Text>
                )}
              </View>
            ))}
            <DotSeparator />
            <Text
              style={{
                fontSize: FontSize.medium,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {movie.quality}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: FontSize.large,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {movie.shortInfo}
            </Text>
          </View>

          <DetailFooter />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailScreen;
