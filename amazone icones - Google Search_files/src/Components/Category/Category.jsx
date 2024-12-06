// import React from "react";
// import { categoryFullInfos } from "../Category/categoryFullInfos";
// import CategoryCard from "./CategoryCard";
// // import classes from './Category.modules.css'; // Correct the typo here

// function Category() {
//   return (
//     <section>
//       {categoryFullInfos && categoryFullInfos.length > 0 ? (
//         categoryFullInfos.map((fullinfos) => {
//           return <CategoryCard data={fullinfos} key={fullinfos.id} />;
//         })
//       ) : (
//         <p>No categories available</p>
//       )}
//     </section>
//   );
// }

// export default Category;

// import React from "react";
// import { CategoryFull } from "./categoryFullInfos";
// import CategoryCard from "./CategoryCard";

// function Category() {
//   return (
//     <section>
//       {CategoryFull?.map((infos, i) => (
//         <CategoryCard key={i} data={infos} />
//       ))}
//     </section>
//   );
// }

// export default Category;


import React from "react";
import { catagoryData } from "./categoryFullInfos";
import CatagoryCard from "./CategoryCard";
import classes from "./Category.module.css";


function Catagory() {
  return (
    <section className={classes.category_container}>
      {catagoryData.map((infos, i) => (
        <CatagoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Catagory;
