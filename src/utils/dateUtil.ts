import { format } from 'date-fns'

const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD '

export function formatToDateTime(date: number | Date, formatStr = DATE_TIME_FORMAT): string {
  return format(date, formatStr)
}

export function formatToDate(date: number | Date, formatStr = DATE_FORMAT): string {
  return format(date, formatStr)
}
