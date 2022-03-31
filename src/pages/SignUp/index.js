import { Container, Grid, TextField, InputLabel,MenuItem,FormControl,Select} from "@mui/material";
import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { useState } from "react";

const SignUp = () => {

    //variable que guarda el estado de la fecha
    const [dateSelect, setDateSelect] = useState(null);

    return (
        <Container maxWidht="lg">
            <form>
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <h2>Crear cuenta</h2>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Nombre" name="name" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Apellido" name="last_name" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Correo" name="email" type="email" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Telefono" name="phone_number" type="number" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Password" name="password" type="password" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Direccion" name="address" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Ciudad" name="city" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                label="Fecha de nacimiento"
                                name="date_born"
                                inputFormat="dd/MM/yyyy"
                                value={dateSelect}
                                onChange={(date) => setDateSelect(date)}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <TextField
                            label="Fecha de nacimiento"
                            name="date_born"
                            type="date"
                            fullWidth
                            /> */}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="DNI / Pasaport / CE" name="document_number" type="number" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="genero">Genero</InputLabel>
                            <Select labelId="genero" label="geenro">
                                <MenuItem value="1">Masculino</MenuItem>
                                <MenuItem value="2">Femenino</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
export default SignUp