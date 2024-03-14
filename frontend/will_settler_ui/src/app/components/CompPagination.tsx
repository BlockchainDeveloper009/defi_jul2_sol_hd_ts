import { Button, Center, Flex, Text } from '@mantine/core';
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { useSearchParams } from 'react-router-dom';
interface Props {
    itemCount: number,
    pageSize: number,
    currentPage: number
}
//: React.FC<ComponentBProps> = ({ _willId }) => 
const CompPagination: React.FC<Props> = ({itemCount, pageSize, currentPage}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount/pageSize);
    if(pageCount <=1) return null;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push('?' + params.toString());
    }
  return (
    <Flex align='center' gap={2}>
        <Text>Page {currentPage} of {pageCount}</Text>
        <Button  color='gray' 
        variant='light' 
        disabled={currentPage === 1} 
        onClick={()=> {changePage(1)}}>
            <DoubleArrowLeftIcon/>
        </Button>
        <Button  color='gray' variant='light' 
        disabled={currentPage === 1}
        onClick={()=> {changePage(currentPage-1)}}>
            <ChevronLeftIcon/>
        </Button>
        <Button  color='gray' variant='light' 
        disabled={currentPage === pageCount}
        onClick={()=>{changePage(currentPage+1)}}>
            <ChevronRightIcon/>
        </Button>
        <Button  color='gray' variant='light' 
        disabled={currentPage === 1}
        onClick={()=> { changePage(currentPage) } }>
            <DoubleArrowRightIcon/>
        </Button>
    </Flex>
  );
}

export default CompPagination