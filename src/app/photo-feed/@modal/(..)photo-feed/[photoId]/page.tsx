import Modal from "@/components/modal";
import Image from "next/image";
import fruitsImages, { FruitsImage } from "../../../fruits-image";

export default function PhotoModal({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photo: FruitsImage = fruitsImages.find((p) => p.photoId === photoId)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}