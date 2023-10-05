import readingTime from "reading-time";
import { DateTime, Settings } from "luxon";


export const getReadingTime = (text: string) => {
    return readingTime(text).text;
};

export const getRelativeDate = (date: string) => {
    return DateTime.fromISO(date).toRelative({ locale: 'en-gb' });
};

