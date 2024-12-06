//  import React from 'react'
// //  import classes from './Category/CategoryCard'

// function CategoryCard({data}) {
//   return (
//     <div>

//       <a href={data.Link||'#'}>
          
//             <h2>{data.title}</h2>
//              <span/> 
//                <img src={data.imgLink}alt={data.imgAlt||'catagory image'}/>
//                   <p className='shop now'>Shop Now</p>
//                    </a>
//                     </div>
//   );
// }

// export default CategoryCard


// import React from 'react'

// function CategoryCard({data}) {
//   return (
//     <div>
//       <a href=''>
//         <sapn>
//        <h2>{data.title}</h2>
//      </sapn>
//      <img src={data.imgLink} alt=''/>
//      <p>shop now</p>
//     </a>
//       </div>
//   )
// }
// export default CategoryCard



import React from "react";
import classes from "./Category.module.css";


function CategoryCard({ data }) {

  return (
    <div className={classes.category}>
      <a href="/category">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt="image" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
