import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  capitalize,
} from "@mui/material";
import Header from "../../components/Header";

import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useForm } from "react-hook-form";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

function Form() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => handleClick();

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >

<Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Stack sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This Field Is Required & Min 3 Character "
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.LastName)}
          helperText={
            errors.LastName ? "This Field Is Required & Min 3 Character " : null
          }
          {...register("LastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.Email)}
        helperText={
          errors.Email ? "Please provide a valid email addres " : null
        }
        {...register("Email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.Number)}
        helperText={
          errors.Number ? "Please provide a valid Phone numbe " : null
        }
        {...register("Number", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            sx={{ width: "100%" }}
          >
   Account created successfully          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Form;
