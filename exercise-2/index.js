const fs = require('fs')
const Stripe = require('stripe');
const STRIPE_TEST_SECRET_KEY = 'rk_test_51EDa6GIrkMUcWfFwXon9vsJYpTqX2eTqbINAUf4fZC7ivToWv59cAPoHdYhmszwL9ZKWJtUUbaCcHtpjl6rWlXLP00C1dcAoUR'
const stripe = Stripe(STRIPE_TEST_SECRET_KEY);

const handler = async () => {
  let finalCustomers = []
  // add here the code
  // filter the customers in Spain
  // for each customer with country === Spain, create a Stripe customer
  // push into finalCustomers the stripe customers with email and id as properties.
  // write finalCustomers array into final-customers.json using fs
  /* 
    finalCustomers array should look like:
    finalCustomers = [{
        email: test@test.com
        customerId: 1d833d-12390sa-9asd0a2-asdas
      },
      {
        email: test@test.com
        customerId: 1d833d-12390sa-9asd0a2-asdas
      }
    }] 
  */
} 