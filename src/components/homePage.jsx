import { useState, useEffect } from "react";
import Web3 from "web3";
import { POLLFACTORY_ADDRESS, POLLFACTORY_ABI } from "../abi";
import { Banner, Polls, ViewPoll, SetupDialog } from "./homePage/index";

const HomePage = ({ signer, setJoinedPoll }) => {
  const options = {
    from: signer.selectedAddress,
    gas: 4000000,
    gasPrice: "5000000000",
  };
  const web3 = new Web3(Web3.givenProvider);
  const pollFactory = new web3.eth.Contract(
    POLLFACTORY_ABI,
    POLLFACTORY_ADDRESS,
    options
  );
  const [setupDialog, toggleSetupDialog] = useState(false);
  const [pollCount, setPollCount] = useState(null);
  const [polls, setPolls] = useState([]);
  const [selectedPoll, setSelectedPoll] = useState([]);
  const [earliestPoll, setEarliestPoll] = useState();

  useEffect(() => {
    (async () => {
      if (pollCount != null) return;
      let pollCount_ = await pollFactory.methods.getPollCount().call();
      let polls_ = await pollFactory.methods.fetchPolls(pollCount_, 5).call();
      setEarliestPoll(+polls_[polls_.length - 1][7]);
      setPolls(polls_);
      setPollCount(pollCount_);
    })();
  }, [pollCount, pollFactory.methods]);

  async function loadMore() {
    if (earliestPoll === 1) return;
    let quantity = earliestPoll > 5 ? 5 : Math.abs(0 - earliestPoll) - 1;
    let polls_ = await pollFactory.methods
      .fetchPolls(earliestPoll - 1, quantity)
      .call();
    let _polls = [...polls].concat(polls_);
    setEarliestPoll(+polls_[polls_.length - 1][7]);
    setPolls(_polls);
  }

  async function getLatest() {
    let pollCount_ = await pollFactory.methods.getPollCount().call();
    if (+pollCount_ > +pollCount) {
      setPollCount(pollCount_);
      let polls_ = await pollFactory.methods
        .fetchPolls(pollCount_, pollCount_ - pollCount)
        .call();
      let _polls = [...polls_, ...polls];
      setPolls(_polls);
    }
  }

  return (
    <>
      {setupDialog ? (
        <SetupDialog
          toggleSetupDialog={toggleSetupDialog}
          signer={signer}
          pollFactory={pollFactory}
          getLatest={getLatest}
        />
      ) : null}
      <div className="grid md:grid-rows-3 h-screen w-screen font-sans">
        <Banner pollCount={pollCount} />
        <div id="poll-section" className="row-span-2 grid grid-cols-7">
          <Polls
            toggleSetupDialog={toggleSetupDialog}
            polls={polls}
            setSelectedPoll={setSelectedPoll}
            getLatest={getLatest}
            loadMore={loadMore}
          />
          <ViewPoll
            pollFactory={pollFactory}
            selectedPoll={selectedPoll}
            setSelectedPoll={setSelectedPoll}
            setJoinedPoll={setJoinedPoll}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
