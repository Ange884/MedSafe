import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          position: 'absolute',
          borderLeftWidth: 0,
          borderRightWidth: 0,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#AAA",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // Hide index from tab bar as it's the landing redirect
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="meds"
        options={{
          title: "Meds",
          tabBarIcon: ({ color }) => <Ionicons name="medical" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "AI",
          tabBarIcon: ({ color }) => (
            <View style={{
              width: 70,
              height: 70,
              backgroundColor: '#fff',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 40,
              borderWidth: 4,
              borderColor: '#000',
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            }}>
              <Ionicons name="chatbubble-ellipses" size={32} color="#000" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="iot"
        options={{
          title: "IoT",
          tabBarIcon: ({ color }) => <Ionicons name="flash" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => <Ionicons name="help-outline" size={24} color={color} />,
        }}
      />
      </Tabs>
  );
}


