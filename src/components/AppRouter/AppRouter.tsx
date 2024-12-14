import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeMaine from "./HomeMaine/HomeMaine";


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeMaine />}/>
            <Route path='/home' element={<HomeMaine/>}/>
        </Routes>
    )
};

export default AppRouter;