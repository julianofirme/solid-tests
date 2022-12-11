import { Appointment } from './../../entites/appointments';
export class InMemoryAppointmentsRepository {
  public items: Appointment[] = [];
  
  async create(appointments: Appointment): Promise<void> {
    this.items.push(appointments);
  }
}