
import MainMenu from "@/components/sections/main-menu/main-menu";
import Product from "@/components/sections/main-menu/types";
import Search from "@/components/sections/search/search";
import Layout from "@/layout/layout";
import { getProducts } from "@/services/getProducts";
import capitalizeFirstWord from "@/utils/capitalizeFirstWord";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = ({ products }: Product) => {
  return (
    <Layout title="Home | Welcome to Algomachine007 store">
      <ToastContainer autoClose={2000} position="top-center" />
      <Search searchHandler={capitalizeFirstWord} />
      <MainMenu products={products} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await getProducts();

  return {
    props: {
      products: data,
    },
  };
};
