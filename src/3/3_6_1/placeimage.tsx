import { useContext } from 'react';
import { ImageSizeContext } from './Context';
import { PlaceType } from './data';
import { getImageUrl } from './utils';

export default function PlaceImage({ place }: { place: PlaceType }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
