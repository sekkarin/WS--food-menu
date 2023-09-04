import { useState } from "react";
import "./App.css";
import { IFood } from "./types/data-food";
import foodJson from "./assets/data.json";
function App() {
  const foodData: IFood[] = foodJson;
  const [foods, setFoods] = useState<IFood[]>(foodData);
  const categorySet = new Set(foodData.map(({ category }) => category));
  const results: string[] = [];
  categorySet.forEach((value) => {
    results.push(value);
  });
  const filerCategory = (category: string) => {
    if (category == "all" || category == "All") {
      setFoods(foodData)
    }else{
      setFoods(foodData)
      setFoods((prev) => prev.filter((item) => item.category === category));
    }
    
  };

  return (
    <section className="bg-mainPrimary h-screen">
      <div className="container mx-auto pt-12 ">
        <div className="flex justify-center flex-col align-middle  bg-white  gap-3 ">
          <h6 className="text-2xl p-3 underline text-center text-yellow-500">Our Menu </h6>
          {foods.length < 1 && (
            <p className="text-center text-neutral-400">No Data</p>
          )}
          <div className="flex flex-row justify-center gap-2">
            <button
              className="bg-white hover:text-yellow-300"
              onClick={() => {
                filerCategory("All");
              }}
            >
              All
            </button>
            {results.map((item) => (
              <button
                className="bg-white hover:text-yellow-300"
                onClick={() => {
                  filerCategory(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4   ">
            {foods.length > 0 &&
              foods.map(({ id, desc, img, price, title }) => (
                <div key={id} className=" flex flex-row p-2 drop-shadow-lg bg-white rounded-md">
                  <img
                    src={img}
                    alt={title}
                    className="rounded-full w-60 h-60"
                  />
                  <div className="flex-col flex-1 px-5 divide-y divide-blue-200">
                    <div className="flex flex-row justify-between pm-2  ">
                      <h1 className="font-semibold">{title}</h1>
                      <h1 className="font-semibold text-yellow-500">
                        $ {price}
                      </h1>
                      <hr className="bg-black" />
                    </div>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
