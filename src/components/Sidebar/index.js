import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { config } from '../../../data';

import Information from './Information';

import './index.scss';

const {
  wordings = [],
  githubUsername,
  email,
  profileImg,
  about,
  facebook,
  medium,
  linkedin,
  keybase
} = config;

const showResume = () => {
  window.open('https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view', '_blank');
};

const Icon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
  >
    <span className="fa-layers fa-fw fa-lg">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const Sidebar = ({ totalCount, latestPosts }) => (
  <header className="intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1">
    <div className="about-me">
      <Link to={about} href={about} className="name">
        <img className="avatar" src={profileImg} alt="shivanshs9" />
        <h4>Shivansh Saini</h4>
      </Link>
      <p className="mb-3">
        {wordings[0]}
        &nbsp;//&nbsp;
        {wordings[1]}
      </p>
      {keybase
        && <Icon href={`https://keybase.io/${keybase}`} icon={['fab', 'keybase']} />
      }
      <Icon
        href={`https://github.com/${githubUsername}`}
        icon={['fab', 'github']}
      />
      {linkedin
        && <Icon href={`https://linkedin.com/in/${linkedin}/`} icon={['fab', 'linkedin']} />
      }
      {medium
        && <Icon href={`https://medium.com/@${medium}/`} icon={['fab', 'medium']} />
      }
      {facebook
        && <Icon href={`https://www.facebook.com/${facebook}/`} icon={['fab', 'facebook']} />
      }
      <Icon href={`mailto:${email}`} icon={['far', 'envelope']} />
      <div className="link-resume" onClick={showResume}>
        Resume
      </div>
      <Information totalCount={totalCount} posts={latestPosts} />
    </div>
  </header>
);

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Sidebar.propTypes = {
  totalCount: PropTypes.number,
  latestPosts: PropTypes.array, //eslint-disable-line
};

Sidebar.defaultProps = {
  totalCount: 0,
  latestPosts: [],
};

export default () => (
  <StaticQuery
    query={graphql`
      fragment cardData on MarkdownRemark {
        fields {
          slug
        }
        frontmatter {
          id
          title
          url: slug
          date
          tags
          description
          headerImage
        }
      }

      query SidebarQuery {
        all: allMarkdownRemark {
          totalCount
        }

        limited: allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 6
        ) {
          latestPosts: edges {
            node {
              ...cardData
            }
          }
        }
      }
    `}
    render={data => <Sidebar {...data.all} {...data.limited} />}
  />
);
