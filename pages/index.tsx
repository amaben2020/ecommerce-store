import MainMenu from "@/components/sections/main-menu/main-menu";
import Product from "@/components/sections/main-menu/types";

import Layout from "@/layout/layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ products }: Product) => {
  return (
    <Layout title="Home | Welcome to Algomachine007 store">
      <ToastContainer autoClose={2000} position="top-center" />

      <MainMenu products={products} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:4000/products");

  return {
    props: {
      products: data,
    },
  };
};
