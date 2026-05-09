import PassWord from "./pages/PassWord";
import { Routes, Route } from "react-router-dom";
import CorrectPassWord from "./components/CorrectPassWord";
import LoadingPage from "./components/Loading";
import { useLoading } from "./components/LoadingContext";
import LoveLetter from "./pages/LoveLetter";
import BestMoments from "./pages/BestMoments";
import Music from "./pages/Music";
import LastPage from "./pages/LastPage";

const App = () => {
  const { loading, stopLoading } = useLoading();
    if (loading) {
    return <LoadingPage onDone={stopLoading} />;
  }

  return (
      <Routes>
        <Route path="/" element={<PassWord />}></Route>
        <Route path="/lastpage" element={<LastPage />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/bestMoments" element={<BestMoments />}></Route>
        <Route path="/loveletter" element={<LoveLetter />}></Route>
        <Route path="/correctpassword" element={<CorrectPassWord />}></Route>
      </Routes>
  );
};

export default App;
