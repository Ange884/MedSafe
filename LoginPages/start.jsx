import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function LandingScreen() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/images/meda.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        {/* Logo and Brand Text over Image */}
        <View style={styles.brandContainer}>
          <Text style={styles.logoText}>MEDA</Text>
          <Text style={styles.tagline}>Health with no limits</Text>
        </View>

        {/* Wavy Divider (SVG-like effect using overlapping views or specialized styling) */}
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>WELCOME</Text>
        <Text style={styles.description}>
          An amazing experience where you no longer need to spend hours looking for your medical papers as you now go with them in your phone
        </Text>

        {/* Buttons Section */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    height: "55%",
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0000007D", // Slight blue semi-transparent overlay
  },
  brandContainer: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "serif", // Fallback for serif
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
    fontFamily: "monospace", // Giving it that digital look
  },
  wavyDivider: {
    position: "absolute",
    bottom: -1,
    width: "100%",
    height: 60,
    overflow: "hidden",
  },
  wave1: {
    position: "absolute",
    bottom: -40,
    left: -50,
    width: width * 0.8,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 70,
    transform: [{ scaleX: 2 }],
  },
  wave2: {
    position: "absolute",
    bottom: -60,
    right: -50,
    width: width * 0.8,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 80,
    transform: [{ scaleX: 2 }],
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 32,
  },
  welcomeText: {
    fontSize: 42,
    fontWeight: "700",
    color: "#000",
    fontFamily: "serif",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 10,
    fontFamily: "Inter_400Regular",
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  loginButton: {
    width: "70%",
    height: 60,
    backgroundColor: "#000",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
  },
  signupButton: {
    width: "70%",
    height: 60,
    borderColor: "#000",
    borderRadius: 30,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
  },
  signupButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
  },
});