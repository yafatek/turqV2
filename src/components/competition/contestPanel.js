import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { FaTwitter, FaChevronRight } from "react-icons/fa";
import { TWITTER_SHARE_TEXT } from "../../constants";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBFooter,
} from "mdb-react-ui-kit";

const ContestPanel = ({ title, link, buttonText, funding }) => {
  const tiers = {
    Bronze: { min: 0.0, max: 200.0 },
    Silver: { min: 201.0, max: 350.0 },
    Gold: { min: 351.0, max: 500 },
    Completed: { min: 500.0 },
  };
  const [goal, setGoal] = useState(0);
  const currentTier = React.useRef("Bronze");
  const currentFundingDecimal = funding / 100;
  useEffect(() => {
    const getTier = () =>
      Object.keys(tiers).find(
        (key) =>
          currentFundingDecimal >= tiers[key].min &&
          currentFundingDecimal <= tiers[key].max
      );
    currentTier.current = getTier() || "Completed";
    setGoal(tiers[currentTier.current].max);
  }, [currentFundingDecimal, tiers]);

  return (
    <MDBCard
      className=" hover half-a-border-on-top clearfix"
      style={{
        background: "#FFFFFF",
        borderTop: "10px solid #22D3C1",
        padding: 0,
        display: "flex",

        justifyContent: "center",
        width: "350px",
        borderRadius: "10px",
        marginBottom: "25px",
      }}
      xs={12}
    >
      <MDBCardBody
        style={{
          background: "#FFFFFF",
          color: "black",
        }}
      >
        <MDBCardTitle
          align="left"
          className="clearfix"
          style={{ fontSize: "small" }}
        >
          <span style={{ paddingRight: "25px" }}>
            Current Funding:{" "}
            <span style={{ color: "#22D3C1" }}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(funding / 100)}{" "}
            </span>
          </span>
          <span align="right">
            Goal:{" "}
            <span style={{ color: "#22D3C1" }}>
              {goal < 500 ? `$${goal}` : "Achieved"}
            </span>
          </span>
        </MDBCardTitle>
        <div style={{ textAlign: "left" }}>
          <b>{title}</b>
        </div>
        <MDBCardText style={{ textAlign: "left" }}>
          <CardActions align="right"></CardActions>
        </MDBCardText>
      </MDBCardBody>
      <MDBFooter
        align="right"
        style={{
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Grid container justifyContent="space-around">
          <Grid item>
            <Link
              to={link}
              style={{
                color: "#22D3C1",

                display: "inline-block",
                fontSize: "small",
              }}
            >
              <b>{buttonText}</b>
              <FaChevronRight size={24} style={{ marginRight: "5px" }} />
            </Link>
          </Grid>
          <Grid item>
            <a
              style={{
                color: "white",
                fontSize: "small",
              }}
              href={
                "https://twitter.com/intent/tweet?hashtags=Turq&original_referer=" +
                window.location.href +
                "&related=Turqpbc&text=" +
                TWITTER_SHARE_TEXT +
                "&url=" +
                window.location.href
              }
            >
              <MDBBtn
                size="sm"
                style={{
                  padding: "0.8px 2px 0.8px 2px",
                  marginRight: "5px",
                  marginBottom: "5px",
                  wight: "5px",
                  hight: "3px",
                }}
              >
                <FaTwitter />
                Tweet
              </MDBBtn>
            </a>
          </Grid>
        </Grid>
      </MDBFooter>
    </MDBCard>
  );
};

export default ContestPanel;

ContestPanel.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  funding: PropTypes.number,
};

ContestPanel.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: "",
  buttonText: "VIEW DETAILS",
  funding: 0.0,
};
