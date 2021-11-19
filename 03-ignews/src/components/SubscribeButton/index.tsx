import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';
import styles from './styles.module.scss';

export const SubscribeButton = () => {
  const [session] = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');

      return;
    }

    try {
      const response = await api.post('/subscribe');
      console.log(response);
      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe?.redirectToCheckout({ sessionId });
    } catch ({ message }) {
      alert(message);
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};
