/* eslint-disable react/prop-types */
import React from 'react';

import { Link, graphql } from 'gatsby';

const NotFoundPage = ({ data }) => (
  <div className="container">
    <div className="row" style={{ margin: 15 }}>
      <div className="col">
        <h4>You're lost within the Unlimited Code Works.</h4>
        {data.allSitePage.edges.map(page => (
          <Link to={page.node.path} href={page.node.path} key={page.node.path}>
            <li>{page.node.path}</li>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query getAllPages {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default NotFoundPage;
