import { atom } from "recoil";
import { LocationType, StoreType, SearchType } from "@/types";

const DEFAULT_LAT = "37.497625203";
const DEFAULT_LNG = "127.03088379";
const DEFAULT_ZOOM = 3;

export const mapState = atom({
  key: "map",
  default: null,
  dangerouslyAllowMutability: true, // 카카오 setMap 위함
});

export const currentStoreState = atom<StoreType | null>({
  key: "store",
  default: null,
});

export const locationState = atom<LocationType>({
  key: "location",
  default: {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    zoom: DEFAULT_ZOOM,
  },
});

export const searchState = atom<SearchType>({
  key: "search",
  default: {},
});
