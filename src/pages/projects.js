import React from 'react';

import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import GridCard from '../components/GridCard';
import { withSize } from 'react-sizeme'

import StackGrid from "react-stack-grid";

import './projects.scss';

const ProjectsPage = ({ data: { allProjectFiles }, size: { width } }) => {
  const projects = [];

  allProjectFiles.edges.forEach(({ node: { data } }) => {
    projects.push(data);
  });

  return (
    <div className="container">
      <div className="row" style={{ margin: 15 }}>
        <Sidebar />

        <div className="col order-2">
          <StackGrid
            columnWidth={width <= 768 ? '100%' : '50%'}
            monitorImagesLoaded={true}
          >
            {projects.map(arg => (
              <GridCard {...arg} key={arg.id} />
            ))}
          </StackGrid>
        </div>
      </div>

      <SEO
        title="Projects"
        url="/projects/"
        siteTitleAlt="Shivansh Saini"
        isPost={false}
        description="Projects Page"
        image="https://i.imgur.com/M795H8A.jpg"
      />
    </div>
  );
};

export default withSize()(ProjectsPage);

export const query = graphql`
  query getAllProjects {
    allProjectFiles: allFile(filter: {sourceInstanceName: {eq: "data"}, relativeDirectory: {eq: "projects"}}) {
      totalCount
      edges {
        node {
          data: childProjectsYaml {
            id
            title
            subtitle
            projectLink
            resultLink
            description
            work
            image
            start
            end
          }
        }
      }
    }
  }
`;
