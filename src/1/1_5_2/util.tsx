export function getImageUrl(imageId: string, size: string) {
  return `http://localhost:5173/${imageId}${size}.jpg`;
}
