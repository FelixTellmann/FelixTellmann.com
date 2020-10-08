import { FC } from 'react';
import { Text } from 'components';

export const Index: FC = () => {
  return (
    <>
      <Text as="h1" fontSize={8} fontWeight={700} letterSpacing="-0.05em" p={4}>
        Photos Page
      </Text>
    </>
  );
};

export default Index;
