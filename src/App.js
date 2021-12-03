import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
// import SignupScreen from './screens/SignupScreen';
import SignInScreen from './screens/SignInScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import OnBoardRoleScreen from './screens/OnBoardRoleScreen';
import SignupScreen from './screens/SignupScreen';
import OtpScreen from './screens/OtpScreen';
import SignupDetailsScreen from './screens/SignupDetailsScreen';
import DestinationScreen from './screens/DestinationScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <main>
        <Routes>
          <Route path="/" element={<OnBoardingScreen />} exact></Route>
          <Route path="/onboardrole" element={<OnBoardRoleScreen />} exact></Route>
          <Route path="/signin" element={<SignInScreen/>} exact></Route>
          <Route path="/home" element={<HomeScreen/>} exact></Route>
          <Route path="/signup" element={<SignupScreen/>} exact></Route>
          <Route path="/enterdetails" element={<SignupDetailsScreen />} exact></Route>
          <Route path="/otpscreen" element={<OtpScreen/>} exact></Route>
          <Route path="/destination" element={<DestinationScreen/>} exact></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
