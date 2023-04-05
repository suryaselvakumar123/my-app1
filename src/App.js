import logo from './logo.svg';
import './App.css';
import { Badge, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [Count, setCount] = useState(0);

  
  const data = [
    {
      productimage: "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1668184041/rnfxgwshubrpd30ijvz7.png ",
      productName: "Apple iPhone 14 Pro",
      price: "100000/-",
      Rating: 95,
    },
    {
      productimage: "https://www.alarabia.com.tn/12712-product_zoom/samsung-galaxy-s21.jpg",
      productName: "Samsung S27",
      price: "85000/-",
      Rating: 80,
    },
    {
      productimage: "https://5.imimg.com/data5/SELLER/Default/2020/10/JS/RK/EB/52897103/oneplus-nord-5g-8-128-grey-blue-1000x1000.jpg ",
      productName: "Oneplus 11",
      price: "60000/-",
      Rating: 90,
    },
    {
      productimage: "https://www.mytrendyphone.eu/images/Google-Pixel-7-128GB-Snow-0840244700669-20102022-001-p.webp ",
      productName: "Google Pixcel",
      price: "50000/-",
      Rating: 83,
    },
    {
      productimage: "https://5.imimg.com/data5/SELLER/Default/2022/5/KG/EH/ER/140629936/vivo-v23-5g-mobile-1000x1000.jpg ",
      productName: "Vivo V23 ",
      price: "30000/-",
      Rating: 70,
    },
    {
      productimage: "https://openshop.uz/public/storage/uploads/products/photos/202301/6sAj9nSfwxod4sxvj1v0VA1eCnJaM8Dxc0oLSNum.jpg",
      productName: "Xiaomi 12",
      price: "35000/-",
      Rating: 75,
    },
  ];


  
  return (
    <div className="App">
      <div className='cart-value'>
      <Badge bg="success">
        CART  {Count}
      </Badge>
      </div>
      <div className='card-container'>
        {data.map((prod, idx) => <Cards
        prod ={prod}
        idx = {idx}
        Count={Count}
        setCount={setCount}
        />
          )}
      </div>
    </div>

  );
}

function Cards({prod,idx,setCount,Count}){
  const  [show,Setshow]= useState (false);
  function Addtocart(){
    Setshow(!show)
    setCount(Count+1)
  }
  function Removefromcart(){
    Setshow(!show)
    setCount(Count-1)
  }
  return (
    <Card key={idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.productimage} />
            <Card.Body>
              <Card.Title>{prod.productName}</Card.Title>
              <Card.Text>
                {prod.price} RS
              </Card.Text>
              <Card.Text>
                {prod.Rating} ♥
              </Card.Text>
             {!show ? <Button variant="primary" onClick={Addtocart}>
               ADD CART
              </Button> :"" }
              {show ?
                <Button variant="danger" onClick={Removefromcart}>
                  REMOVE CART
                </Button> : ""}
            </Card.Body>
          </Card>
  )

  
}
export default App;
