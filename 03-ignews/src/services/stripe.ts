import Stripe from 'stripe';
import {version} from '../../package.json'
import '../../.env.local';


export const stripe = new Stripe(
  process.env.STRIPE_API_KEY, 
  {
    apiVersion: '2022-03-18',
    appInfo: {
      name: 'Ignews', 
      version
    }
  }
);