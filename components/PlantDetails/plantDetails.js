import Image from "next/image";

export default function PlantDetails({ plant }) {
  const { title, description, location, watering, care, picture } = plant;

  return (
    <>
      <h1>{title}</h1>

      <ul>
        <Image src={plant.picture} alt={plant.title} width={150} height={199} />
        <li>{description}</li>
        <li>{location}</li>
        <li>{watering}</li>
        <li>{care}</li>
      </ul>
    </>
  );
}
