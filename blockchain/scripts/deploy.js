async function main() {
  const PollFactory = await ethers.getContractFactory("PollFactory")

  const poll_factory = await PollFactory.deploy()
  console.log("Contract deployed to address:", poll_factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
