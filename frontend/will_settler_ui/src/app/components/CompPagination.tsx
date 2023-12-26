import { Button, Center, Flex, Text } from '@mantine/core';
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react'
interface Props {
    itemCount: number,
    pageSize: number,
    currentPage: number
}
const CompPagination = ({itemCount, pageSize, currentPage}: Props) => {
    const pageCount = Math.ceil(itemCount/pageSize);
    if(pageCount <=1) return null;

  return (
    <Flex align='center' gap={2}>
        <Text>Page {currentPage} of {pageCount}</Text>
        <Button  color='gray' variant='light' disabled={currentPage === 1}>
            <DoubleArrowLeftIcon/>
        </Button>
        <Button  color='gray' variant='light' disabled={currentPage === 1}>
            <ChevronLeftIcon/>
        </Button>
        <Button  color='gray' variant='light' disabled={currentPage === pageCount}>
            <ChevronRightIcon/>
        </Button>
        <Button  color='gray' variant='light' disabled={currentPage === 1}>
            <DoubleArrowRightIcon/>
        </Button>
    </Flex>
  );
}

export default CompPagination