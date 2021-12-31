import React from 'react';

const CartItem =(props)=> {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mob Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.testing();
    // }

    // testing(){
    //     const promise = new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //  promise.then(()=>{
    //      //setState acts like a synchronus cal
    //      this.setState({qty:100});
    //      console.log('state',this.state);
    //  });
 
    // }
    // increaseQuantity=()=> {
    //     // //SetState from 1        {Shallo margging Technique}
    //     // this.setState(
    //     //     {
    //     //         qty: this.state.qty+1
    //     //     }
    //     // )

    //     //setState Form 2    {if Previous state is Require then used its}
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty +1
    //         }
    //     });
       
    // }

    // decreaseQuantity=()=>{
    //      {/*anothers Way to written if   
    //        const {qty}=this.state;
    //        if(qut==0){
    //        return;
           
    //     */}
    //     this.setState((prevState)=>{
    //     if(prevState.qty>=1){ 
    //         return{
    //             qty:prevState.qty -1
    //         }
    //     }
    //     });
    // }


        const { price, title, qty } = props.products ; //Object Destructring 
        const {products,onincreaseQuantity,ondcreaseQuantity,ondeleteQuantity} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} 
                     src={products.img}
                    />

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs : {price}</div>
                    <div style={{ color: '#777' }}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttoms  */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                             //Bindimg Function when You call A event Hander
                            // onClick={this.increaseQuantity.bind(this)}//Arrow funtion no need to bind
                            onClick={()=>onincreaseQuantity(products)}
                        />


                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                            onClick={()=>ondcreaseQuantity(products)}

                        />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                            onClick={()=>ondeleteQuantity(products.id)}

                        />

                    </div>

                </div>

            </div>
        );
    }




const styles = {
    image: {
        height: 110,
        width: 110,
        boarderRadius: 4,
        background: '#ccc',

    }

}


export default CartItem;