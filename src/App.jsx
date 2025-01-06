import './App.css'
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Login from "./login";
// If you need to reference it in code
const vectorPath = '/Vector.png'

function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "10318a4c-9d20-41ed-91a7-c97fe26aed04",
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <Login />
    </DynamicContextProvider>
  )
}

export default App




