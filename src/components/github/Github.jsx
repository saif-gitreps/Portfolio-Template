import { useLoaderData } from "react-router-dom";

export default function Github() {
   const data = useLoaderData();
   return (
      <div className="flex justify-center flex-col md:flex-row items-center py-10">
         <div className="card m-10 ">
            <div className="card__img bg-blue-800"></div>
            <p className="card__title text-3xl font-semibold">Project</p>
            <div className="card__descr-wrapper flex-col justify-between h-full">
               <p className="card__descr text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                  blanditiis nemo fugit autem possimus, magnam consequatur sint esse.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
                  deleniti labore beatae reiciendis iusto non eaque. Modi nisi odit,
                  assumenda quas, temporibus nam magni aliquam facilis rem illum sapiente?
                  Facilis!
               </p>
               <div className="card__links text-xl">
                  <div className="flex flex-row">
                     <img src="src/assets/icons8-github-96.png" className="w-7 h-7" />
                     <a
                        className="link text-blue-800 font-semibold flex items-center"
                        href="#"
                     >
                        Source Code
                     </a>
                  </div>
                  <div>
                     <a className="link text-blue-800 font-semibold" href="#">
                        Preview
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
