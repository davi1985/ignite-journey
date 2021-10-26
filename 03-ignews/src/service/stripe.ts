import Stripe from "stripe";
import { version } from "../../package.json";

const STRIPE_KEY = process.env.STRIPE_API_KEY as string;

export const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version,
  },
});
