import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b695e4e-9ab5-43fe-9555-97aee5807721"
        }}
        style={styles.ImageBackground_476_42634}
      />
      <View style={styles.View_476_42764}>
        <View style={styles.View_476_42763}>
          <View style={styles.View_476_42740}>
            <Text style={styles.Text_476_42740}>
              Lorem ipsum Dolor sit amet
            </Text>
          </View>
          <View style={styles.View_476_42741}>
            <Text style={styles.Text_476_42741}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum porta ipsum
            </Text>
          </View>
        </View>
        <View style={styles.View_476_42762}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1c84b19-c6f7-42a1-ac74-cb03650a9c00"
            }}
            style={styles.ImageBackground_476_42742}
          />
          <View style={styles.View_476_42747}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77423a7c-e6d3-406a-a06e-744aa707332d"
              }}
              style={styles.ImageBackground_476_42748}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c8ec09a-8392-4ad9-a87b-82ef7943d586"
              }}
              style={styles.ImageBackground_476_42749}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05a4552d-4379-4d26-8de9-75dc1e7f0a97"
              }}
              style={styles.ImageBackground_476_42750}
            />
            <View style={styles.View_476_42755}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83598e17-afe7-4af4-9621-bbafbc03dc42"
                }}
                style={styles.ImageBackground_I476_42755_10_3036}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_477_42765}>
        <View style={styles.View_477_42766}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7be00e67-2e20-472b-98e1-f7f81647c829"
            }}
            style={styles.ImageBackground_477_42767}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/402e4c09-ae6b-45d3-bf4a-6f95f7c27542"
          }}
          style={styles.ImageBackground_477_42773}
        />
      </View>
      <View style={styles.View_477_42781}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d49a586-7844-45af-be7a-021d07037ea1"
          }}
          style={styles.ImageBackground_I477_42781_10_3014}
        />
      </View>
      <View style={styles.View_478_106255}>
        <View style={styles.View_478_106256}>
          <View style={styles.View_478_106257} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44811ef0-bf62-4a33-aae4-9058235fa73c"
            }}
            style={styles.ImageBackground_478_106258}
          />
          <View style={styles.View_478_106259} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03666fe2-68c0-4d0f-a15a-ec82e10c0d73"
          }}
          style={styles.ImageBackground_478_106260}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5a454ff-bffa-431d-b93d-67af9270c718"
          }}
          style={styles.ImageBackground_478_106264}
        />
        <View style={styles.View_478_106269}>
          <Text style={styles.Text_478_106269}>00:00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  ImageBackground_476_42634: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  View_476_42764: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42763: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_476_42740: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_42740: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_476_42741: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_476_42741: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42762: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("4%")
  },
  ImageBackground_476_42742: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%")
  },
  View_476_42747: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_476_42748: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_476_42749: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_476_42750: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_476_42755: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I476_42755_10_3036: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_477_42765: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("9%")
  },
  View_477_42766: {
    width: wp("25%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_477_42767: {
    width: wp("25%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_477_42773: {
    width: wp("25%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_477_42781: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I477_42781_10_3014: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_478_106255: {
    width: wp("91%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_478_106256: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_478_106257: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(46, 42, 37, 1)",
    borderWidth: 1
  },
  ImageBackground_478_106258: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_478_106259: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(46, 42, 37, 1)"
  },
  ImageBackground_478_106260: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_478_106264: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_478_106269: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_478_106269: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
