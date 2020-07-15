import React from "react";
import "./style.css";

const Section = ({title, body, extraContent}) => (
    <section className="section">
        <h2 className="section__header">{title}</h2>
        {extraContent}
        <div className="section__body">
            
            {body}
        </div>
    </section>
);
export default Section;