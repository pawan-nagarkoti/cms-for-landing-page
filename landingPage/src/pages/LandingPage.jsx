import React from "react";
import { Header, Banner, HeadingOne, HeadingTwo, Galllery, Amenities, Footer, Loading } from "../components";
import useFetch from "../services/UseFetch";

export default function landingPage() {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div>
        <h1>Posts</h1>
        <ul>
          {data &&
            data.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
        </ul>
      </div>
      <Header />
      <Banner />
      <HeadingOne />
      <HeadingTwo />
      <Galllery />
      <Amenities />
      <Footer />
    </>
  );
}
