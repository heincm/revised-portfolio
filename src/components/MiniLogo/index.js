import React from 'react';


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
            return '/images/react.svg'
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

function MiniLogo(props) {
    const { miniName, myClass } = props
    return (
            <img className={myClass} data-position="bottom" data-tooltip={miniName}
                src={whichImage(miniName)} alt={miniName} />
    );
}


export default MiniLogo;