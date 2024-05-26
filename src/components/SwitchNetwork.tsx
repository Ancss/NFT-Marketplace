import React, { useCallback, useContext } from 'react';
import Image from 'next/image';
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';
import images from '@/img';
import { Button } from './ui/button';

const SwitchNetwork: React.FC = () => {
  const { setOpenSwitchNetwork, openSwitchNetwork, } = useContext(NFTMarketplaceContext)!
  const switchToAmoy = useCallback(async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13882' }], // 0x13882 is the  Amoy Testnet chain id of hex
      });
      // setOpenSwitchNetwork(false)
    } catch (switchError: any) {
      console.log(switchError)
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainName: 'Polygon Amoy',
              chainId: '0x13882',
              rpcUrls: ['https://polygon-amoy.g.alchemy.com/v2/vkTR7T80RK9fA-7o_XBHtsC5vCZJCjMm'],
              "nativeCurrency": { "name": "MATIC", "symbol": "MATIC", "decimals": 18 },
            }],
          });
          // setOpenSwitchNetwork(false)
        } catch (addError) {
          console.error('Failed to add the Amoy network', addError);
        }
      } else {
        console.error('Failed to switch to the Amoy network', switchError);
      }
    }
  }, [])
  return (
    <div className="fixed inset-0 bg-black bg-blend-overlay z-[999999] cursor-pointer" onClick={(e) => setOpenSwitchNetwork(false)}>
      <div className="absolute top-1/2 left-1/2 bg-main-bg p-8 rounded-lg shadow-custom text-center w-2/5 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            className=" object-cover mx-auto"
          />
          <p className="text-2xl text-icons my-2">Mistake Chain Network</p>
          <Button onClick={(e) => { e.stopPropagation(); switchToAmoy() }}>Switch Polygon Amoy</Button>
        </div>
      </div>
    </div>
  );
};

export default SwitchNetwork;
