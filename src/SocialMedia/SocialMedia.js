import React, { Component } from 'react';
import './SocialMedia.css';
const socialMediaData = [
  {
    company: 'twitter',
    icon: 'M0 461.54c10.42 1.014 20.826 1.548 31.22 1.548 61.048 0 115.528-18.732 163.387-56.17-28.424-.352-53.933-9.041-76.477-26.043-22.57-16.99-37.984-38.675-46.323-65.056 6.933 1.418 15.102 2.095 24.456 2.095 12.15 0 23.766-1.575 34.862-4.684-30.517-5.866-55.766-20.891-75.709-44.996-19.955-24.13-29.919-51.969-29.919-83.527v-1.574c18.395 10.42 38.31 15.805 59.826 16.13-18.016-11.798-32.338-27.304-42.915-46.57-10.575-19.24-15.87-40.13-15.87-62.675 0-23.597 6.088-45.607 18.212-66.095 32.6 40.586 72.418 72.938 119.431 97.055 47 24.092 97.368 37.53 151.158 40.327-2.432-11.448-3.655-21.516-3.655-30.18 0-36.085 12.84-66.954 38.505-92.62C375.868 12.839 406.893 0 443.342 0c37.79 0 69.7 13.88 95.73 41.64 30.167-6.257 57.926-17.015 83.255-32.261-9.718 31.558-28.815 55.845-57.238 72.847 25.327-3.109 50.304-10.055 74.929-20.813-16.651 26.017-38.336 48.742-65.056 68.151v17.198c0 34.992-5.125 70.128-15.35 105.355-10.211 35.214-25.848 68.853-46.83 100.972-20.996 32.065-46.05 60.619-75.189 85.569-29.126 24.977-64.08 44.853-104.849 59.592-40.755 14.752-84.555 22.089-131.398 22.089-72.483-.014-139.606-19.605-201.345-58.8z',
    iconViewBox: '0 0 640.0180053710938 520.3389892578125',
    address: 'https://twitter.com/dallas_norton',
    title: 'Twitter'
  }, {
    company: 'github',
    icon: 'M0 255.488c0-34.816 6.826-67.925 20.48-99.328C47.445 92.672 92.672 47.446 156.16 20.48 187.562 6.827 220.672 0 255.488 0s67.925 6.827 99.328 20.48c62.806 26.624 108.032 71.85 135.68 135.68 13.653 32.427 20.48 65.536 20.48 99.328s-6.827 66.902-20.48 99.328c-27.647 64.17-72.874 109.74-135.68 136.704-31.403 13.654-64.512 20.48-99.328 20.48s-67.926-6.826-99.328-20.48C92.672 464.213 47.445 418.645 20.48 354.816 6.827 323.414 0 290.304 0 255.488zm39.935 0c0 48.128 14.336 91.136 43.009 129.024 28.33 37.205 65.365 63.658 111.104 79.36v-40.96c0-20.48 6.827-35.328 20.48-44.545-6.826-.34-14.848-1.535-24.064-3.583-17.408-3.072-32.256-8.533-44.544-16.384-31.061-18.774-46.592-52.736-46.592-101.888 0-25.6 8.533-47.446 25.6-65.536-7.85-20.14-6.997-41.984 2.56-65.536h10.24c3.413 0 7.68.853 12.8 2.56 13.312 4.096 28.16 11.605 44.544 22.527 20.821-5.46 41.301-8.191 61.44-8.191s40.79 2.73 61.952 8.191c13.312-8.874 25.77-15.7 37.376-20.48 10.923-4.095 18.773-5.802 23.552-5.12l6.144.512c9.216 23.553 10.07 45.398 2.56 65.537 17.067 18.09 25.6 39.935 25.6 65.536 0 38.229-9.386 67.072-28.16 86.528-10.24 10.922-23.723 19.456-40.448 25.6-13.995 5.12-29.525 8.362-46.592 9.727 13.995 9.9 20.993 24.747 20.993 44.544v40.96c44.031-15.701 80.383-42.496 109.056-80.384 27.99-37.546 41.984-80.213 41.984-128 0-29.013-5.632-57.002-16.897-83.968-10.922-25.941-26.282-48.81-46.08-68.608-19.114-19.115-41.983-34.304-68.607-45.567-27.307-11.606-55.125-17.409-83.456-17.409-27.99 0-55.98 5.803-83.969 17.409-25.6 10.922-48.469 26.111-68.607 45.567-19.115 19.798-34.475 42.667-46.08 68.608-11.265 26.966-16.897 54.955-16.897 83.968z',
    iconViewBox: '0 0 510.9759826660156 512',
    address: 'https://github.com/dallasnorton',
    title: 'GitHub'
  }, {
    company: 'linkedin',
    icon: 'M0 57.096c0-16.55 5.793-30.203 17.377-40.96C28.962 5.379 44.022 0 62.557 0c18.204 0 32.934 5.296 44.187 15.888 11.585 10.922 17.377 25.155 17.377 42.698 0 15.888-5.626 29.127-16.88 39.719-11.585 10.922-26.81 16.384-45.676 16.384h-.497c-18.205 0-32.934-5.461-44.187-16.384C5.627 87.382.001 73.645.001 57.096zm6.454 434.425V159.869h110.22v331.652H6.454zm171.288 0c.662-99.959.993-177.576.993-232.852s-.331-88.209-.993-98.8h110.22v47.165l-.496.993h.496v-.993c23.831-36.74 57.096-55.11 99.794-55.11 38.063 0 68.68 12.661 91.85 37.982 23.168 25.32 34.753 62.474 34.753 111.46V491.52h-110.22V314.275c0-49.98-18.535-74.97-55.606-74.97-14.233 0-26.065 3.89-35.498 11.668-9.434 7.778-16.468 17.294-21.102 28.548-2.648 6.289-3.972 15.226-3.972 26.81V491.52h-110.22z',
    iconViewBox: '0 0 514.3589477539062 491.5210266113281',
    address: 'https://www.linkedin.com/in/dallasnorton/',
    title: 'LinkedIn'
  }, {
    company: 'email',
    icon: 'M0 316.758V30.782c0-.33.496-3.475 1.49-9.433l168.308 143.98L1.986 326.688c-1.323-4.634-1.985-7.944-1.985-9.93zM22.342 1.49C24.659.497 27.472 0 30.782 0h453.29c2.98 0 5.958.497 8.937 1.49L324.204 145.968l-22.342 17.873-44.187 36.244-44.187-36.244-22.342-17.873zm.496 344.56L192.14 183.7l65.536 53.123 65.536-53.124L492.513 346.05c-2.648.994-5.461 1.49-8.44 1.49H30.783c-2.649 0-5.297-.496-7.945-1.49zm322.716-180.719L513.366 21.35c.993 2.98 1.489 6.124 1.489 9.434V316.76c0 2.978-.496 6.288-1.49 9.93z',
    iconViewBox: '0 0 514.8550415039062 347.53997802734375',
    address: 'mailto:dallaslandonnorton@gmail.com',
    title: 'Email'
  }
];
// https://leungwensen.github.io/svg-icon/#zocial <-- icons
// https://github.com/vorillaz/devicons
// https://simpleicons.org/

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.socialMediaSites = socialMediaData.map((site, index) => {
      return <div key={index} className="social-media-wrapper">
        <svg className="social-media-icons" viewBox={site.iconViewBox}><path d={site.icon}></path></svg>
        <a href={site.address}>{site.title}</a>
      </div>;

    });
  }
  render() {
    return <div className="social-media-container">
      {this.socialMediaSites}
    </div>;
  }
}

export default SocialMedia;
