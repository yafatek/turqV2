import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faInstagramSquare, faRedditSquare } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
<footer className="container-fluid mt-5">
    <div className="row footer py-4">
      <div className="col-12 col-md-3 mx-auto my-3">
        <h3 className="footer-header">legal</h3>
        <span className="footer-text">
          <a href="https://github.com/TurqPBC/turqV2/blob/master/TERMS_OF_USE.md" classname="footer-text">terms of use</a>
        </span>
        <br />
        <span className="footer-text">© copyright 2020 turq, pbc</span>
      </div>
      <div className="col-12 col-md-3 mx-auto my-3">
        <h3 className="footer-header">Social Media</h3>
        <span>
          <a
            href="https://twitter.com/Turqpbc"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faTwitterSquare} />
          </a>
          <a
            href="https://www.instagram.com/turq.io/"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faInstagramSquare} />
          </a>
          <a
            href="https://github.com/TurqPBC"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faGithubSquare} />
          </a>
          <a
            href="https://www.reddit.com/r/citizenlegislation/"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faRedditSquare} />
          </a>
        </span>
      </div>
      <div className="col-12 col-md-3 mx-auto">
      </div>
    </div>
</footer>
)

export default Footer
