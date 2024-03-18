import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ data, color }) => {
   return (
      <div className="card m-8 self-center">
         <div className={`card__img ${color}`}></div>
         <p className="card__title text-3xl font-semibold"> {data.name} </p>
         <div className="card__descr-wrapper flex-col justify-between h-full">
            <p className="card__descr text-xl">
               {data.description}
               {/* <br />
               <span className="text-blue-800 font-semibold">Language: </span>
               {data.language} */}
            </p>
            <div className="card__links text-xl">
               <div className="flex flex-row">
                  <img src="src/assets/icons8-github-96.png" className="w-7 h-7" />
                  <Link
                     className="link text-blue-800 font-semibold flex items-center"
                     to={data.html_url}
                  >
                     Source Code
                  </Link>
               </div>
               <div>
                  <Link className="link text-blue-800 font-semibold" to={data.homepage}>
                     Preview
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default function Github() {
   const data = useLoaderData();
   const bgColor = [
      "bg-blue-800",
      "bg-red-800",
      "bg-yellow-800",
      "bg-green-800",
      "bg-indigo-800",
      "bg-slate-800",
      "bg-pink-800",
      "bg-orange-800",
   ];

   return (
      <div className="flex justify-center w-screen m-auto">
         <div className="flex justify-center flex-col md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center py-10">
            {data.map((repo, index) => {
               return <Card key={index} data={repo} color={bgColor[index % 8]} />;
            })}
         </div>
      </div>
   );
}
