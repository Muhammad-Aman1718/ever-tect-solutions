import React from "react";
import OurCommunityCard from "./OurCommunityCard";

const OurCommunity = () => {
  return (
    <div>
      <div>
        <h1>Manage your entire community in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div>
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
      </div>
    </div>
  );
};

export default OurCommunity;
