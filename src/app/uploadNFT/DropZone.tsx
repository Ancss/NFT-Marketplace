import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TNFTMarketplaceContextType } from '@/Context/NFTMarketplaceContext';
import images from '@/img'
type TDropZone = {
  title: string,
  heading: string,
  subHeading: string,
  name: string,
  website: string,
  description: string,
  royalties: string,
  fileSize: string,
  category: string,
  properties: string,
  // uploadToIPFS: string,
  uploadToPinata: TNFTMarketplaceContextType['uploadToPinata'],
  setImage: Dispatch<SetStateAction<string>>,
}

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  // uploadToIPFS,
  uploadToPinata,
  setImage,
}: TDropZone) => {
  const [fileUrl, setFileUrl] = useState('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Upload logic using either uploadToIPFS or uploadToPinata, whichever is implemented
    const url = await uploadToPinata(acceptedFiles[0]); 
    setFileUrl(url!);
    setImage(url!);
  }, [setImage, uploadToPinata]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image': ["*"] },
    maxSize: 100000000 // 100MB max size
  });

  return (
    <div className={cn('w-full my-12')}>
      <div className={cn('mx-auto w-full border-4 border-dotted border-icons rounded-xl text-center p-4 cursor-pointer')} {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={cn('text-2xl font-bold')}>{title}</p>
        <Image
          src={images.upload} 
          alt="Upload icon"
          width={100}
          height={100}
          className={cn('rounded-lg m-auto my-4')}
        />
        <p className={cn('text-xl')}>{heading}</p>
        <p className={cn('text-lg')}>{subHeading}</p>
      </div>
      {fileUrl && (
        <div className={cn('mt-12 border-2 border-dotted border-icons rounded-md p-8')}>
          <div className={cn('grid grid-cols-2 gap-12')}>
            <Image
              src={fileUrl}
              alt="NFT Preview"
              width={200}
              height={200}
              className={cn('col-span-1')}
            />
            <div className={cn('col-span-1 space-y-4')}>
              <p className={cn('text-2xl font-bold')}>NFT Name: {name || 'N/A'}</p>
              <p className={cn('text-2xl font-bold')}>Website: {website || 'N/A'}</p>
              <p className={cn('text-xl')}>Description: {description || 'N/A'}</p>
              <p className={cn('text-xl')}>Royalties: {royalties || 'N/A'}</p>
              <p className={cn('text-xl')}>File Size: {fileSize || 'N/A'}</p>
              <p className={cn('text-xl')}>Properties: {properties || 'N/A'}</p>
              <p className={cn('text-xl')}>Category: {category || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropZone;
