import React from 'react';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';

// TODO: Update all images to be .png type tile
// TODO: Have image file names match miniNAme to move toward eliminating switch case

let whichImage = function (miniName) {
    switch (miniName) {
        case 'HTML5':
            return '/images/html5.png'
        case 'CSS3':
            return '/images/css3.png'
        case 'JavaScript':
            return '/images/javascript.png'
        case 'jQuery':
            return '/images/jquery.png'
        case 'Bootstrap':
            return '/images/bootstrap.svg'
        case 'Firebase':
            return '/images/firebase_badge.png'
        case 'Materialize':
            return '/images/materialize_badge.png'
        case 'nodeJS':
            return '/images/nodeJS.png'
        case 'MySQL':
            return '/images/MySQL.png'
        case 'React':
            return '/images/react.png'
        case 'Handlebars':
            return '/images/handlebars.png'
        case 'Expressjs':
            return '/images/express.png'
        case 'MongoDB':
            return 'images/MongoDB.png'
        case 'React Native':
            return 'images/reactNative.png'
        case 'Sequelize':
            return 'images/sequelize.png'
        case 'Python':
            return 'images/python.webp'
        default: return 'bye'
    }
}

// TODO: add tooltip from ant for these items
function MiniLogo(props) {
    const { miniName, myClass } = props
    return (
        <Tooltip placement="top" title={miniName}>
            <img className={myClass} data-position="bottom" data-tooltip={miniName}
                src={whichImage(miniName)} alt={miniName} />
        </Tooltip>
    );
}


export default MiniLogo;