import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faZhihu,
  faFacebookF,
  faFacebook,
  faMediumM,
  faMedium,
  faLinkedin,
  faLinkedinIn,
  faStackOverflow,
  faGooglePlay,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';

const installFontAwesome = () => {
  library.add(
    faCircle,
    faComment,
    faChevronUp,
    faEnvelope,
    faGlobe,
    faGithub,
    faZhihu,
    faFacebookF,
    faFacebook,
    faMediumM,
    faGitlab,
    faMedium,
    faLinkedin,
    faLinkedinIn,
    faStackOverflow,
    faGooglePlay,
  );
};

export default installFontAwesome;
