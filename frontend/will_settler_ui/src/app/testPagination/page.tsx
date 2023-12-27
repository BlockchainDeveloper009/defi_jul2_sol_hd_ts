"use client"
import CompPagination from "../components/CompPagination";

interface Props {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

export default function Home({ itemCount, pageSize, currentPage}: Props) {
 return <CompPagination itemCount={100} pageSize={10} currentPage={2}></CompPagination>
}