import { FC } from 'react';
import Text from './Text';
import Input from './Input';
import Box from './Box';

type NewsletterSignupProps = {};

export const NewsletterSignup: FC<NewsletterSignupProps> = ({}) => {
  
  const submit = (e, ref) => {
    console.log(ref.current.value);
  };
  
  return <>
    <div className="signup">
      <Text as="h2" lineHeight={1.25} fontWeight={700} fontSize={[3, 4]} mb={2}>
        Subscribe to the newsletter
      </Text>
      <Text color={'--color-text'} lineHeight={1.5}>
        Get emails from me about web development, tech, and early access to new articles.
      </Text>
      <Box mt={3}>
        <Input placeholder="Your email address" button="Subscribe" secondary type="email" autoComplete="on" submit={submit} />
      </Box>
    </div>
    <style jsx>{`
      .signup {
        padding: 2.4rem;
        border-radius: 0.4rem;
        border: 1px solid #90cdf4;
        background-color: #ebf8ff;
      }
    `}</style>
  </>;
};

export default NewsletterSignup;