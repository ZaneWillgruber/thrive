import React from "react";

function InfoSection({ subject, info, columns, includeGradient, buttonText, buttonLink }) {
    const containerClasses = includeGradient ? "info-section has-gradient bg-custom-gradient" : "info-section";

    return (
        <div className={containerClasses}>
            <h2>{subject}</h2>
            <p>{info}</p>

            {columns && columns.length > 0 && (
                <div className="columns">
                    {columns.map((column, index) => (
                        <div key={index} className="column">
                            {column.icon && <img src={column.icon} alt={`Icon ${index}`} />}
                            <h3>{column.title}</h3>
                            <p>{column.text}</p>
                        </div>
                    ))}
                </div>
            )}

            {buttonText && buttonLink && (
                <div className="button-container">
                    <a href={buttonLink} className="button">{buttonText}</a>
                </div>
            )}
        </div>
    );
}

export default InfoSection;