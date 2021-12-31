import React from 'react';
import Navbar from "./Navbar";
import Cart from "./Cart";
import firebase from "firebase/app"
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      Products: [],
      lodding: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {

    // firebase.
    //   firestore().
    //   collection('Products').
    //   get().then((sanpshort) => {
    //     console.log(sanpshort);
    //     sanpshort.docs.map((docs)=>{
    //       console.log(docs.data())
    //     });

    //     const Products = sanpshort.docs.map((docs)=>{
    //       const data = docs.data();
    //       data['id']=docs.id;
    //       return data;
    //     })
    //      this.setState({
    //       Products:Products , // or You can simly Products
    //       lodding:false
    //      }) 

    //      })

    this.db.
      collection('Products')
      // where('price','==',999). // Quariey the data 
      .orderBy('price','desc')
      .onSnapshot((sanpshort) => {
        console.log(sanpshort);
        sanpshort.docs.map((docs) => {
          console.log(docs.data())
        });

        const Products = sanpshort.docs.map((docs) => {
          const data = docs.data();
          data['id'] = docs.id;
          return data;
        })
        this.setState({
          Products: Products, // or You can simly Products
          lodding: false
        })

      })

  }

  heandlerIcreaseQuantity = (products) => {
    console.log('hey inc the qty the product', products);
    const { Products } = this.state;
    const index = Products.indexOf(products);
    // Products[index].qty += 1;
    // this.setState({
    //   Products: Products
    // });

    const docRef = this.db.collection('Products').doc(Products[index].id);

    docRef.update({
      qty: Products[index].qty + 1
    })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error', error);

      })

  }
  heandlerDcreaseQuantity = (products) => {


    console.log('hey inc the qty the product', products);
    const { Products } = this.state;
    const index = Products.indexOf(products);
    if (Products[index].qty == 0) {
      return;
    }
    // Products[index].qty -= 1;

    // this.setState({
    //   Products: Products
    // });

    const docRef = this.db.collection('Products').doc(Products[index].id);

    docRef.update({
      qty: Products[index].qty - 1
    })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error', error);

      })

  }

  hendlerDeteleProduct = (id) => {
    const { Products } = this.state;
    // const items = Products.filter((items) => items.id !== id);
    // this.setState({
    //   Products: items
    // })

    const docRef = this.db.collection('Products').doc(id);
    docRef.delete()
      .then(() => {
        console.log('Deleted Successfully')
      })
      .catch((error) => {
        console.log('Error', error);

      })

  }

  getCartCount = () => {
    const { Products } = this.state;

    let count = 0;
    Products.forEach((product) => {
      count += product.qty;
    })
    return count;

  }

  getCartTotal = () => {
    const { Products } = this.state;
    let cartTotal = 0;
    Products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price

    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('Products')
      .add({
        img: '',
        price: 990,
        qty: 23,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);

      })
      .catch((error) => {
        console.log('Error:', error);
      })
  }

  render() {
    const { Products, lodding } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a Product</button> */}
        <Cart
          Products={Products}
          onincreaseQuantity={this.heandlerIcreaseQuantity}
          ondcreaseQuantity={this.heandlerDcreaseQuantity}
          ondeleteQuantity={this.hendlerDeteleProduct}

        />
        {lodding && <h1>Lodding Products..........</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
