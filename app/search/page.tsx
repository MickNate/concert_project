"use client";

import {useActionState} from "react";
import {searchRes} from "@/app/search/searchRes";

export default function Search(){
    const [error, action, isLoading] = useActionState(searchRes, "");

   return(
       <body>
       <div>
           <p>Is there a particular artist you want to see if someone else has seen? Search below!</p>
       </div>
       <div>
           <form action={action}>
               <input type="text" id="value" name="value"/><br/>
               <button>{isLoading ? "Searching..." : "Search"}</button>
               {error && <p>{error}</p>}
           </form>
       </div>
       </body>
   )

}