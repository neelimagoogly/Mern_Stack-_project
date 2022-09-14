import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../src/styles/home.css";
import axios from 'axios';
import Buyerloc from './Buyerloc';

const ProductSchema = props => (
    <tr>
        <td className={props.product.is_delete ? 'completed' : ''}>{props.product.name}</td>
        <td className={props.product.is_delete ? 'completed' : ''}>{props.product.desc}</td>
        <td className={props.product.is_delete ? 'completed' : ''}>{props.product.price}</td>
        {/* <td className={props.product.is_delete ? 'completed' : ''}>{props.product.image}</td> */}
        {/* <td className={props.product.is_delete ? 'completed' : ''}>{props.product.discount}</td> */}
        <td>
            {/* <Link to='/orders'>Edit</Link> */}
            <Link to="/orders"><button class="button-71" role="button">Order Now</button></Link>
        </td>
    </tr>
)

export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:2000/products/')
            .then(response => {
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // componentDidUpdate() {
    //     axios.get('http://localhost:4000/products/')
    //     .then(response => {
    //         this.setState({todos: response.data});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }

    productList() {
        return this.state.products.map(function(currentProduct, i) {
            return <ProductSchema product={currentProduct} key={i} />;
        });
    }
    myFunction() {
        // Declare variables
        var input, filter, table, tr, th, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("table table-striped");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          th = tr[i].getElementsByTagName("th")[0];
          if (th) {
            txtValue = th.textContent || th.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for names.."></input>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Commodity</th>
                            <th>Price(in ₹)</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.productList() }
                    </tbody>
                </table>
            </div>
        )
    }
}