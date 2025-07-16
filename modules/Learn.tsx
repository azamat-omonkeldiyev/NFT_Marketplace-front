import Image from "next/image";
import {Wallet,Collection,Korzinka } from '../public'
const Learn = () => {
    return (
        <section className="py-[80px]">
            <div className="containers space-y-[48px]">
                <div className="flex flex-col gap-[10px] ml-[30px]">
                    <h2 className="font-semibold text-[38px]">How it works</h2>
                    <p className="font-normal text-[22px]">Find out how to get started</p>
                </div>
                <div className="flex items-center justify-around">
                    <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
                        <div className="w-[250px] h-[250px]">
                            <Image className="w-[250px] h-[250px]" src={Wallet} alt="Learn Img" width={250} height={250} priority />
                        </div>
                        <strong className="mt-[20px] text-[22px] font-semibold text-center">
                            Setup Your wallet
                        </strong>
                        <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
                            Set up your wallet of choice. Connect it to the Animarket by
                            clicking the wallet icon in the top right corner.
                        </p>
                    </div>

                    <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
                        <div className="w-[250px] h-[250px]">
                            <Image className="w-[250px] h-[250px]" src={Collection} alt="Learn Img" width={250} height={250} priority />
                        </div>
                        <strong className="mt-[20px] text-[22px] font-semibold text-center">
                            Create Collection
                        </strong>
                        <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
                            Upload your work and setup your collection. Add a description,
                            social links and floor price.
                        </p>
                    </div>

                    <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
                        <div className="w-[250px] h-[250px]">
                            <Image className="w-[250px] h-[250px]" src={Korzinka} alt="Learn Img" width={250} height={250} priority />
                        </div>
                        <strong className="mt-[20px] text-[22px] font-semibold text-center">
                            Start Earning
                        </strong>
                        <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
                            Choose between auctions and fixed-price listings. Start earning by
                            selling your NFTs or trading others.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learn;