export default function LinkTag({img,...rest}) {
    return(
        <a href="#" {...rest}><img src={img} alt="" /></a>        
    )
}

