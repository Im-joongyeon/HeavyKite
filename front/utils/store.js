import create from "zustand";

export const useStore = create(set => ({

    walletAddress: null,
    setWalletAddress: (walletAddress) => set({ walletAddress }),

    balance: 0,
    setBalance: (balance) => set({ balance }),

    network: null,
    setNetwork: (network) => set({ network }),

}));

