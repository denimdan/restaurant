import React from 'react';
import { Spinner } from 'reactstrap';



const MenuPage = ({ items, isMenuLoading }) => {
    // return isLoading ? (<h1>Loading.......</h1>) : (<div>
    //     {items.map(item => (
    //         <ul>
    //             <li>{item.itemName}</li>
    //         </ul>
    //     ))}
    // </div>)
    // console.log(items)
    if (isMenuLoading) {

        return (
            <div className="container text-center">
                <Spinner>Loading...</Spinner>
            </div>
        )
    }

    return (
        <div className="container food-menu mb-5">
            <div className="mb-5 mt-3"><h1>Appetizers</h1></div>
            <div className="row ">                
                {
                    items.appetizers.map(item => (
                        <div key={item.id} className="col-sm-6 col-xs-12">
                            <h4>{item.itemName}</h4>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>                    
                ))
                }
            </div>
            <div className="mb-5 mt-3"><h1>Entrees</h1>
            <div className="row mb-5">                
                {
                    items.entrees.map(item => (
                        <div key={item.id} className="col-sm-6 col-xs-12">
                            <h4>{item.itemName}</h4>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>                    
                ))
                }
            </div>
            </div>
        </div>



        // <div>
        //     {items.map(item => (
        //         <ul>
        //             <li>{item.itemName}</li>
        //         </ul>
        //     ))}
        // </div>
    )
}

export default MenuPage

