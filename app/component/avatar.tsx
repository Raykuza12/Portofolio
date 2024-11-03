import React from "react";
import me from "../public/me.jpg";
import Image from "next/image";

const avatar = () => {
  return (
    <div className="avatar pt-10">
      <div className="w-40 rounded-full border-8 border-primary">
        <Image src={me} alt="me" />
      </div>
    </div>
  );
};

export default avatar;
