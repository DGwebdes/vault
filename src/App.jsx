import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Post from './Components/Post';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/vault" element={<Homepage />} />
                    <Route path="/posts/:postId" element={<Post />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
