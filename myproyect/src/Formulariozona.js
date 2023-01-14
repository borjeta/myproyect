import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import {
    Paper,
    Grid,
    Button,
    MenuItem,
    Typography,
    FormControl,
    InputLabel,
    FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = "Requerido";
    }
    if (!values.descripcion) {
        errors.descripcion = "Requerido";
    }
    if (!values.estado) {
        errors.estado = "Requerido";
    }
    return errors;
}

const FormularioZona = (props) => {
    const { onSubmit, initialValues } = props;
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16 }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name="nombre"
                                    component={TextField}
                                    type="text"
                                    label="Nombre"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name="descripcion"
                                    component={TextField}
                                    type="text"
                                    label="Descripción"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="estado">Estado</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="estado"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                    >
                                        <MenuItem value="ACTIVO">Activo</MenuItem>
                                        <MenuItem value="INACTIVO">Inactivo</MenuItem>
                                    </Field>
                                    <FormHelperText>Requerido</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={submitting || pristine}
                                >
                                    Guardar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            )}
        />
    );
}

