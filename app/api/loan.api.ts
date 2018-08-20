import { combineLatest, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Customer } from '../models/customer.model';
import { Loan } from '../models/loan.model';
import { getCustomerById } from './customer.api';

const loans: Record<string, Loan> = {
  17: {
    id: 17,
    principal: 500,
    interest: 200,
  },
  20: {
    id: 20,
    principal: 1000,
    interest: 150,
  },
};

export function getLoanById(id: number): Observable<Loan> {
  return of(loans[id] || null);
}

export function getLoanByCustomerId(id: number): Observable<Loan> {
  return getCustomerById(id).pipe(
    flatMap(customer => {
      if (customer === null) {
        return of(null);
      } else {
        return getLoanById(customer.loanId);
      }
    })
  );
}

export function getLoanAndCustomerByCustomerId(
  id: number
): Observable<[Loan, Customer]> {
  return getCustomerById(id).pipe(
    flatMap(customer => {
      if (customer === null) {
        return of([null, null]);
      } else {
        const customer$ = of(customer);
        const loan$ = getLoanById(customer.loanId);
        return combineLatest(customer$, loan$);
      }
    })
  );
}
