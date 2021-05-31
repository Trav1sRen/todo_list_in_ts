import React from 'react';
import "./index.css";

const Footer = () => {
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox"/>
            </label>
            <span>
                     <span>Done: 0</span> / All: 2
                 </span>
            <button className="btn btn-danger">Clear done items</button>
        </div>
    );
}

export default Footer;