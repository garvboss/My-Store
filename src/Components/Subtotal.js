// import React from 'react'
// import {useStateValue} from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
// function Subtotal() {
//   const [{basket}, dispatch] = useStateValue();
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//           <p>
//             Subtotal ({basket.length} items): <strong>{``}</strong>
//           </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" />This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={0}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"₹"}
//       />
//       <button>Proceed to Checkout</button>
//     </div>
//   )
// }

// export default Subtotal
