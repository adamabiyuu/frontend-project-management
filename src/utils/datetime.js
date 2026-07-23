import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const TZ_ASIA_JAKARTA = 'Asia/Jakarta';

const datetime = {
  format(dateValue, format = 'DD/MM/YYYY') {
    return dayjs(dateValue).tz(TZ_ASIA_JAKARTA).format(format);
  },
  getIsoString(dateValue) {
    return dayjs(dateValue).tz(TZ_ASIA_JAKARTA).toISOString();
  },
};

export default datetime;
// import dayjs from 'dayjs';

// const datetime = {
//   format(dateString, format = 'DD/MM/YYYY') {
//     return dayjs(dateString).format(format);
//   },
// };

// export default datetime;
