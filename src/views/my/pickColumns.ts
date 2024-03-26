export interface FormColumns {
  text: string
  value: number
}

export const genderColumns: FormColumns[] = [
  { text: 'common.Gender.male', value: 0 },
  { text: 'common.Gender.female', value: 1 },
]

export const industryColumns: FormColumns[] = [
  { text: 'common.Industry.student', value: 0 },
  { text: 'common.Industry.worker', value: 1 },
  { text: 'common.Industry.education', value: 2 },
  { text: 'common.Industry.finance', value: 3 },
  { text: 'common.Industry.health', value: 4 },
  { text: 'common.Industry.life', value: 5 },
  { text: 'common.Industry.tech', value: 6 },
  { text: 'common.Industry.IT', value: 7 },
  { text: 'common.Industry.manager', value: 8 },
  { text: 'common.Industry.salesman', value: 9 },
  { text: 'common.Industry.other', value: 10 },
]
