import React from 'react'
import './Widgets.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon fontSize="small" />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkdein News</h2>
                <InfoIcon />
            </div>
            {newsArticle("India love affair with biryani","1d ago . 1,904 readers")}
            {newsArticle("Two new entrants in unicorn club","2d ago . 5,058 readers")}
            {newsArticle("Why women drop out of the workforce","1d ago . 1,958 readers")}
            {newsArticle("Hey Siri, start my acr","1d ago . 8,622 readers")}
            {newsArticle("Contractstaff may get ESOPs: Report","1d ago . 904 readers")}
        </div>
        
        
    )
}
export default Widgets
