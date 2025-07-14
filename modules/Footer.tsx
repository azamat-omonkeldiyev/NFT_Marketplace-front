import { Discord, Instagram, Twitter, YouTube } from "@/assets/icons"
import Heading from "@/components/Heading"
import Text from "@/components/Text"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] py-10">
      <div className="containers">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 justify-between">
            <div className="w-[238px]">
              <Link className="!mb-[30px] inline-block" href={"/"}>
                <Image src={"/site-logo.svg"} alt="Site Logo" width={243} height={32}/>
              </Link>
              <Text classList="!mb-[20px]">NFT marketplace UI created with Anima for Figma.</Text>
              <div>
                <Text classList="!mb-[15px]">Join our community</Text>
                <div className="flex items-center gap-[10px]">
                  <Link href={'/'}>
                    <Discord/>
                  </Link>
                  <Link href={'/'}>
                    <YouTube/>
                  </Link>
                  <Link href={'/'}>
                    <Twitter/>
                  </Link>
                  <Link href={'/'}>
                    <Instagram/>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Heading tag="h3" classList="!mb-[25px] !text-[22px]">Explore</Heading>
              <Text>Marketplace</Text>
              <Text classList="!my-[20px]">Rankings</Text>
              <Text>Connect a wallet</Text>
            </div>
            <div className="w-[330px]">
              <Heading tag="h3" classList="!mb-[25px] !text-[22px]">Join our weekly digest</Heading>
              <Text classList="!mb-[20px]">Get exclusive promotions & updates straight to your inbox.</Text>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer