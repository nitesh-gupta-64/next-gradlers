import EventHome from "@/Components/EventHome/EventHome";
import React from "react";
import Image from "next/image";
import eh from "../../../public/assets/images/eh.png";

const page = () => {
  return (
    <div className="events">
      <Image style={{height: 'auto', width: '100%'}} src={eh} />
      <EventHome />
    </div>
  );
};

export default page;
