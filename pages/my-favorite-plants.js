import React from 'react';
import Link from "next/link";
import Image from "next/image";


export default function MyFavoritePlants({ plants, plantsInfo, handleToggleBookmark }) {

  const filteredPlants = plants.filter(plant =>
    plantsInfo.some(plantInfo => plantInfo.id === plant.id && plantInfo.isBookmarked)
  );

  return (
    <>
      <h1>My Favorite Plants</h1>
      {filteredPlants.length > 0 ? (
        <ul>
        {filteredPlants.map(plant => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <Link href={`/plant-details/${plant.slug}`}>
                  <Image src={plant.picture} width={150} height={199} alt={plant.picture} />
                </Link>
            <button onClick={() => handleToggleBookmark(plant.id)}>
              Remove Fav
            </button>
          </li>
        ))}
      </ul>
        ) : (
          <p>You have not saved any plants yet.</p>
        )}
    </>
  );
}
