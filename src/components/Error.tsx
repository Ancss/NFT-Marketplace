import React, { useContext } from 'react';
import Image from 'next/image';
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';
import images from '@/img';  

const Error: React.FC = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext)!;

  return (
    <div className="fixed inset-0 bg-black bg-blend-overlay z-50 cursor-pointer" onClick={() => setOpenError(false)}>
      <div className="absolute top-1/2 left-1/2 bg-main-bg p-8 rounded-lg shadow-custom text-center w-2/5 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            className=" object-cover"
          />
          <p className="text-1.3rem text-icons">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
