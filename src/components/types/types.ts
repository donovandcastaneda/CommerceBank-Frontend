export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    balance: number;
    totalDeposited: number;
    totalWithdrawn: number;
    accounts: []
  };


  export type UserData = {
    firstName: string;
    lastName: string;
    balance: number;
    totalDeposited: number;
    totalWithdrawn: number;
  };
  
  
  export interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    fetchUserDetails: any
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  }
  