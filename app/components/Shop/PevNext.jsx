import React from "react";

const PevNext = () => {
    const [skip, setSkip] = useState(0);
      const [limit, setLimit] = useState(30);
      const [data, setData] = useState({ products: [], total: 0 });

       useEffect(() => {
          const fetchData = async () => {
            const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const json = await res.json();
            setData(json);
          };
          fetchData();
        }, [skip, limit]);
        
  return (
    <>
      <button
        className="bg-brand text-white font-bold text-sm md:text-base px-4 py-2 rounded mt-6"
        onClick={() => setSkip(skip - limit)}
        disabled={skip - limit >= data.total}
      >
        {skip + limit < data.total
          ? `Prives (${data.total + skip + limit} left)`
          : "No more products"}
      </button>
      <button
        className="bg-brand text-white font-bold text-sm md:text-base px-4 py-2 rounded mt-6"
        onClick={() => setSkip(skip + limit)}
        disabled={skip + limit >= data.total}
      >
        {skip + limit < data.total
          ? `Next (${data.total - skip - limit} left)`
          : "No more products"}
      </button>
    </>
  );
};

export default PevNext;
