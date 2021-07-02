import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    color: "#8766b9",
    marginTop: theme.spacing(2),
    marginBottom: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Selection = () => {
  //menu
  const classes = useStyles();
  const [business, setBusiness] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChangeBusiness = (event) => {
    setBusiness(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [distance, setDistance] = React.useState("");
  const [openDistance, setOpenDistance] = React.useState(false);

  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };
  const handleCloseDistance = () => {
    setOpenDistance(false);
  };
  const handleOpenDistance = () => {
    setOpenDistance(true);
  };

  //end menu
  return (
    <Container>
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Select Business
        </Button>
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="demo-controlled-open-select-label">Business</InputLabel> */}
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={business}
            onChange={handleChangeBusiness}
          >
            <MenuItem value="">
              <em>locals only.</em>
            </MenuItem>
            <MenuItem value={"restaurant"}>Restaurant</MenuItem>
            <MenuItem value={"cafe"}>Cafe</MenuItem>
            <MenuItem value={"bakery"}>Bakery</MenuItem>
            <MenuItem value={"liquor_store"}>Liquor Store</MenuItem>
            <MenuItem value={"beauty_salon"}>Salon</MenuItem>
            <MenuItem value={"bicycle_store"}>Bike Store</MenuItem>
            <MenuItem value={"book_store"}>Book Store</MenuItem>
            <MenuItem value={"car_repair"}>Car Repair</MenuItem>
            <MenuItem value={"plumber"}>Plumber</MenuItem>
            <MenuItem value={"clothing_store"}>Clothing Store</MenuItem>
            <MenuItem value={"convenience_store"}>Bodega</MenuItem>
            <MenuItem value={"electrician"}>Electrician</MenuItem>
            <MenuItem value={"florist"}>Florist</MenuItem>
            <MenuItem value={"supermarket"}>Market</MenuItem>
            <MenuItem value={"hardware_store"}>Hardware Store</MenuItem>
            <MenuItem value={"home_goods_store"}>Home Goods</MenuItem>
            <MenuItem value={"locksmith"}>Locksmith</MenuItem>
            <MenuItem value={"bar"}>Bar</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <Button className={classes.button} onClick={handleOpenDistance}>
          Select Distance
        </Button>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openDistance}
            onClose={handleCloseDistance}
            onOpen={handleOpenDistance}
            value={distance}
            onChange={handleChangeDistance}
          >
            <MenuItem value="">
              <em>Distance</em>
            </MenuItem>
            <MenuItem value={"1609"}>1 Mile</MenuItem>
            <MenuItem value={"3218"}>2 Miles</MenuItem>
            <MenuItem value={"8046"}>5 Miles</MenuItem>
            <MenuItem value={"16093"}>10 Miles</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Container>
  );
};

export default Selection;