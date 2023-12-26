"use client"
import CompPagination from "./components/CompPagination";

export default function Home() {
 return <CompPagination itemCount={100} pageSize={10} currentPage={2}></CompPagination>
}