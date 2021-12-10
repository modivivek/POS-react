
import './App.css';
import {Component} from 'react'; 
import Product from './Components/Product';
class App extends Component{
  render(){
    return(
      <div className="container">

        <Product/>
      </div>
    )
  }
}
export default App;