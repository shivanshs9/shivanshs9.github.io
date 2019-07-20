import React, { useRef } from 'react';

import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import GridCard from '../components/GridCard';
import { withSize } from 'react-sizeme'

import StackGrid from "react-stack-grid";
import ReactResizeDetector from 'react-resize-detector';

import './projects.scss';

const ProjectsPage = ({ data: { allProjectFiles }, size: { width } }) => {
  const projects = [];

  allProjectFiles.edges.forEach(({ node: { data } }) => {
    projects.push(data);
  });

  const grid = useRef(null);

  return (
    <div className="container">
      <div className="row" style={{ margin: 15 }}>
        <Sidebar />

        <div className="col order-2">
          <StackGrid
            columnWidth={width <= 768 ? '100%' : '50%'}
            monitorImagesLoaded
            gridRef={curr => grid.current = curr}
          >
            {projects.map(arg => (
              <ReactResizeDetector
                handleHeight
                handleWidth
                onResize={() => {
                  if (grid.current) grid.current.updateLayout();
                }}
                key={arg.id}
              >
                <GridCard {...arg} />
              </ReactResizeDetector>
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
    allProjectFiles: allFile(filter: {sourceInstanceName: {eq: "data"}, relativeDirectory: {eq: "projects"}}, sort: {fields: name, order: DESC}) {
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
