import React, { Component } from 'react';
import Product from '../Product/Product';
import "./Home.css";
import { UserConsumer } from '../../containers/UserContext';
import { connect } from 'react-redux'
import axios from 'axios';
import { addOrder, addProducts } from '../../Actions';
import { bindActionCreators } from 'redux';

class Home extends Component {

  componentDidMount() {
    axios.get("http://coxproductapp-env.eba-wcmi8tjk.ap-south-1.elasticbeanstalk.com/api/v1/Product").then(
      response => {
        this.props.addProducts(response.data.data);
      }
    ).catch(error => {
    });
  }

  orderClick = (product) => {
    this.props.addOrder(product);
  }

  logoutHandler = () => {
    localStorage.clear();
    this.logout = true;
    window.location.href = "/login";
  }

  dashboardClickHandler = () =>{
      window.location.href = "/dashboard";
  }

  render() {
    return (
      <div>
      
        <div className="logout extra content">
          <div>
            <div className="ui basic red button" onClick={this.logoutHandler}> Log Out </div>
          </div>
        </div>
        <div className="logout extra content">
          <div>
            <div className="ui basic red button" onClick={this.dashboardClickHandler}> Dashboard </div>
          </div>
        </div>
        <div className="text">
          <strong>
            <UserConsumer>
              {
                username => { return (<div> Hello {username} </div>) }
              }
            </UserConsumer>
          </strong>
        </div>
        <div className="product">
          <h2>Products</h2>
          <Product products={this.props.products} clicked={(product) => this.orderClick(product)}></Product>
        </div>
        <div className="orders">
          {
            this.props.orders.length > 0 ?
              <h3>Ordered Items: </h3> : null
          }
          {this.props.orders.map(order => (
            <div key={order.order.id}>
              <li>{order.order.name}</li>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

// Map Redux state to React component props
const mapStateToProps = (state) => {
  return {
    products: state.homeReducer.products,
    orders: state.homeReducer.orders
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addOrder, addProducts}, dispatch);
}

// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(Home);
