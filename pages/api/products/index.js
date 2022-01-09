import dbConnect from "../../../utilities/mongo"
import Product from "../../../models/Product"
export default async function handler(req, res) {
const{method} = req; 
dbConnect();
if(method ==="GET"){
try{
const products = await Product.find();
return res.status(200).json(products)
}catch{
    res.status(500).json(err)  
}
}
if(method ==="POST"){
try{
const product = await Product.create(req.body);
res.status(201).json(product);
}catch(err){
    res.status(500).json(err)
}
}
  }
