import { start } from 'repl'
import { expect, test } from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Appointment } from './appointments'

test('should create an appointment', () => {
  const startsAt = getFutureDate('2022-01-01')
  const endsAt = getFutureDate('2022-01-02')

  const appointment = new Appointment({
    customer: 'Juliano',
    startsAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toBe('Juliano')
})

test('cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-01-02')
  const endsAt = getFutureDate('2022-01-01')

  expect(() => {
    return new Appointment({
      customer: 'Juliano',
      startsAt,
      endsAt,
    })
  }).toThrow()
})

test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'Juliano',
      startsAt,
      endsAt,
    })
  }).toThrow()
})