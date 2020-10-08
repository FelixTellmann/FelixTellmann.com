import { FC } from 'react'
import { Text } from './Text'
import { Box } from './Box'
import { Avatar } from './Avatar'

type ArticleHeadingProps = {
  title: string
  authorAvatarUrl: string
  author: string
  publishedAt: string
  readingTime: {
    text: string
    time: number
    words: number
    minutes: number
  }
  views: string
}

export const ArticleHeading: FC<ArticleHeadingProps> = ({ title, author, authorAvatarUrl, publishedAt, readingTime, views }) => {
  return (
    <>
      {title && (
        <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={3}>
          {title}
        </Text>
      )}
      <Box d="flex" direction={['column', 'row']} mb={4}>
        <Box d="flex" align="center" mt={2}>
          {authorAvatarUrl && <Avatar src={authorAvatarUrl} alt={author || ''} initials={author} size={24} />}
          {(author || publishedAt) && (
            <Text as="p" fontSize={1} color="--color-text" ml={2} lineHeight={1.6}>
              {author}
              {author && publishedAt ? ' / ' : ''}
              {publishedAt}
            </Text>
          )}
        </Box>
        <Box d="flex" align="center" justify={['flex-start', 'flex-end']} flex={1} mt={2}>
          <Text as="p" fontSize={1} color="--color-subdued" lineHeight={1.6}>
            {readingTime ? readingTime.text : ''}
            {views || ''}
          </Text>
        </Box>
      </Box>
    </>
  )
}
