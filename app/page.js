import DealOfDay from "./components/DealOfTheDay/DealOfDay";
import Banner from "./components/Home/Banner";
import BestSell from "./components/Home/BestSell";
import Category from "./components/Home/Category";
import PopularProducts from "./components/Home/PopularProducts";
import ProductBanner from "./components/Home/ProductBanner";

export default async function Home() {
   
  return (
   <>
   <Banner/>
   <Category/>
   <ProductBanner/>
   <PopularProducts/>
   <BestSell/>
   <DealOfDay/>
   </>
  );
}
