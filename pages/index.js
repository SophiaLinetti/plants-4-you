import React from "react";
import PlantList from "@/components/PlantList/PlantList";

export default function Homepage({ plants, handleToggleBookmark }) {
  return (
    <>
      <h2>Welcome to your PlantWorld</h2>
      <PlantList plants={plants} handleToggleBookmark={handleToggleBookmark} />
    </>
  );
}
