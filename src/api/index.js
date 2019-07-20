import dayjs from 'dayjs';
import { config } from '../../data';

const { maxPostsInPage } = config;

// Prevent webpack window problem
const isBrowser = () => typeof window !== 'undefined';

const getPageNumber = () => (isBrowser() ? +window.location.pathname.match(/page[/](\d)/)[1] : -1);

const getCurrentPage = () => {
  if (isBrowser() === true) {
    const str = window.location.pathname;
    if (str.indexOf('page') !== -1) {
      // Return the last pathname in number
      return getPageNumber();
    }
  }

  return 0;
};

const getPath = () => (isBrowser() ? window.location.pathname : '');

const getMaxPages = amount => Math.ceil(amount / maxPostsInPage);

// Array.fill() is added by trial and error
const getPages = amount => new Array(amount).fill().map((_, index) => `/page/${index + 1}`);

const overflow = () => getCurrentPage() === getMaxPages();

const parseDate = date => dayjs(date).format('DD/MM/YYYY');

const parseChineseDate = date => dayjs(date).format('DD/MM/YYYY');

const parseDateToDateTime = date => dayjs(date).format('YYYY, MMM DD | HH:mm');

const parseDateToMonth = date => dayjs(date).format('MMM, YYYY');

const getDuration = (start, end) => {
  if (!end) return 'Working';
  const dtStart = dayjs(start);
  const dtEnd = dayjs(end);
  const diffHrs = dtEnd.diff(dtStart, 'hour');
  if (diffHrs <= 24) return `${diffHrs} hour${diffHrs > 1 ? 's' : ''}`;
  const diffDays = dtEnd.diff(dtStart, 'day');
  if (diffDays <= 30) return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  const diffMonths = dtEnd.diff(dtStart, 'month');
  return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
}

export {
  isBrowser,
  getCurrentPage,
  getMaxPages,
  getPages,
  overflow,
  parseDate,
  parseChineseDate,
  parseDateToDateTime,
  getPath,
  getPageNumber,
  getDuration,
  parseDateToMonth,
};
