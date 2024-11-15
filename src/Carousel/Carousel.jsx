import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Banner = () => (
  <Carousel autoplay>
    <div>
        <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" 
            alt="cash back banner"
            height='900vh'
            className='w-100'
        />
    </div>
    <div>
        <img 
            src="https://media.istockphoto.com/id/2159807397/photo/photo-of-shopping-cheerful-girl-holding-in-hands-colourful-bags-isolated-on-bright-vivid.jpg?s=612x612&w=0&k=20&c=Xyx8MdvfDSXI8f4oLFJDz2uR62SfBW3iNEBr3Yv2u6w=" 
            alt="cash back banner" 
        />
    </div>
    <div>
        <img 
            src="https://media.istockphoto.com/id/2159807397/photo/photo-of-shopping-cheerful-girl-holding-in-hands-colourful-bags-isolated-on-bright-vivid.jpg?s=612x612&w=0&k=20&c=Xyx8MdvfDSXI8f4oLFJDz2uR62SfBW3iNEBr3Yv2u6w=" 
            alt="cash back banner" 
        />
    </div>
    <div>
        <img 
            src="https://media.istockphoto.com/id/2159807397/photo/photo-of-shopping-cheerful-girl-holding-in-hands-colourful-bags-isolated-on-bright-vivid.jpg?s=612x612&w=0&k=20&c=Xyx8MdvfDSXI8f4oLFJDz2uR62SfBW3iNEBr3Yv2u6w=" 
            alt="cash back banner" 
        />
    </div>
  </Carousel>
);
export default Banner;