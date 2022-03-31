import { Container, Grid } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const Map = () => {
    // latitud y longitud de la ubicacion lima
    const position = [-12.04318, -77.02824]
    const markerIcon = new L.icon({
        iconUrl: require("../../assets/marker.png"),
        iconSize: [30, 30],
    })

    // vamos a crear una lista de lugares en Lima
    const lugares = [
        {
            nombre: "Parque de las Aguas",
            coordenadas: [-12.024541451878802, -76.94970503507551],
        },
        {
            nombre: "Parque de la Exposicion",
            coordenadas: [-12.062762793196896, -77.0358762602543],
        },
        {
            nombre: "Mall del Sur",
            coordenadas: [-12.154842871867231, -76.98220670258019],
        },
        {
            nombre: "UTP",
            coordenadas: [-12.193221013593265, -76.97208362363975],
        }
    ]
    return (
        <Container maxWidht="lg">
            <Grid Container>
                <Grid item md={12}>
                    <h1>Mapas</h1>
                </Grid>
                <Grid item md={12}>
                    <MapContainer center={position} zoom={12} style={{ height: 500 }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* <Marker position={[-12.043973616974938, -76.95295478638475]} icon={markerIcon}>
                            <Popup>
                                Tecsup Centro Educativo
                            </Popup>
                        </Marker> */}

                        {lugares.map((lugar, index) => (
                            <Marker key={index} position={lugar.coordenadas} icon={markerIcon}>
                                <Popup>
                                    {lugar.nombre}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Map;