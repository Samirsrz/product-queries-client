import { useLoaderData } from "react-router-dom";
import QueryCards from "./QueryCards";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";
import { setItem } from "localforage";

const Queries = () => {

   // const query = useLoaderData();

    const [sortItem, setSortItem] = useState([]);
    const[searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');


   //  console.log('query is coming', query);


   const handleSort = ( )=>{
      const result =  [...sortItem].sort((a, b)=>{
         const dateA = new Date(a.dateTime);
         const dateB = new Date(b.dateTime);
         return dateB - dateA;

       
      })
      setSortItem(result);
      console.log('result coming',result);
   }

      console.log('sorted Item ishere',sortItem);

   const handleSearch = (e) => {
         e.preventDefault();
         // setSearchText(searchText);
         setSearch(searchText);

   }


   useEffect(() => {

      fetch(`http://localhost:5000/addQueries1?searchText=${search}`)
      .then(res => res.json())
      .then(data => {
              setSortItem(data);
      })
     
   }, [search])


   useEffect(() => {

      handleSort();



   }, [])

    console.log(sortItem);



    console.log(search);


   return (

   <div>
     
     
     <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg   focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 w-full  text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Product types to know Query- Laptops, speaker etc...'
                aria-label='Enter Home Services'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>






        <div className="flex mt-20 flex-col gap-7">

          {/* { 
          sortItem != [] ?  sortItem?.map(query => <SingleCard key={query._id}
            query={query}
            ></SingleCard>) :

          ''

          } */}


           {
            sortItem?.map(query => <SingleCard key={query._id}
            query={query}
            ></SingleCard>)
           }

        </div>

        </div>
    );
};

export default Queries;