import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
//step 1 contxet creat
 export const  AppContext=createContext();

  export  function AppContextProvider({children}){
        const [loading ,setLoading]=useState(false);
        const [posts,setPosts]=useState([]);
        const [page,setPage]=useState(2);
        const [totalPages,setTotalPages]=useState(null);
     //data filling pending 
     async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log("printing the final URL");
        console.log(url);       
         try {
            const result =await fetch(url);
            const data =await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.setTotalPages)
        } catch (error) {
             console.log("Error in fetch in data");
             setPage(1);
             setPosts([]);
             setTotalPages(null);
        }
        setLoading(false);
     }

     function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
     }
        const value={
            posts,
            setPosts,
            loading,
            setLoading,
            page,
            setPage,
            totalPages,
            setTotalPages,
            fetchBlogPosts,
            handlePageChange,


        };
        return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
 }