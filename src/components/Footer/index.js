import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />
            <br />
            The code is open source and available at&nbsp;
            <ExternalLink
              href="https://github.com/shivanshs9/shivanshs9.github.io/"
              title="shivanshs9/shivanshs9.github.io"
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://shivanshs9.me/" title="&copy;shivanshs9" />
            &nbsp;
            {config.title}
            &nbsp;
            {new Date().getFullYear()}
            &nbsp;
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="Theme by Calpa Liu"
            />
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
