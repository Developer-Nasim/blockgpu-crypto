import './style.css'
export default function Btn({href,txt,...rest}) {
    return(
        href ? <a href="#" {...rest} className="theme-btn">{txt}</a> : <button className="theme-btn" type="button" {...rest}>{txt}</button>         
    )
}

