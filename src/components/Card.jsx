import Card from 'react-bootstrap/Card';

function CARDBODY ({price , description , title , category , returnpolicy , imgsrc}) {
  return (
    <Card className='Card px-0' style={{ width: '300px' , height: 'fit-content'}}>
      <Card.Img className='w-100 border border-0' style={{height: '300px' , borderRadius: '0px' , objectFit: 'fit-content'}} src={imgsrc} />
      <Card.Body className='px-3 d-flex flex-column'>
        <div className='d-flex justify-content-between'>
        <h6 className='fw-bold'>Rs. {price}</h6>
        <h5><i class="fa-regular fa-heart"></i></h5>
        </div>
        <p className='fw-bold'>{title}</p>
        <div>
        <p className='d-flex justify-content-start align-items-center gap-1' style={{fontSize: '0.75rem'}}>{description}</p>
        <p style={{fontSize: '0.90rem', marginTop:'-15px'}} className='fw-bold'>{category}</p>
        <p style={{fontSize: '0.75rem' , marginTop: '-15px' , marginBottom: '0px'}}>{returnpolicy}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CARDBODY