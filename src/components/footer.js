import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faInstagramSquare, faRedditSquare } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
<footer className="footer container-fluid">
    <div className="row py-2">
      <div className="col-12 col-md-3 mx-auto my-2 text-right" align="center">
        <div className="footer-text">© copyright 2020 turq, pbc</div>
      </div>
      <div className="col-12 col-md-3 mx-auto my-2" align="center">
        <div className="mx-auto">
          <a
            href="https://twitter.com/Turqpbc"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faTwitterSquare} />
          </a>
          <a
            href="https://www.instagram.com/turq.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faInstagramSquare} />
          </a>
          <a
            href="https://github.com/TurqPBC"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faGithubSquare} />
          </a>
          <a
            href="https://www.reddit.com/r/citizenlegislation/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon className="footer-text" size="2x" icon={faRedditSquare} />
          </a>
        </div>
      </div>
      <div className="col-12 col-md-3 my-2 text-left mx-auto" align="center">
        <div>
          <a className="footer-link" href="https://github.com/TurqPBC/turqV2/blob/master/TERMS_OF_USE.md">Terms of Use</a>
        </div>
      </div>
    </div>
</footer>
)

export default Footer
