import { describe, expect, it } from "vitest";
import { Appointment } from "../entites/appointments";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointments";

describe('Create Appointment', () => {
  it('should create a new Appointment', () => {
    const createAppointment = new CreateAppointment()
    
    const startsAt = getFutureDate('2022-01-01')
    const endsAt = getFutureDate('2022-01-02')

    expect(createAppointment.execute({
      customer: 'Juliano',
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment)
  })
})