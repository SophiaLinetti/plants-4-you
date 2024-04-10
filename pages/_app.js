// import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/navigation";
import plants from "../lib/plants.json";
import useLocalStorageState from "use-local-storage-state";



export default function App({ Component, pageProps }) {

  const initialPlantsInfo = plants.map((plant) => {
  return { id: plant.id, isBookmarked: false };
});

  const [plantsInfo, setPlantsInfo] = useLocalStorageState("plants-info", {
    defaultValue: initialPlantsInfo,
  });

  function toggleBookmark(id) {
    const currentPlant = plantsInfo.find((plant) => plant.id === id);
    if (currentPlant) {
      setPlantsInfo(
        plantsInfo.map((plantInfo) =>
          plantInfo.id === id
            ? { ...plantInfo, isBookmarked: !plantInfo.isBookmarked }
            : plantInfo
        )
      );
    } else {
      setPlantsInfo([...plantsInfo, { id, isBookmarked: true }]);
    }
  }
  

  return (
    <>
      <Navigation />
      <Component {...pageProps} plants={plants} plantsInfo={plantsInfo} handleToggleBookmark={toggleBookmark} />
    </>
  );
}
