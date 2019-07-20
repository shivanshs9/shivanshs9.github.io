import React from 'react';

import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import { withSize } from 'react-sizeme'


import './projects.scss';

const AboutPage = ({ data, size: { width }}) => {
  return (
    <div className="container">
      <div className="row" style={{ margin: 15 }}>
        <Sidebar />

        <div className="col order-2">
        </div>
      </div>

      <SEO
        title="About me"
        url="/about/"
        siteTitleAlt="Shivansh Saini"
        isPost={false}
        description="About Page"
        image="https://i.imgur.com/M795H8A.jpg"
      />
    </div>
  );
};


export default withSize()(AboutPage);

// export const query = graphql`
// `;
