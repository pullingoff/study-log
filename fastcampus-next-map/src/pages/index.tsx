// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Map from "../components/Map";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/types";
import axios from "axios";

export default function Home({ stores }: { stores: StoreType }) {
  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}

export async function getStaticProps() {
  const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
  return {
    props: { stores: stores.data },
    revalidate: 60 * 60,
  };
}
