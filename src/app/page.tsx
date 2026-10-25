import { SkyBackground } from "@/components/sky-background";
import { BirthdayExperience } from "@/components/birthday-experience";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <SkyBackground />
      <BirthdayExperience />
    </main>
  );
}
