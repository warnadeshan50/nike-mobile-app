import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 300,
      }}
    >
      <View>
        <Image
          source={require("./../assets/images/Nike-Logo.png")}
          style={{
            width: 330,
            height: 180,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 56,
              justifyContent: "center",
              textAlign: "center",
              marginTop: -10,
              fontFamily: "kanit-bold",
            }}
          >
            JUST DO IT
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Let's see</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "black",
    color: "white",
    borderRadius:99,
    marginTop:150,
  },
  btnText: {
    color:'white',
    textAlign:'center',
    margin:'auto',
    fontSize:20,
    fontFamily:"kanit-bold",
  },
});
