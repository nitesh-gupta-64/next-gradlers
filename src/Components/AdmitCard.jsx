import React from "react";

const AdmitCard = ({ admit }) => {
  return (
    <div>
      <img src={admit.Image} alt="admit" />
      <p>{admit.Name}</p>
    </div>
  );
};

export default AdmitCard;
