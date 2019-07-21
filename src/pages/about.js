import React from 'react';

import { graphql } from 'gatsby';

import CalendarHeatmap from 'react-calendar-heatmap';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import Header from '../components/Header';
import ShareBox from '../components/ShareBox';

import 'react-calendar-heatmap/dist/styles.css';

import './about.scss';

import { withSize } from 'react-sizeme';
import { config } from '../../data';

import './projects.scss';

const { name, iconUrl } = config;

const AboutPage = ({ data, size: { width } }) => {
  const nameHeatmap = [
    // S
    { date: '2018-07-29', count: 4 }, { date: '2018-08-05' }, { date: '2018-08-12' },
    { date: '2018-07-30' },
    { date: '2018-07-31' },
    { date: '2018-08-01' }, { date: '2018-08-08' }, { date: '2018-08-15' },
    { date: '2018-08-16' },
    { date: '2018-08-17' },
    { date: '2018-08-04' }, { date: '2018-08-11' }, { date: '2018-08-18' },

    // H
    { date: '2018-09-02' }, { date: '2018-09-23' },
    { date: '2018-09-03' }, { date: '2018-09-24' },
    { date: '2018-09-04' }, { date: '2018-09-25' },
    { date: '2018-09-05' }, { date: '2018-09-12' }, { date: '2018-09-19' }, { date: '2018-09-26' },
    { date: '2018-09-06' }, { date: '2018-09-27' },
    { date: '2018-09-07' }, { date: '2018-09-28' },
    { date: '2018-09-08' }, { date: '2018-09-29' },

    // I
    { date: '2018-10-14' },
    { date: '2018-10-15' },
    { date: '2018-10-16' },
    { date: '2018-10-17' },
    { date: '2018-10-18' },
    { date: '2018-10-19' },
    { date: '2018-10-20' },

    // V
    { date: '2018-11-04' }, { date: '2018-12-02' },
    { date: '2018-11-05' }, { date: '2018-12-03' },
    { date: '2018-11-06' }, { date: '2018-12-04' },
    { date: '2018-11-07' }, { date: '2018-12-05' },
    { date: '2018-11-08' }, { date: '2018-12-06' },
    { date: '2018-11-16' }, { date: '2018-11-30' },
    { date: '2018-11-24' },

    // A
    { date: '2018-12-30' }, { date: '2019-01-06' },
    { date: '2018-12-24' }, { date: '2019-01-14' },
    { date: '2018-12-25' }, { date: '2019-01-15' },
    { date: '2018-12-26' }, { date: '2019-01-02' }, { date: '2019-01-09' }, { date: '2019-01-16' },
    { date: '2018-12-27' }, { date: '2019-01-17' },
    { date: '2018-12-28' }, { date: '2019-01-18' },
    { date: '2018-12-29' }, { date: '2019-01-19' },

    // N
    { date: '2019-02-03' }, { date: '2019-02-10' }, { date: '2019-03-03' },
    { date: '2019-02-04' }, { date: '2019-02-18' }, { date: '2019-03-04' },
    { date: '2019-02-05' }, { date: '2019-02-19' }, { date: '2019-03-05' },
    { date: '2019-02-06' }, { date: '2019-02-20' }, { date: '2019-03-06' },
    { date: '2019-02-07' }, { date: '2019-02-21' }, { date: '2019-03-07' },
    { date: '2019-02-08' }, { date: '2019-02-22' }, { date: '2019-03-08' },
    { date: '2019-02-09' }, { date: '2019-03-02' }, { date: '2019-03-09' },

    // S
    { date: '2019-03-24' }, { date: '2019-03-31' }, { date: '2019-04-07' },
    { date: '2019-03-25' },
    { date: '2019-03-26' },
    { date: '2019-03-27' }, { date: '2019-04-03' }, { date: '2019-04-10' },
    { date: '2019-04-11' },
    { date: '2019-04-12' },
    { date: '2019-03-30' }, { date: '2019-04-06' }, { date: '2019-04-13' },

    // H
    { date: '2019-04-28' }, { date: '2019-05-19' },
    { date: '2019-04-29' }, { date: '2019-05-20' },
    { date: '2019-04-30' }, { date: '2019-05-21' },
    { date: '2019-05-01' }, { date: '2019-05-08' }, { date: '2019-05-15' }, { date: '2019-05-22' },
    { date: '2019-05-02' }, { date: '2019-05-23' },
    { date: '2019-05-03' }, { date: '2019-05-24' },
    { date: '2019-05-04' }, { date: '2019-05-25' },

    // S
    { date: '2019-06-09' }, { date: '2019-06-16' }, { date: '2019-06-23' },
    { date: '2019-06-10' },
    { date: '2019-06-11' },
    { date: '2019-06-12' }, { date: '2019-06-19' }, { date: '2019-06-26' },
    { date: '2019-06-27' },
    { date: '2019-06-28' },
    { date: '2019-06-15' }, { date: '2019-06-22' }, { date: '2019-06-29' },

    // 9
    { date: '2019-07-14' }, { date: '2019-07-21' }, { date: '2019-07-28' },
    { date: '2019-07-15' }, { date: '2019-07-29', count: 4 },
    { date: '2019-07-16' }, { date: '2019-07-30' },
    { date: '2019-07-17' }, { date: '2019-07-24' }, { date: '2019-07-31' },
    { date: '2019-08-01' },
    { date: '2019-08-02' },
    { date: '2019-07-20' }, { date: '2019-07-27' }, { date: '2019-08-03' },
  ];

  return (
    <div className="row about order-2">
      <Header
        img="https://i.imgur.com/63BR8Nf.jpg"
        title="Unlimited Code Works"
        authorName={name}
        authorImage={iconUrl}
        subTitle="“...Do you have enough code in stock?”"
      />

      <Sidebar />

      <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content">
        <div className="name-heatmap">
          <CalendarHeatmap
            startDate="2018-07-01"
            endDate="2019-07-29"
            showOutOfRangeDays
            classForValue={(value) => {
              if (!value) return 'color-empty';
              return `color-github-${value.count || 2}`;
            }}
            values={nameHeatmap}
          />
        </div>

        <p>
          I'm Shivansh Saini, a Computer Science undergraduate at Indian Institute of Technology (BHU), Varanasi. I'm a tech enthusiast and have been fascinated with software
          and games development since I was 14. Since the 2 years I've started coding, I've grown attached to Open Source development and love to share my
          software solutions with the people who may need it. I like to solve real-life problems with a mindset of optimization.
        </p>
        <p>
          For my technical skills, I've had practical experience in backend REST development, JAMstack frontend development, Android development and Cloud DevOps in container orchestration.
          Most of my projects are polished to work in production environment in the hands of regular users. I am a fan of semantic versioning and am a CI diplomat, such that I don't let any
          production code pass without CI/CD pipeline.
        </p>
        <p>
          I am a poweruser at heart and love to hack any technology I get my hands on, until I have used that in something of my own.
          I believe in not reinventing the wheel, but rather collecting tools in my portable toolbox.
          Unfortunately, no matter what I do, there's still lots of space for new tools in my toolbox.
          <span role="img" aria-label="laugh"> 😁 </span>
        </p>
        <p>
          Some of the things I'm proud of:
          <dl>
            <dt>My startup, Checkin</dt>
            <dd>
              I worked with my brilliant co-founder to build an idea worth struggling for. All the challenges I faced here really helped me grow immensely - in technical,
              social and personal aspects. I'm also proud of architecturing a production-ready scalable backend web service and a polished android app as its client.
            </dd>
            <dt>Open Source</dt>
            <dd>
              I've contributed in various Open Source projects, but most of all I really love to contribute back to the Videolan organization. I've been using their VLC media player
              since my schooldays, and getting a chance to give back as a Student Developer under Google Summer of Code 2019 is really an awesome feeling.
              I'm also a maintainer of a Python library, called "DRF-Problems", and RPG Maker MV plugins to help create multiplayer games.
            </dd>
            <dt>Laptop</dt>
            <dd>
              My laptop workstation is a triple-boot system with macOS Catalina (Hackintosh), Manjaro Linux and Windows 10. I love creating difficult challenges for myself
              or solving them through unconventional means, like patching my system's ACPI tables.
            </dd>
          </dl>
        </p>
        <p>
          For my hobbies, I love to play Visual Novels, watch animes and to read fictional novels. I love mystery and adventure genres, and am really nitpicky for
          a realistic character development in the story.
        </p>
        <p>
          I'd also like to mention my failures here too, since well those have definitely contributed to make me who I am.
          <ul>
            <li>
              In 2014, I've had a narrow vision of a company, called Cyber-X-Zone, mostly targeted to developing games. I had an idea to make trilogy game series, called "The Destiny" (and yes, I know that name's taken).
              I've jotted down the plans and progress in my old blog -
              <a href="https://thedestiny-cxz.blogspot.com/"> Cyber-X-Zone</a>
            </li>
            <li>
              In 2015-16, I remotely worked with a team, spread around the globe, to make a fan-game of Fate/stay night, called "Fate/Apophenia", possible.
              Unfortunately, we had to discontinue because of our project-head's silent absence. Here's our website on Tumblr -
              <a href="https://fate-apophenia.tumblr.com/"> Fate/Apophenia</a>
            </li>
          </ul>
        </p>
        <p>
          <br />
          I would love to connect and have conversation with my fellow tech-enthusiast or weaboo! You can contact me via any of the social channel I've shared in the sidebar.
        </p>
      </div>

      <ShareBox url={window.location.href} hasCommentBox={false} />

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
