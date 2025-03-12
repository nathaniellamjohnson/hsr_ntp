import React, { useState, useEffect } from "react";
import ntpImages from "./Images"

const RotatingImage = () => {
    const [selectedPicture, setSelectedPicture] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
          const randomIndex = Math.floor(Math.random() * ntpImages.length);
          const image = await ntpImages[randomIndex];
          const imageUrl = image.default; // Access the default property
          setSelectedPicture(imageUrl);
        };
    
        fetchImage();
      }, []);

      return <div className="flex justify-center"> <img className="h-[50vh] grayscale-[60%] w-auto contrast-100 " src={selectedPicture} alt="Rotating" /> </div>;
};

export default RotatingImage;