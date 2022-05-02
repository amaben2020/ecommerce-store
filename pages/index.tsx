import "react-toastify/dist/ReactToastify.css";

import Layout from "@/layout/layout";
import MainMenu from "@/components/sections/main-menu/main-menu";
import Product from "@/components/sections/main-menu/types";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Home = ({ products }: Product) => {
  return (
    <Layout title="Home | Welcome to Algomachine007 store">
      <ToastContainer autoClose={2000} position="top-center" />

      <MainMenu products={products} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:4000/products");

  return {
    props: {
      products: data,
    },
  };
};
