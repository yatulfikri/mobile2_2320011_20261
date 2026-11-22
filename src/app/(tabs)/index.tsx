import { getAuthSession } from "@/services/authService";
import { authStyles } from "@/styles/authStyles";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [checking, setChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let isActive = true;

    getAuthSession()
      .then((session) => {
        if (isActive) {
          setHasSession(Boolean(session?.token));
        }
      })
      .catch((error: unknown) => {
        console.error("Gagal memeriksa sesi autentikasi:", error);
      })
      .finally(() => {
        if (isActive) {
          setChecking(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  if (checking) {
    return (
      <View style={authStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return <Redirect href={hasSession ? "/home" : "/login"} />;
}
