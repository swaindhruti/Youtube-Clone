import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
      title={"100 Days Of Code | Day 1"}
      thumbnail={"thumbnail_1.jpg"}
      channelImage={"thumbnail_1.jpg"}
      channel={"Dhrutinandan Swain"}
      views={"1.3M views | 13 days ago"}
      ></VideoCard>
    </div>
  );
}
