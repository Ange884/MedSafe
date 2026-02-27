import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // Hide index from tab bar as it's the landing redirect
        }}
      />
      <Tabs.Screen
        name="auth/login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="auth/signup"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="auth/start"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="auth/profile-setup"
        options={{
          href: null,
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
        name="iot"
        options={{
          title: "IoT",
          tabBarIcon: ({ color }) => <Ionicons name="bluetooth" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "AI",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses" size={32} color={color} style={{ marginBottom: 5 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
