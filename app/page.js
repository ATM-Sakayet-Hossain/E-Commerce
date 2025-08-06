import DealOfDay from "./components/DealOfTheDay/DealOfDay";
import Banner from "./components/Home/Banner";
import BestSell from "./components/Home/BestSell";
import Category from "./components/Home/Category";
import PopularProducts from "./components/Home/PopularProducts";
import ProductBanner from "./components/Home/ProductBanner";
import TrendyProducts from "./components/Home/TrendyProducts";
import FeaturesGrid from "./components/utils/FeaturesGrid";
import Subscribe from "./components/utils/Subscribe";

const page = () => {
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
  )
}

export default page