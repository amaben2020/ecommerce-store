import MainMenu from "@/components/sections/main-menu/main-menu";
import ProductProps from "@/components/sections/main-menu/types";

import Layout from "@/layout/layout";
import axios from "axios";

const Home = (products: ProductProps[]) => {
  return (
    <Layout title="Home | Welcome to Algomachine007 store">
      <MainMenu {...products} />
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
