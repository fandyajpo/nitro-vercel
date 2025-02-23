export const useTime = {
  useSecond: (seconds: number) => generateTime(seconds * 1000),
  useMinute: (minutes: number) => generateTime(minutes * 60 * 1000),
  useHour: (hours: number) => generateTime(hours * 60 * 60 * 1000),
  useDay: (days: number) => generateTime(days * 24 * 60 * 60 * 1000),
  useWeek: (weeks: number) => generateTime(weeks * 7 * 24 * 60 * 60 * 1000),
  useMonth: (months: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return formatTime(date);
  },
  useYear: (years: number) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + years);
    return formatTime(date);
  },
  useDecade: (decades: number) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + decades * 10);
    return formatTime(date);
  },
  useCentury: (centuries: number) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + centuries * 100);
    return formatTime(date);
  },
  useMillisecond: (milliseconds: number) => generateTime(milliseconds),
  useNow: () => formatTime(new Date()),
  useTomorrow: () => generateTime(24 * 60 * 60 * 1000),
  useYesterday: () => generateTime(-24 * 60 * 60 * 1000),
};

function generateTime(offset: number) {
  const date = new Date(Date.now() + offset);
  return formatTime(date);
}

function formatTime(date: Date) {
  return {
    date: date.toISOString(),
    seconds: Math.floor(date.getTime() / 1000),
  };
}
