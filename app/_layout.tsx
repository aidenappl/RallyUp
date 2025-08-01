import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const userIsAuthed = false; // Replace with real logic
      if (!userIsAuthed && pathname !== "/onboarding") {
        router.replace("/onboarding");
      }
    }
  }, [mounted, pathname]);

  return <Slot />;
}
