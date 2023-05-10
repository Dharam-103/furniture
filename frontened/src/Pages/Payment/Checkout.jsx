

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Checkout = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert("Payment submitted successfully!");
    window.location.href="/"
  };
 //done
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" align="center" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Address"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Number"
          type="number"
          margin="normal"
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="payment-method-label" maxWidth="50px">Payment method</InputLabel>
          <Select
            labelId="payment-method-label"
            id="payment-method"
            required
            defaultValue=""
          >
            <MenuItem value="credit-card">Credit card</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Card number"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Expiration date"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="CVV"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Billing zip code"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Submit payment
        </Button>
      </form>
    </Paper>
  );
};


export default Checkout;



