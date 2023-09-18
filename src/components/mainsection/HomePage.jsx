import image from '../../assets/images/rscf (Large).png'
import "./home.css"


function HomePage() {
   return (
      <div className='slide__s'>
         <div className='image container'>
            <img className="big-logo" src={image} alt="Logo" />
         </div>
      </div>
   )
}

export default HomePage