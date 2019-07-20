import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Tag from '../Tag';
import { convertUrlToIcon } from '../../api/url';
import { parseDateToMonth, getDuration } from '../../api';

import './index.scss';

Modal.setAppElement('#___gatsby');

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${headerImage})`,
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <a href={url}>
    <div className="wrapper" style={imageStyle(image, backgroundColor)} />
  </a>
);

const Icon = ({ href, title }) => {
  const icon = convertUrlToIcon(href);

  return (
    <a
      target="_blank"
      href={href}
      rel="external nofollow noopener noreferrer"
      className="custom-icon"
    >
      <span className="fa-layers fa-fw fa-lg" title={title}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  );
};

class GridCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {
      title,
      start,
      end,
      projectLink,
      resultLink,
      image,
      work,
      description,
      subtitle,
      tags = [],
    } = this.props;
    const url = resultLink || projectLink;
    const duration = getDuration(start, end);
    const interjection = (!end || duration.match(/months?$/)) ? 'from' : 'in';
    const dateTxt = `${duration} ${interjection} ${parseDateToMonth(start)}`;

    return (
      <div className="pb-4">
        <div className="custom-card">
          {image && (
            <CardHeader
              url={url}
              image={image}
            />
          )}
          <div className="data">
            <div className="content">
              <div className="stats">
                <span className="date">{dateTxt}</span>
                {tags && tags.map(name => (
                  <Tag name={name} key={name} />
                ))}
              </div>
              <a href={url}>
                <h4 className="title">{title}</h4>
              </a>
              <span className="subtitle">{subtitle}</span>
              <p className="description">{description}</p>
              <div className="links">
                {resultLink && (
                  <Icon
                    href={resultLink}
                    title="Check it out!"
                  />
                )}
                <span className="work" onClick={this.openModal}>What I did</span>
                {projectLink && (
                  <Icon
                    href={projectLink} 
                    title="View source"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
          contentLabel="My Responsibilities">
          <ul>
            {work.map(str => (<li>{str}</li>))}
          </ul>
        </Modal>
      </div>
    );
  }
}

GridCard.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  projectLink: PropTypes.string,
  resultLink: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  work: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
}

GridCard.defaultProps = {
  image: '',
  tags: [],
  end: '',
  subtitle: '',
  projectLink: '',
  resultLink: '',
};

export default GridCard;
