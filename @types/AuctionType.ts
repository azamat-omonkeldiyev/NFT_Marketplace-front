import { NftType } from "./NftType";

export interface AuctionType {
  id: string;
  description: string;
  details: string[];
  tags: string[];
  endsAt: string;
  createdAt: string;
  updatedAt: string;
  nftId: string;
  nft: NftType
  results: any;
}
