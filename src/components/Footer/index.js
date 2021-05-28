import React from 'react';
import './footerStyle.css';

let year = new Date();
year = year.getFullYear().toString();
class Footer extends React.Component {
    render() {
        return (

<footer className="page-footer footer">
        © {year} Chris Hein
</footer>
        )
    }
}

export default Footer