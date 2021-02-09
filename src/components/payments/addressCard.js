import React, { useState } from "react"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';

const GEOCODE_AUTH_KEY = "AIzaSyBA5uahhmef0kofBT1go-8kOa79z-OiOvw";

/**
 * Fetch city and state from google maps
 * @param  {number|string} zip
 * @param  {string} country
 * @return {Promise<[string, string]>} [city, state]
 */
async function getAreaFromZip(zip, country) {
  // via googleapis
  return axios({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=&region=${country}&components=postal_code:${zip}&key=${GEOCODE_AUTH_KEY}`,
    method: "GET",
    responseType: "json"
  }).then((response) => {

    if (response.status === 200 && response.data.status === "OK") {

      const components = response.data.results[0].address_components;

      const city = components.find(({types}) => types.includes("locality")).long_name;
      const state = components.find(({types}) => types.includes("administrative_area_level_1")).short_name;
      return [city, state];
    } else {
      throw new Error(JSON.stringify(response));
    }
  }, (err) => {
    return ["error from Google Maps API", ""+err];
  })
}

const AddressCard = () => {
  const [zip, setZip] = useState(""),
    [addr1, setAddr1] = useState(""),
    [addr2, setAddr2] = useState(""),
    [cityName, setCity] = useState(""),
    [stateName, setState] = useState("");

  return <Card>
    <CardHeader title="Billing Address"/>
    <CardContent>
      <form id="address-form"><Grid container spacing={1}>
        <Grid item md={12} fullWidth><TextField fullWidth variant="outlined" label="Address line 1" id="address-line-1"
          value={addr1}
          onChange={function (e) {
            setAddr1(e.target.value);
          }}
        /></Grid>
        <Grid item md={12} fullWidth><TextField fullWidth variant="outlined" label="Address line 2" id="address-line-2"
          value={addr2}
          onChange={function (e) {
            setAddr2(e.target.value);
          }}
        /></Grid>
        <Grid item><TextField variant="outlined" label="Zip Code" id="address-zip"
          inputProps={{
            pattern: "[0-9][0-9][0-9][0-9][0-9]"
          }}
          value={zip}
          onChange={
            async function (e) {
              const it = e.target;
              const code = it.value;
              setZip(code);
              if (!it.error && /\d\d\d\d\d/.test(code)) {
                const [city, state] = await getAreaFromZip(code, "US");
                setCity(city);
                setState(state);
              }

            }
          }
        /></Grid>
        <Grid item><TextField variant="outlined" label="City" id="address-city" name="city"
          value={cityName}
          disabled
        /></Grid>
        <Grid item><TextField variant="outlined" label="State or Territory" id="address-state" name="state"
          value={stateName}
          disabled
        /></Grid>
      </Grid></form>
    </CardContent>
  </Card>;
}
export default AddressCard

AddressCard.propTypes = {}

AddressCard.defaultProps = {}
