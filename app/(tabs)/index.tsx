import { Redirect } from "expo-router";

export default function MainScreen() {
  return <Redirect href="/auth/start" />;
}