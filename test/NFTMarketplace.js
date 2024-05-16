const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {
  let NFTMarketplace;
  let marketplace;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    marketplace = await NFTMarketplace.deploy();
    await marketplace.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await marketplace.owner()).to.equal(owner.address);
    });

    it("Should have correct listing price", async function () {
      expect(await marketplace.getListingPrice()).to.equal(ethers.utils.parseUnits("0.000001", "ether"));
    });
  });

  describe("Minting and listing NFTs", function () {
    it("Should mint and list an NFT", async function () {
      await expect(marketplace.connect(addr1).createToken("tokenURI1", ethers.utils.parseEther("1"), { value: ethers.utils.parseUnits("0.000001", "ether") }))
        .to.emit(marketplace, "MarketItemCreated")
        .withArgs(1, addr1.address, marketplace.address, ethers.utils.parseEther("1"), false);

      const item = await marketplace.idToMarketItem(1);
      expect(item.seller).to.equal(addr1.address);
      expect(item.owner).to.equal(marketplace.address);
      expect(item.price.toString()).to.equal(ethers.utils.parseEther("1").toString());
      expect(item.sold).to.equal(false);
    });
  });

  describe("Buying and reselling NFTs", function () {
    beforeEach(async function () {
      await marketplace.connect(addr1).createToken("tokenURI1", ethers.utils.parseEther("1"), { value: ethers.utils.parseUnits("0.000001", "ether") });
    });

    it("Should allow buying an NFT", async function () {
      await expect(marketplace.connect(addr2).createMarketSale(1, { value: ethers.utils.parseEther("1") }))
        .to.changeEtherBalances([addr1, addr2, owner], [ethers.utils.parseEther("1"), ethers.utils.parseEther("-1"), ethers.utils.parseUnits("0.000001", "ether")]);

      const item = await marketplace.idToMarketItem(1);
      expect(item.owner).to.equal(addr2.address);
      expect(item.sold).to.equal(true);
    });

    it("Should allow reselling an NFT", async function () {
      await marketplace.connect(addr2).createMarketSale(1, { value: ethers.utils.parseEther("1") });
      await expect(marketplace.connect(addr2).resellToken(1, ethers.utils.parseEther("2"), { value: ethers.utils.parseUnits("0.000001", "ether") }))
        .to.emit(marketplace, "MarketItemCreated")
        .withArgs(1, addr2.address, marketplace.address, ethers.utils.parseEther("2"), false);

      const item = await marketplace.idToMarketItem(1);
      expect(item.price.toString()).to.equal(ethers.utils.parseEther("2").toString());
    });
  });

  describe("Fetching Market Items", function () {
    it("Should fetch available items", async function () {
      await marketplace.connect(addr1).createToken("tokenURI1", ethers.utils.parseEther("1"), { value: ethers.utils.parseUnits("0.000001", "ether") });
      await marketplace.connect(addr2).createToken("tokenURI2", ethers.utils.parseEther("2"), { value: ethers.utils.parseUnits("0.000001", "ether") });
      await marketplace.connect(addr2).createMarketSale(2, { value: ethers.utils.parseEther("2") });

      const unsoldItems = await marketplace.fetchMarketItems();
      expect(unsoldItems.length).to.equal(1);
      expect(unsoldItems[0].price.toString()).to.equal(ethers.utils.parseEther("1").toString());
    });
  });
});
