import { FC, useState } from 'react';
import LoadingIcon from 'public/icons/loading.svg';
import { Text } from './Text';
import { Input } from './Input';
import { Box } from './Box';

export const NewsletterSignup: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const submit = async (e, ref) => {
    setSubmitting(true);
    setErrorMessage('');
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: ref.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setSubmitting(false);

    const { error } = await res.json();
    if (error) {
      setErrorMessage(error.replace(/(^\["|"]$)/gi, ''));
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      <div className="signup">
        <Text as="h2" lineHeight={1.25} fontWeight={700} fontSize={[3, 4]} mb={2}>
          Subscribe to my newsletter
        </Text>
        <Text color="--color-text" lineHeight={1.5}>
          Get emails from me about web development, tech, and early access to new articles.
        </Text>
        <Box mt={3} color="--color-text" lineHeight={1.5}>
          {success ? (
            <Text color="--color-green" fontWeight={600}>
              Thank you for subscribing, you'll receive a welcome email shortly.
            </Text>
          ) : (
            <Input
              placeholder="Your email address"
              button={submitting ? <LoadingIcon style={{ fontSize: `28px` }} /> : `Subscribe`}
              secondary
              type="email"
              autoComplete="on"
              submit={submit}
              submitting={submitting}
            />
          )}
          {errorMessage ? (
            <Text mt={2} color="--color-warning" fontWeight={600}>
              {errorMessage}
            </Text>
          ) : null}
        </Box>
      </div>
      <style jsx>{`
        .signup {
          padding: 3.2rem;
          border-radius: 0.4rem;
          border: 1px solid var(--color-card-highlight-border);
          background-color: var(--color-card-highlight);
        }
      `}</style>
    </>
  );
};


