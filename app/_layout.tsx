import { Slot, usePathname, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkAuth = useCallback(() => {
    const userIsAuthed = false; // Replace with real logic
    if (!userIsAuthed && pathname !== "/onboarding") {
      router.replace("/onboarding");
    }
  }, [pathname, router]);

  useEffect(() => {
    if (mounted) {
      checkAuth();
    }
  }, [mounted, checkAuth]);

  return <Slot />;
}
