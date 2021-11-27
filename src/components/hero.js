import React from "react";
import { MDBBtn } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import { FaChevronRight } from "react-icons/fa";
import {Button} from "@material-ui/core";

const Hero = ({ header, subtext, link, buttonText }) => (
  <section>
    <Grid container alignItems="center" className="hero-bg">
      <div className="hero-blur">
        <Grid
          container
          item
          direction="row"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            padding: 0,
          }}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} sm={12}>
            <h2 className="hero-header mt-4">{header}</h2>
            <p className="hero-subtitle mt-4">
              <b>{subtext}</b>
              <br/>
              <br/>
                <Button
                    href={link}
                    style={{
                        marginTop: 60,
                        backgroundColor:"white",
                        color:"#22D3C1",
                        borderRadius:100,
                        boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)"
                    }}
                    variant="contained">
                    {buttonText}
                    <FaChevronRight size={24} style={{ marginRight: "5px" }}/>
                </Button>
                {/*<MDBBtn*/}
                {/*  href={link}*/}
                {/*  rounded*/}
                {/*  floating*/}
                {/*  size="lg"*/}
                {/*  style={{*/}
                {/*    marginTop: 60,*/}
                {/*    backgroundColor:"white",*/}
                {/*    color:"#22D3C1",*/}
                {/*    borderRadius:100,*/}
                {/*    boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)"*/}
                {/*  }}*/}
                {/*  >*/}
                {/*  */}
                {/*  <FaChevronRight size={24} style={{ marginRight: "5px" }} />*/}
                {/*</MDBBtn>*/}
            </p>
            <p
              style={{ marginLeft: "auto", marginRight: "auto" }}
              className="hero-button mt-4"
            >
              <br/>
              <div className="text-align"/>
            </p>
          </Grid>

          <Grid item xs={12} sm={6} className="hero-video mt-4"/>
        </Grid>
      </div>
    </Grid>{" "}
  </section>
);

export default Hero;
