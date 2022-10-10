import format from 'date-fns/format'

export const formatDateToString = (
  date: Date,
  formatter: string = 'dd-MM-yyyy'
): string => {
  try {
    return format(date, formatter)
  } catch {
    return '-'
  }
}
