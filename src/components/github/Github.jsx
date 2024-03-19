import { useLoaderData } from "react-router-dom";
import Card from "./RepoCard";

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
