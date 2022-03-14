import './App.css';
import Youtube from './components/Youtube'
import { DarkMode } from "./DarkMode";

function Music() {
  return (
    <>
    <DarkMode>
    <Youtube />
    </DarkMode>
    </>
  );
}

export default Music;