import ArkaisEdu from "./component/arkaisEdu";
import WordList from "./component/wordlist";
import './globals.css'

export default function Home() {
  return (
    <div className="bg-color-dark">
      <ArkaisEdu />
      <WordList />
    </div>
  );
}
