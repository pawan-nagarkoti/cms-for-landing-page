import React from "react";
import { Header, Banner, HeadingOne, HeadingTwo, Galllery, Amenities, Footer, Loading } from "../components";
import useFetch from "../services/UseFetch";
import { URL, LANDINGPAGE_ID } from "../services/constant";

export default function landingPage() {
  const { data, error, loading } = useFetch(URL, LANDINGPAGE_ID);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header logo={data?.data?.logo} menuItems={data?.data?.headerItem} />
      <Banner />
      <HeadingOne />
      <HeadingTwo />
      <Galllery />
      <Amenities />
      <Footer />
    </>
  );
}
