import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';

const customers: Record<string, Customer> = {
  1: {
    id: 1,
    name: 'Sandro Dolidze',
    loanId: 17,
  },
  2: {
    id: 1,
    name: 'Petre Petashvili',
    loanId: 20,
  },
};

export function getCustomerById(id: number): Observable<Customer> {
  return of(customers[id] || null);
}
