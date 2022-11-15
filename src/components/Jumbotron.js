import RectangleOne from '../img/Rectangle-2.png'
import RectangleTwo from '../img/Rectangle 3.png'

function Jumbotron() {
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <img src={RectangleOne} alt="" className="me-5"/>
                <img src={RectangleTwo} alt="" style={{position:'absolute', marginTop:'38px', marginLeft:'290px'}}/> 
                <div className="d-flex flex-column mt-5" style={{color:'white', position:'absolute', marginRight:'450px', width:'450px'}}>
                    <p className="fs-1 fw-bold">WAYSBUCKS</p>
                    <p className="fs-5 mb-4">Things are changing, but we're still here for you</p>
                    <p className="fs-6 mb-5">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available</p>
                    <p className="fs-6">Let's Order...</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default Jumbotron