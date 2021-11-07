import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import Progress from "../components/Progress";
import { Switch } from "react-native-switch";

const Screen = () => {
  return (
    <ScrollView style={styles.scrollStyles}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Image
            source={require("../assets/car.jpg")}
            style={styles.image}
            resizeMethod="auto"
          />
          <Text style={styles.titleText}>Leaf ZE1</Text>
          <View style={styles.desTitleContainer}>
            <Text style={styles.desTitle}>License Plat: Ev62916</Text>
          </View>
          <View style={styles.parked}>
            <MaterialIcons name="location-on" size={24} color="#06dce4" />
            <Text>Parked</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.progressContainer}>
            <Fontisto name="battery-full" size={24} color="#06dce4" />
            <View style={styles.progress}>
              <Progress
                style={{
                  width: "83%",
                }}
              />
            </View>
            <Text style={{ color: "grey" }}>83%</Text>
          </View>
          <View style={styles.progressContainer}>
            <FontAwesome5 name="temperature-high" size={20} color="#06dce4" />
            <View style={styles.progress}>
              <Progress
                style={{
                  width: "47%",
                }}
              />
            </View>
            <Text style={{ color: "grey" }}>27 c</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardLayout}>
              <Entypo name="lock" size={24} color="#06dce4" />
            </View>
            <View style={styles.cardLayout}>
              <MaterialCommunityIcons
                name="key-variant"
                size={24}
                color="#06dce4"
              />
            </View>
            <View style={styles.cardLayout}>
              <MaterialCommunityIcons
                name="car-door"
                size={24}
                color="#06dce4"
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.columnContainer}>
            <Text style={styles.columnText}>Imobilizaer</Text>
            <Text style={styles.columnText}>Off</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.columnText}>Door</Text>
            <Text style={styles.columnText}>Locked</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Car sharing</Text>
            <Switch
              value={true}
              onValueChange={(val) => console.log(val)}
              disabled={false}
              activeText={" "}
              inActiveText={" "}
              backgroundActive={"#06dce4"}
              backgroundInactive={"#06dce4"}
              circleSize={20}
              barHeight={25}
              circleBorderWidth={0}
              switchLeftPx={2}
              switchWidthMultiplier={3}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  top: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    width: "100%",
  },
  scrollStyles: {
    paddingBottom: 50,
  },
  cardLayout: {
    marginHorizontal: 15,
    marginTop: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 20,
    shadowOpacity: 0.26,
  },
  switchContainer: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switchText: { marginRight: 10 },
  progress: {
    width: Dimensions.get("window").width * 0.6,
    paddingHorizontal: 10,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.35,
  },
  middle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 5,
  },
  desTitle: {
    fontSize: 16,
    padding: 1,
  },
  parked: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  progressContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  cardContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  columnContainer: {
    width: "90%",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  columnText: {
    fontSize: 16,
    color: "grey",
  },
  desTitleContainer: {
    backgroundColor: "#e5e5e5",
    width: Dimensions.get("window").width * 0.6,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5,
  },
  bottom: {
    flex: 3,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
});

export default Screen;
