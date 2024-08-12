import styles from './style.module.css'    
import ContentBlk from './ContentBlk' 

export default function ContentSection({img,children, ...rest}) {
  return (
    <section className={styles.ContentSection} {...rest}>
        <img src={img} alt="" />
        <div className="container">
            <div className="row">  
                <div className="col-lg-5">
                    <ContentBlk>
                        {children} 
                    </ContentBlk>
                </div> 
            </div>
        </div>
    </section>
  )
}
