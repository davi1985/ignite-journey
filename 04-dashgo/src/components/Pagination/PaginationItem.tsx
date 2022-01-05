import { Button } from '@chakra-ui/react'

type PaginationItemProps = {
  number: number
  isCurrent?: boolean
}

export const PaginationItem = ({
  isCurrent = false,
  number,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      bg="gray.700"
      _hover={{
        bgColor: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}
