import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
const HeaderTitle = () => {
    return (
        <div class='headerTitle'>
            <div class='topHeaderTitle'>
                <h1>Lambda School</h1>
                <p>@LambdaSchool • 26 jan</p>
            </div>
            <HeaderContent />
        </div>
    )
}

export default HeaderTitle;