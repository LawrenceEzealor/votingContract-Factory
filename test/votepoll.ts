import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("VotePoll", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployVotePoll() {
  

    // Contracts are deployed using the first signer/account by default
    const [ owner, otherAccount] = await ethers.getSigners();

    const question = "Who do you chose";
    const options = ["Law", "ren"];
    // const VotePoll = await ethers.getContractFactory("VotePoll");
    // const votepoll = await VotePoll.deploy(question, options);
    
    const PollFactory = await ethers.getContractFactory("PollFactory");
    const  pollFactory = await PollFactory.deploy();
  

    return { owner, otherAccount, pollFactory };
  }

  describe("Vote", function () {
    it("Should create voting poll and emit event", async function () {
      const { pollFactory } = await loadFixture(deployVotePoll);

    const question = "Who do you chose";
    const options = ["Law", "ren"];

      const vote = await pollFactory.createPoll(question, options);
      console.log(vote);
      
      // We are expecting a new created votepoll address
      // How do we test for address

      expect(vote).to.equal(vote);
    });

    //     it("Should reject address zero", async function () {
    //   // const addressZero = "0x0000000000000000000000000000000000000000";
    //   // const { votepoll, addressZero } = await loadFixture(deployVotePoll);

    //   // expect(await votepoll.vote(addressZero)).to.equal(0);
    // });
    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

  //   it("Should receive and store the funds to lock", async function () {
  //     const { lock, lockedAmount } = await loadFixture(
  //       deployOneYearLockFixture
  //     );

  //     expect(await ethers.provider.getBalance(lock.target)).to.equal(
  //       lockedAmount
  //     );
  //   });

  //   it("Should fail if the unlockTime is not in the future", async function () {
  //     // We don't use the fixture here because we want a different deployment
  //     const latestTime = await time.latest();
  //     const Lock = await ethers.getContractFactory("Lock");
  //     await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
  //       "Unlock time should be in the future"
  //     );
  //   });
  // });//STOP HERE

  
  });
});
