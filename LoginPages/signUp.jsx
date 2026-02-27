import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { DMSerifDisplay_400Regular, DMSerifDisplay_700Bold} from "@expo-google-fonts/dm-serif-display";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    DMSerifDisplay_400Regular,
    DMSerifDisplay_700Bold
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/meda.png")}
          style={styles.image}
        />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.subtitle}>
          Hello! Lets get you signed up before you continue 
        </Text>

        {/* Inputs */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Fullnames"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone number"
          />

          <TextInput
            style={styles.input}
            placeholder="Create password"
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Create password"
            secureTextEntry
          />
            <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
          />

          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text style={styles.link}>Log In</Text>
          </Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  imageContainer: {
    height: "30%",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
  },

  title: {
    fontSize: 36,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },

  form: {
    gap: 14,
  },

  input: {
  height: 52,
  width: "100%",
  backgroundColor: "#FFFFFF",
  borderRadius: 14,
  paddingHorizontal: 16,
  fontSize: 15,
  fontFamily: "Inter_400Regular",
  color: "#444",

  // Subtle border
  borderWidth: 1,
  borderColor: "#EFEFEF",

  // iOS shadow
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },

  elevation: 3,
},


  footerText: {
    textAlign: "center",
    fontSize: 17,
    color: "#555",
    marginTop: 10,
    fontFamily: "Inter_400Regular",
  },

  link: {
    color: "#000",
    fontFamily: "Inter_700Bold",
    
  },

 button: {
  marginTop: 10,
  height: 54,
  width: "70%",
  backgroundColor: "#000000",
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",

  alignSelf: "center", // ✅ centers horizontally

  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 4,
},

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "DMSerifDisplay_700Bold"
  },
});