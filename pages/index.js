import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Homepage({ plants }) {
  return (
    <>
      <h2>Welcome to your PlantWorld</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <Link href={`/plant-details/${plant.slug}`}>
              <Image src={plant.picture} width={100} height={149} alt={plant.picture} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
