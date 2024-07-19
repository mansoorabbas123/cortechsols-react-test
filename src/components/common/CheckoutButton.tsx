import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../context/CartContext";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = () => {
  const { items } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js failed to load.");
      return;
    }
    const lineItems = items.map((item) => ({
      price: "price_1Pe5gRSGiQVxY23oOjKY5bRE",
      quantity: item.quantity,
    }));

    const session = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cancel",
    });

    if (session.error) {
      console.error(session.error.message);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!stripePromise}
      className="rounded bg-primary text-foreground w-full hover:opacity-80 transition-all"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
