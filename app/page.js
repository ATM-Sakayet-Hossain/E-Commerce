import DealOfDay from "./components/DealOfTheDay/DealOfDay";
import Banner from "./components/Home/Banner";
import BestSell from "./components/Home/BestSell";
import Category from "./components/Home/Category";
import FeaturesGrid from "./components/Home/FeaturesGrid";
import PopularProducts from "./components/Home/PopularProducts";
import ProductBanner from "./components/Home/ProductBanner";
import TrendyProducts from "./components/Home/TrendyProducts";
import Subscribe from "./components/utils/Subscribe";

export default async function page() {
   
  return (
   <>
   <Banner/>
   <Category/>
   <ProductBanner/>
   <PopularProducts/>
   <BestSell/>
   <DealOfDay/>
   <TrendyProducts />
   <Subscribe />
   <FeaturesGrid />
   </>
  );
}
