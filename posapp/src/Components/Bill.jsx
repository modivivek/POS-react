import React,{Component} from 'react';
import image1 from '../img/T-shirt.jpg';


class Bill extends Component{
    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <div className="w-30% col-md-8 col-xl-8 col-sm-5" >
                {this.props.CartItems.map((el)=>{
                    
                const item =<div className="item d-flex bg-light" key={el.id}>
                    <div>
                        <img src={image1} alt="image 1"/>
                    </div>
                    <div>
                        <p>Product id: {el.id}</p>
                        <p>Product name: {el.name}</p>
                        <p>Product price: {el.price}$</p>
                    </div>   
                    </div>;
                    return item;
                })}       
                    
                    <div>
                        <p> Total: {this.props.total}</p>
                    </div>
                    </div>


                    
    
        );
      
    }
}
export default Bill;