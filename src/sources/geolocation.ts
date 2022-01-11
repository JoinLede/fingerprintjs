export default function getCurrentPosition(): GeolocationPosition | GeolocationPositionError | null {
  let position = null

  navigator.geolocation.getCurrentPosition(
    (result) => (position = result),
    (e) => (position = e),
  )

  return position
}
