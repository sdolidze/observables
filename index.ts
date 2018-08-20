import {
  getLoanByCustomerId,
  getLoanAndCustomerByCustomerId,
} from './app/api/loan.api';

getLoanByCustomerId(1).subscribe(loan => {
  console.log(loan);
});

getLoanAndCustomerByCustomerId(2).subscribe(([customer, loan]) => {
  console.log(customer, loan);
});

getLoanByCustomerId(20).subscribe(loan => {
  console.log(loan);
});
