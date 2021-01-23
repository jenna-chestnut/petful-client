import smokeTest from "../Fixtures";
import PetView from "./PetView";
import SignUpForm from "./SignUpForm";
import WaitingList from "./WaitingList";

smokeTest('PetView', <PetView/>);
smokeTest('SignUpForm', <SignUpForm/>);
smokeTest('WaitingList', <WaitingList/>);