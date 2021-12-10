import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../img/T-shirt.jpg';
import image2 from '../img/hoodie.jpg';
import Bill from './Bill';
import './Bill.css';

class Product extends Component{
    state={
        products:[
            {
                id:1,
                name: "Hoodie",
                price: 18,
                stock: 495,
    
            },
            {
                id:2,
                name:"T-shirt",
                price: 10,
                stock: 485
            },
            {
                id: 3,
                name: "sun glass",
                price: 5,
                stock: 5
            }

        ],
        total:0,
        CartItems:[]
    }
     calculateTotal= (price,stock,id)=> {
     this.setState({total: this.state.total+price});
     const item=this.state.products.find((el) => {
         if(el.id== id){ 
            return el;

         }
     });
     this.state.CartItems.push(item);
    }

    render(){
        return(
        <div className="row">          
            {this.state.products.map((el,key)=>
            {
            const cardtemp=
           
            <div className="card card-container col-md-10 col-xl-8 col-sm-5 bg-light" key="key">
                <div className="card-header">
                <img src={image} className=" mw-100"/>
                </div>
                <div className="card-body">
                    <h1 className="card-title">
                        {el.name}
                    </h1>
                    <div className="card-text text-primary">
                        <p className="text-primary" key={key}>Price: {el.price}$</p>
                        <p className="text-success"> {el.stock} In stock</p>
                       
                    </div>

                    <div className="card-footer text-center">
                        <button className="btn btn-warning" onClick={(e)=> this.calculateTotal(el.price,el.stock,el.id)} value={el.price}>Add</button>
                    </div>
                </div>
                </div>
               

            return cardtemp;
            }
            )}
             <div className="col-md-8 col-sm-5">
                 <h2 className="heading-2">Order Summary</h2>
                    <Bill total={this.state.total} CartItems={this.state.CartItems}/>
                </div>
                </div>
    );
    }
}
export default Product;