import { useEffect , useState } from "react";
import CARDBODY from "./components/Card";

function App (){
  
  const [productsArr , setProducts] = useState ([])
  const [err , setErr] = useState(false)
  const [loading , setLoading] = useState(false)
  
  useEffect(()=> {
    getData ()
  } , [])
  
  useEffect(() => {
    console.log(productsArr);
  }, [productsArr]);

  async function getData (){
    try{
      const Data = await fetch ('https://dummyjson.com/products')
      const response = await Data.json()
      setProducts (response.products)
    } catch (error){
      console.log (error)
      setErr(true)
    } finally { 
      setLoading(false)
    }
  }
  
  return (
    <>
    {err && <h1>Error in fetching data from API</h1>}
    {loading && <h1>Loading.......</h1>}
    {productsArr.map ((items , index)=>{
      return <div>
        <CARDBODY key={items.id} imgsrc={items.thumbnail} price={items.price} description={items.description} title={items.title} category={items.category} returnpolicy={items.returnPolicy}/>
      </div>
    })}
    </>
  )
}

export default App