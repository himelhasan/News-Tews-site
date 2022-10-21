import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const dragonNewsHome = useLoaderData();
  return <div>This is Home Component {dragonNewsHome.length}</div>;
};

export default Home;
