import Web3 from "web3";



export const getWalletInfo = async (address, { setBalance, setNetwork }) => {
    //address[0]
    const web3 = new Web3(window.ethereum);
    if(address !== "undefined") {
      const balance = await web3.eth.getBalance(address)
      setBalance(web3.utils.fromWei(balance, 'ether'));

      const chainId = await web3.eth.net.getId();
      setNetwork(mappingChainId[chainId]);
    } else {
      return null;
    }

}

export const mappingChainId = {
  1: "Ethereum",
  56: "BSC",
  137: "Polygon",
}

export const converAddress = (address) => {
    if (address ) {
        return address.slice(0,6) + "..." + address.slice(-3)
    } else {
        return null;
    }
}

export const detectNetworkChange = () => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
          window.location.reload();
      })
      window.ethereum.on("계정 변경", () => {
        window.location.reload();
      })
    }
}

