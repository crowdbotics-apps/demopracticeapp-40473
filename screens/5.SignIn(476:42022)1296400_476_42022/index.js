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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a20869af-236d-4cd6-8cdc-08903c9df82c"
        }}
        style={styles.ImageBackground_476_42058}
      />
      <View style={styles.View_476_42493}>
        <View style={styles.View_476_42494}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8703cac6-45c1-4ba5-bb61-310ad76da793"
            }}
            style={styles.ImageBackground_476_42495}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9a53596-7802-49fb-8ac5-91ebae14b480"
          }}
          style={styles.ImageBackground_476_42501}
        />
      </View>
      <View style={styles.View_476_42509}>
        <View style={styles.View_476_42189}>
          <View style={styles.View_476_42190}>
            <View style={styles.View_I476_42190_8_4802}>
              <Text style={styles.Text_I476_42190_8_4802}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.View_476_42191}>
            <View style={styles.View_I476_42191_8_4782}>
              <Text style={styles.Text_I476_42191_8_4782}>Sign In</Text>
            </View>
            <View style={styles.View_I476_42191_8_4783} />
          </View>
        </View>
        <View style={styles.View_476_42513}>
          <View style={styles.View_476_42514}>
            <Text style={styles.Text_476_42514}>Sign In</Text>
          </View>
          <View style={styles.View_476_42515}>
            <Text style={styles.Text_476_42515}>
              Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <View style={styles.View_476_42560}>
          <View style={styles.View_476_42561}>
            <View style={styles.View_476_42562}>
              <View style={styles.View_476_42563}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ad7f6eb-e567-4904-b2b6-7e22fde20c18"
                  }}
                  style={styles.ImageBackground_I476_42563_11_7703}
                />
              </View>
            </View>
            <View style={styles.View_476_42564}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/038a9817-8f8a-4a29-83e5-55261c0d2726"
                }}
                style={styles.ImageBackground_476_42565}
              />
            </View>
            <View style={styles.View_476_42566}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dcba587-2ce3-4d30-b915-33a2af053f5b"
                }}
                style={styles.ImageBackground_476_42567}
              />
            </View>
          </View>
          <View style={styles.View_476_42568}>
            <View style={styles.View_476_42569}>
              <View style={styles.View_476_42570} />
            </View>
            <View style={styles.View_476_42571}>
              <Text style={styles.Text_476_42571}>OR</Text>
            </View>
            <View style={styles.View_476_42572}>
              <View style={styles.View_476_42573} />
            </View>
          </View>
          <View style={styles.View_476_42574}>
            <View style={styles.View_I476_42574_11_3270}>
              <Text style={styles.Text_I476_42574_11_3270}>Email</Text>
            </View>
            <View style={styles.View_I476_42574_11_3271}>
              <View style={styles.View_I476_42574_11_3272}>
                <Text style={styles.Text_I476_42574_11_3272}>
                  Input your email
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_476_42575}>
            <View style={styles.View_I476_42575_11_4523}>
              <Text style={styles.Text_I476_42575_11_4523}>Password</Text>
            </View>
            <View style={styles.View_I476_42575_11_4524}>
              <View style={styles.View_I476_42575_11_4525}>
                <Text style={styles.Text_I476_42575_11_4525}>
                  Input your password
                </Text>
              </View>
              <View style={styles.View_I476_42575_11_4526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4849414e-7a47-4565-8ef5-0797b320e980"
                  }}
                  style={styles.ImageBackground_I476_42575_11_4526_10_3043}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_476_42576}>
            <View style={styles.View_I476_42576_7_553}>
              <Text style={styles.Text_I476_42576_7_553}>Sign In</Text>
            </View>
          </View>
          <View style={styles.View_476_42577}>
            <View style={styles.View_476_42578}>
              <View style={styles.View_476_42579}>
                <View style={styles.View_I476_42579_8_5308} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38eb9e70-6020-428f-acc5-ae411e12fc6b"
                  }}
                  style={styles.ImageBackground_I476_42579_8_5309}
                />
              </View>
              <View style={styles.View_476_42580}>
                <Text style={styles.Text_476_42580}>Remember me</Text>
              </View>
            </View>
            <View style={styles.View_476_42581}>
              <Text style={styles.Text_476_42581}>Forgot password?</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_477_42903}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9135346e-0511-446b-8632-bc4d2d0d3c38"
          }}
          style={styles.ImageBackground_I477_42903_10_3014}
        />
      </View>
      <View style={styles.View_478_106285}>
        <View style={styles.View_478_106286}>
          <View style={styles.View_478_106287} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc9d92c0-d41f-41d8-ae8e-48d09f8ec5b0"
            }}
            style={styles.ImageBackground_478_106288}
          />
          <View style={styles.View_478_106289} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8040b8f7-7399-4625-ad55-9037806b3f65"
          }}
          style={styles.ImageBackground_478_106290}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5716f02b-8064-44a1-a528-616d2edfbf76"
          }}
          style={styles.ImageBackground_478_106294}
        />
        <View style={styles.View_478_106299}>
          <Text style={styles.Text_478_106299}>00:00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  ImageBackground_476_42058: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  View_476_42493: {
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
  View_476_42494: {
    width: wp("25%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_476_42495: {
    width: wp("25%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_476_42501: {
    width: wp("25%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_476_42509: {
    width: wp("100%"),
    height: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42189: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42190: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42190_8_4802: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I476_42190_8_4802: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42191: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42191_8_4782: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I476_42191_8_4782: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I476_42191_8_4783: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_476_42513: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_476_42514: {
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_42514: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42515: {
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_476_42515: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42560: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42561: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42562: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_476_42563: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I476_42563_11_7703: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_476_42564: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_476_42565: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_476_42566: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_476_42567: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_476_42568: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_476_42569: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42570: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(144, 144, 144, 1)"
  },
  View_476_42571: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_42571: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42572: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42573: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(144, 144, 144, 1)"
  },
  View_476_42574: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42574_11_3270: {
    flexGrow: 1,
    width: wp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I476_42574_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I476_42574_11_3271: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42574_11_3272: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I476_42574_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42575: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42575_11_4523: {
    flexGrow: 1,
    width: wp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I476_42575_11_4523: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I476_42575_11_4524: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42575_11_4525: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I476_42575_11_4525: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I476_42575_11_4526: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I476_42575_11_4526_10_3043: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_476_42576: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("43%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I476_42576_7_553: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I476_42576_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42577: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_476_42578: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_476_42579: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I476_42579_8_5308: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(58, 176, 73, 1)",
    borderWidth: 1
  },
  ImageBackground_I476_42579_8_5309: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_476_42580: {
    width: wp("24%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "center"
  },
  Text_476_42580: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_42581: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_42581: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_477_42903: {
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
  ImageBackground_I477_42903_10_3014: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_478_106285: {
    width: wp("91%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_478_106286: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_478_106287: {
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
  ImageBackground_478_106288: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_478_106289: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(46, 42, 37, 1)"
  },
  ImageBackground_478_106290: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_478_106294: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_478_106299: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_478_106299: {
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
