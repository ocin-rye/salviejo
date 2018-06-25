import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { fetchProductItem } from '../../../actions';
// import AddToCartButton from '../../cart/addToCartButton';
// import RemoveFromCartButton from '../../cart/removeFromCartButton';
// import IncreaseQuantityButton from '../../cart/increaseQuantityButton';
// import DecreaseQuantityButton from '../../cart/decreaseQuantityButton';

import Item from './item';

// import styles from './index.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentLoaded: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.productItem);

    // console.log(this.props.productItem);

    // console.log();

    this.setState({
      componentLoaded: false,
    });

    const productItemQuery = this.props.match.params.productItem
      .toLowerCase()
      .replace(/-/g, ' ');

    // console.log(productItemQuery);

    this.props.fetchProductItem({ productItemQuery });

    const productTypes = ['collection', 'souvenirs', 'other'];

    if (
      !_.includes(productTypes, this.props.match.params.products.toLowerCase())
    ) {
      // console.log('this is a valid product type page.');
      this.props.history.replace('/notfound');
    }

    // console.log(this.props.productItem);

    if (this.props.productItem === false) {
      return this.props.history.replace('/notfound');
    }

    this.setState({
      componentLoaded: true,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.productItem !== nextProps.match.params.productItem
    ) {
      this.setState({
        componentLoaded: false,
      });
      const productItemQuery = nextProps.match.params.productItem
        .toLowerCase()
        .replace(/-/g, ' ');
      this.props.fetchProductItem({ productItemQuery });
      this.setState({
        componentLoaded: true,
      });
      // this.setState({
      //   componentLoaded: true,
      // });
    }

    if (
      JSON.stringify(this.props.productItem) !==
      JSON.stringify(nextProps.productItem)
    ) {
      if (nextProps.productItem === false) {
        return this.props.history.replace('/notfound');
      }
    }
  }

  // renderContent() {
  //   console.log(this.props);
  //   if (this.props.productItem === false) {
  //     return null;
  //   }
  //   return this.props.productItem.map(product => (
  //     <div key={product._id}>
  //       <div>
  //         <h1>{product.name}</h1>
  //       </div>
  //       <div>
  //         <form>
  //           {product.style.map((style, index) => (
  //             <div key={style}>
  //               <label>{style}</label>
  //               <Field
  //                 name="style"
  //                 type="radio"
  //                 value={style}
  //                 component="input"
  //               />
  //             </div>
  //           ))}
  //         </form>
  //       </div>
  //       <div>
  //         {product.images.map((image, index) => (
  //           <span key={`${product.name} ${index}`}>
  //             <img src={image} alt={`${product.name} ${Number(index) + 1}`} />
  //           </span>
  //         ))}
  //       </div>
  //     </div>
  //   ));
  //   // return this.props.products.map(product => <div>{product.name}</div>);
  // }

  render() {
    // console.log(this.state.componentLoaded);
    return this.state.componentLoaded ? (
      <Item
        itemInfo={this.props.productItem}
        itemInfoStyleChoice={this.props.productItemForm}
      />
    ) : (
      <div>...Loading</div>
    );
  }
}

// AdminAuth.propTypes = {
//   auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]).isRequired,
// };

// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps)(ProductItem);

function mapStateToProps(state) {
  return {
    productItem: state.products,
    productItemForm: state.form.productItemForm,
    initialValues: {
      style: '',
    },
  };
}

// export default connect(mapStateToProps, { fetchProductItem })(withRouter(ProductItem));

export default compose(
  connect(mapStateToProps, { fetchProductItem }),
  reduxForm({
    form: 'productItemForm',
  }),
)(withRouter(ProductItem));
