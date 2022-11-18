import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { getEthereumSigner } from "../service/contractService";
// import logo from "../img/logo.svg";

const ConnectPage = ({ setSigner }) => {
  const getSigner = async () => {
    const signer = await getEthereumSigner();
    setSigner(signer);
  };

  return (
    <div className="grid grid-cols-connectpage-sm lg:grid-cols-connectpage h-screen w-screen">
      <div className="bg-banner bg-cover"></div>
      <div className="flex flex-col justify-center items-center bg-blue text-white text-center">
        <div className="mb-3">
          {/* <img src={logo} className="h-16 w-16" alt="veot logo" /> */}
        </div>
        <p className="font-bold text-7xl mb-14">Veot</p>
        <p className="text-sm mb-44">
          A decentralised polling platform <br /> built upon the Hedera
          Hashgraph
        </p>
        <button
          type="button"
          onClick={getSigner}
          className="bg-gold hover:bg-dgold shadow-goldbutton font-medium py-5 px-12 rounded-3xl mb-10"
        >
          Connect to MetaMask Wallet
        </button>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/eedrxs"
            target="_blank"
            rel="noreferrer"
            className="text-white text-lg text-opacity-50 hover:text-opacity-40 mr-6"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/eedrxs/veot"
            target="_blank"
            rel="noreferrer"
            className="text-white text-lg text-opacity-50 hover:text-opacity-40"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
