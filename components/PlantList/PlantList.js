import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PlantList({ plants, handleToggleBookmark }) {
    return (
        <>
          <ul>
            {plants?.map((plant) => (
              <li key={plant.id}>
                <h2>{plant.title}</h2>
                <Link href={`/plant-details/${plant.slug}`}>
                  <Image src={plant.picture} width={150} height={199} alt={plant.picture} />
                </Link>
                <button onClick={()=> handleToggleBookmark(plant.id)}>Fav</button>
              </li>
            ))}
          </ul>
        </>
      );
}