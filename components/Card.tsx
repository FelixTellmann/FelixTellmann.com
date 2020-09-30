import { FC } from 'react';
import Text from './Text';
import Box from './Box';

type CardProps = {
  icon?: JSX.Element
  title: string
  description: string | JSX.Element
  hover?: boolean
};

export const Card: FC<CardProps> = ({ icon, title, description, hover }) => {
  return <>
    <div className="card">
      <Box fontSize={32} ml={2} mr={3} d={'flex'} align={'center'}>{icon}</Box>
      <div className="card-content">
        <Text as="h3" fontSize={18} fontWeight={700} lineHeight={1.25} letterSpacing={`-0.05em`} mb={2}>{title}</Text>
        <Text as="p" lineHeight={1.3} color={`--color-text`}>{description}</Text>
      </div>
    </div>
    <style jsx>{`
      .card {
        display: flex;
        align-items: center;
        padding: 1.6rem;
        border: 1px solid var(--color-border);
        border-radius: 0.4rem;
        margin-bottom: 1.6rem;
        transition: box-shadow 0.15s ease-out;
        &:hover, &:focus, &:active {
            ${hover ? `box-shadow: 0px 4px 20px var(--color-border-shadow)` : ''}
        }
      }
    `}</style>
  </>;
};

export default Card;