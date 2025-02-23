export default defineEventHandler((event) => {
  const time = useTime;

  return {
    now: time.useNow(),
    nextSecond: time.useSecond(1),
    nextMinute: time.useMinute(1),
    nextHour: time.useHour(1),
    nextDay: time.useDay(1),
    nextWeek: time.useWeek(1),
    nextMonth: time.useMonth(1),
    nextYear: time.useYear(1),
    nextDecade: time.useDecade(1),
    nextCentury: time.useCentury(1),
    nextMillisecond: time.useMillisecond(1),
    tomorrow: time.useTomorrow(),
    yesterday: time.useYesterday(),
  };
});
