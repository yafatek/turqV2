import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {
    MDBBtn,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCol,
    MDBRow,
} from "mdbreact";
import "../scss/switch.scss";
import ContestPanelList from "../components/competition/contestPanelList";
import {CONTEST_DATA_URL} from "../constants";
import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import {isPastEndDate} from "../util/dateCompare";
import {CONTEST_PAGE_URL, POST_CONTEST_PAGE_URL} from "../constants";
import {FaChevronRight} from "react-icons/fa";
import {Button} from "@material-ui/core";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch1: true,
        };
    }

    handleSwitchChange = (nr) => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber],
        });
    };

    componentDidMount() {
        axios
            .get(CONTEST_DATA_URL)
            .then((res) => {
                const contests = res.data;
                this.setState({contests});
            })
            .catch(function (error) {
                toast.error("Unable to load contest, plese try again in a few minutes");
            });
    }

    render() {
        var currentContests = null;
        if (this.state && this.state.contests) {
            currentContests = this.state.contests.filter(
                (contest) => !isPastEndDate(contest.endDate)
            );
        }
        if (!this.state.switch1) {
            currentContests = this.state.contests.filter((contest) =>
                isPastEndDate(contest.endDate)
            );
        }
        return (
            <Layout fullWidth pageTitle="Turq">
                <Grid container justify="center" alignItems="center">
                    <Grid item style={{alignContent: "center"}}>
                        <Hero
                            link={POST_CONTEST_PAGE_URL}
                            header="Imagine if petition sites like change.org and others were actually effective."
                            buttonText="RAISE AN ISSUE  "
                            subtext="That’s what Turq.io does. We help you get REAL legislation created, not just another petition."
                        />
                    </Grid>

                    <MDBCard
                        align="center"
                        position="absolute"
                        top={10}
                        minHeight="501px"
                        marginTop="250px"
                        className=""
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                            top: 450,
                            minHeight: "400px",
                            padding: "25px",
                            right: "15%",
                            left: "15%",
                            background: "white",
                            borderRadius: "25px",
                        }}
                        zindex={0}
                        justify="center"
                        deck
                    >
                        <MDBCardBody>
              <span
                  style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "grey",
                      fontSize: "small",
                      textTransform: "uppercase",
                      padding: 0,
                      marginBottom: "35px",
                  }}
              >
                you can also become a drafter, and get paid for your work, by
                finding an
                <br></br>
                interesting issue, following the "How To" above, and crafting a
                piece of quality legislation
              </span>

                            <MDBRow>
                                <MDBCol
                                    sm="4"
                                    lg="6"
                                    md="12"
                                    style={{
                                        display: "flex",

                                        justifyContent: "center",
                                    }}
                                >
                                    <MDBCard
                                        style={{
                                            display: "flex",
                                            background: "none",
                                            border: "0px",
                                            padding: 0,

                                            justifyContent: "center",
                                            width: "450px",

                                            marginBottom: "25px",
                                        }}
                                    >
                                        <MDBCardBody
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        >
                                            <MDBCardText
                                                style={{
                                                    textAlign: "left",

                                                    textTransform: "none",
                                                }}
                                            >
                                                <MDBRow>
                                                    <MDBCol md={1} style={{marginRight: "75px"}}>
                                                        <button
                                                            disabled
                                                            className="d-none d-md-block"
                                                            style={{
                                                                forntSize: "large",
                                                                border: "#32ada1",
                                                                color: "white",
                                                                background: "#32ada1",
                                                                borderRadius: 50,
                                                                width: 65,
                                                                height: 65,
                                                            }}
                                                        >
                                                            <b>1</b>
                                                        </button>
                                                    </MDBCol>
                                                    <MDBCol md={8} style={{fontSize: "large"}}>
                                                        <b>Raise it</b>
                                                        <br></br>
                                                        Raise an issue that you care about and want to see
                                                        action on
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol
                                    sm="4"
                                    lg="6"
                                    md="12"
                                    style={{
                                        display: "flex",

                                        justifyContent: "center",
                                    }}
                                >
                                    <MDBCard
                                        style={{
                                            display: "flex",
                                            background: "none",
                                            border: "0px",
                                            padding: 0,

                                            justifyContent: "center",
                                            width: "450px",

                                            marginBottom: "25px",
                                        }}
                                    >
                                        <MDBCardBody
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        >
                                            <MDBCardText
                                                style={{
                                                    textAlign: "left",

                                                    textTransform: "none",
                                                }}
                                            >
                                                <MDBRow>
                                                    <MDBCol md={1} style={{marginRight: "75px"}}>
                                                        <button
                                                            disabled
                                                            className="d-none d-md-block"
                                                            style={{
                                                                forntSize: "large",
                                                                border: "#32ada1",
                                                                color: "white",
                                                                background: "#32ada1",
                                                                borderRadius: 50,
                                                                width: 65,
                                                                height: 65,
                                                            }}
                                                        >
                                                            <b>2</b>
                                                        </button>
                                                    </MDBCol>
                                                    <MDBCol md={8} style={{fontSize: "large"}}>
                                                        <b>Fund it</b>
                                                        <br></br>
                                                        Funding compensates the person that will draft
                                                        legislation on your behalf
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol
                                    sm="4"
                                    lg="6"
                                    md="12"
                                    style={{
                                        display: "flex",

                                        justifyContent: "center",
                                    }}
                                >
                                    <MDBCard
                                        style={{
                                            display: "flex",
                                            background: "none",
                                            border: "0px",
                                            padding: 0,

                                            justifyContent: "center",
                                            width: "450px",

                                            marginBottom: "25px",
                                        }}
                                    >
                                        <MDBCardBody
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        >
                                            <MDBCardText
                                                style={{
                                                    textAlign: "left",

                                                    textTransform: "none",
                                                }}
                                            >
                                                <MDBRow>
                                                    <MDBCol md={1} style={{marginRight: "75px"}}>
                                                        <button
                                                            disabled
                                                            className="d-none d-md-block"
                                                            style={{
                                                                forntSize: "large",
                                                                border: "#32ada1",
                                                                color: "white",
                                                                background: "#32ada1",
                                                                borderRadius: 50,
                                                                width: 65,
                                                                height: 65,
                                                            }}
                                                        >
                                                            <b>3</b>
                                                        </button>
                                                    </MDBCol>
                                                    <MDBCol md={8} style={{fontSize: "large"}}>
                                                        <b>Share it</b>
                                                        <br></br>
                                                        Share the issue with friends & family for any
                                                        additional funding
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol
                                    sm="4"
                                    lg="6"
                                    md="12"
                                    style={{
                                        display: "flex",

                                        justifyContent: "center",
                                    }}
                                >
                                    <MDBCard
                                        style={{
                                            display: "flex",
                                            background: "none",
                                            border: "0px",
                                            padding: 0,

                                            justifyContent: "center",
                                            width: "450px",

                                            marginBottom: "25px",
                                        }}
                                    >
                                        <MDBCardBody
                                            style={{
                                                background: "none",
                                                color: "black",
                                            }}
                                        >
                                            <MDBCardText
                                                style={{
                                                    textAlign: "left",

                                                    textTransform: "none",
                                                }}
                                            >
                                                <MDBRow>
                                                    <MDBCol md={1} style={{marginRight: "75px"}}>
                                                        <button
                                                            disabled
                                                            className="d-none d-md-block"
                                                            style={{
                                                                forntSize: "large",
                                                                border: "#32ada1",
                                                                color: "white",
                                                                background: "#32ada1",
                                                                borderRadius: 50,
                                                                width: 65,
                                                                height: 65,
                                                            }}
                                                        >
                                                            <b>4</b>
                                                        </button>
                                                    </MDBCol>
                                                    <MDBCol md={8} style={{fontSize: "large"}}>
                                                        <b>Send it</b>
                                                        <br></br>
                                                        When the Bill is signature ready, we pipeline it the
                                                        appropriate State or Local legislature for you
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    {/*</Grid>*/}
                    <Grid item xs={12} sm={6} align="center" className="hero-video mt-4">
                        <iframe
                            width="90%"
                            height="415"
                            src="https://www.youtube.com/embed/nA79ZnhbRMM"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Grid>
                    <Grid item xs={12} align="center" className="active-issue-section">
                        <div className="custom-control custom-switch">
                            <Grid item sytle={{backround: "white"}}>
                                <h1>Explore Issues</h1>
                                <hr/>
                            </Grid>
                            <label className="react-switch">
                                <input
                                    checked={!this.state.switch1}
                                    onChange={this.handleSwitchChange(1)}
                                    className="react-switch-checkbox"
                                    type="checkbox"
                                />
                                <button className="react-switch-button" disabled>
                                    {this.state.switch1 ? "Active Issues" : "Past Issues"}
                                </button>
                                <div className="react-switch-labels">
                  <span
                      style={{
                          background: "#22d3c150",
                          fontSize: "medium",
                          marginBottom: "5px",
                          borderRadius: "20px 0 0 20px",
                      }}
                  >
                    Active Issues
                  </span>
                                    <span
                                        style={{
                                            background: "#22d3c150",
                                            fontSize: "medium",
                                            marginBottom: "5px",
                                            borderRadius: "0 20px 20px 0",
                                        }}
                                    >
                    Past Issues
                  </span>
                                </div>
                            </label>
                        </div>
                        {currentContests ? (
                            <ContestPanelList
                                title="Explore Issues"
                                contests={currentContests}
                                size={9}
                            />
                        ) : (
                            <></>
                        )}{" "}
                    </Grid>
                    <Grid item style={{padding: 10}}>
                        <Button
                            href={CONTEST_PAGE_URL}
                            style={{
                                border: "1.5px solid #22D3C1",
                                color: "#22D3C1",
                            }}
                            variant="contained">
                            View All Issues
                        </Button>
                        {/*<Link to={CONTEST_PAGE_URL}>*/}
                        {/*  <MDBBtn*/}
                        {/*    style={{*/}
                        {/*      border: "1.5px solid #22D3C1",*/}
                        {/*      color: "#22D3C1",*/}
                        {/*    }}*/}
                        {/*  >*/}
                        {/*    View All Issues*/}
                        {/*  </MDBBtn>*/}
                        {/*</Link>*/}
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}

export default Home;
