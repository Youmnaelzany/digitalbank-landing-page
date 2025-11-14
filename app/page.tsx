import LatestArticles from "@/components/LatestArticles";
import NextGeneration from "@/components/NextGeneration";
import WhyDigitalBank from "@/components/WhyDigitalBank";

export default function Home() {
  return (
    <main className="">
      <NextGeneration />
      <WhyDigitalBank />
      <LatestArticles />
    </main>
  );
}
