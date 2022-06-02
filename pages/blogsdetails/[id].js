import React from 'react';
import { useRouter } from "next/router";
const BlogsDetails = () => {
 const router = useRouter();
   const { id } = router.query;
   console.log(router.query)
   return (
      <div>
         <h1>This is blogs details</h1>
         <p>Blog Id: {id }</p>
      </div>
   );
};

export default BlogsDetails;