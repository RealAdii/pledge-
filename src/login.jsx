import './App.css'
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

// If you need to reference it in code
const vectorPath = '/Vector.png'

function Login() {
  const { setShowAuthFlow } = useDynamicContext();
  return (
    <div className="app">
      <img src="Vector.png" alt="Vector" className="solanaish" />
      <div className="content">
        <h1 className="title">Pledge</h1>
        <a href="#" className="cta-button" onClick={() => setShowAuthFlow(true)}>Get started</a>
      </div>
    </div>
  )
}

export default Login;




