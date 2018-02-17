import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { productSubmit } from '../../../actions';

class AddProduct extends Component {
  onSubmitHandle() {
    const productInfo = {
      type: this.props.addProductForm.values.type,
      name: this.props.addProductForm.values.name.trim(),
      price: this.props.addProductForm.values.price.trim(),
      style: this.props.addProductForm.values.style.split(','),
      description: this.props.addProductForm.values.description.split(','),
      sku: this.props.addProductForm.values.sku.trim(),
    };

    this.props.productSubmit(productInfo);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleSubmit(() => this.onSubmitHandle())}>
            <h4>Add Product</h4>
            <div>
              <label>Type:</label>
              <label>Collection</label>
              <Field name="type" type="radio" value="collection" component="input" />
              <label>Souvenirs</label>
              <Field name="type" type="radio" value="souvenirs" component="input" />
              <label>Other</label>
              <Field name="type" type="radio" value="other" component="input" />
              {/* <Field type="text" name="type" component="input" /> */}
            </div>
            <div>
              <label>Name</label>
              <Field type="text" name="name" component="input" />
            </div>
            <div>
              <label>Price</label>
              <Field type="text" name="price" component="input" />
            </div>
            <div>
              <label>Style</label>
              <Field type="text" name="style" component="input" />
            </div>
            <div>
              <label>Description</label>
              <Field type="text" name="description" component="input" />
            </div>
            <div>
              <label>SKU</label>
              <Field type="text" name="sku" component="input" />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
        <div>
          <a href="/api/checkuser">Check User</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addProductForm: state.form.addProduct,
    initialValues: {
      type: '',
      name: '',
      price: '',
      style: '',
      description: '',
      sku: '',
    },
  };
}

export default compose(
  connect(mapStateToProps, { productSubmit }),
  reduxForm({
    form: 'addProduct',
  }),
)(AddProduct);
