import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)

const sumDigits = (string) => {
  let result = 0;
  for(let i = 0; i < length(string); i++) {
    result += Number(string[i]);
      }
  return result;
};

const isHappyTicket = (ticket) => {

  const ticketStr = String(ticket);

  const ticketStrBegin = substr(ticketStr, 0, 3);

  const ticketStrEnd = substr(ticketStr, 3, 3);

  return sumDigits(ticketStrBegin) === sumDigits(ticketStrEnd);
};

export default isHappyTicket;

// END
