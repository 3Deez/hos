'use client'
import { FC } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export interface IcontainerStyle {
  width: string
  height: string
}

// const containerStyle: IcontainerStyle = {
//   width: '100%',
//   height: '400px',
// }

const center = {
  lat: 9.5825,
  lng: 6.5655,
}

const position = {
  lat: 9.5825,
  lng: 6.5655,
}

const Map: FC<{ containerStyle?: IcontainerStyle }> = ({
  containerStyle = {
    width: '100%',
    height: '400px',
  },
}) => {
  console.log(containerStyle, 'hello world')
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY as string}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
