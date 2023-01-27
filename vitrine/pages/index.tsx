import React from "react";
import IndexPage from "../components/IndexPage";
import RegisterPage from "../components/RegisterPage";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/.user';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Home: React.FC = () => {

    return (
        <IndexPage>
            <RegisterPage />
        </IndexPage>
    )
}

export default Home;