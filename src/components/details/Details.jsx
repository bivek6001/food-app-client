import React from "react";
import { Link, useParams } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'react-toastify/dist/ReactToastify.min.css';
import { FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../redux/product/productSlice";
import { addItem } from "../../redux/cart/cartSlice";
import Header from "../header/Header";
import Footer from "../footer/Footer";
export default function Details() {
  // const [product,setProduct]= useState([])
  const { id } = useParams();
  const dispatch = useDispatch();

  const dipatch = useDispatch();
  useEffect(() => {
    //
    dipatch(fetchProductById(id));
  }, []);

  const product = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.user.user);

  function handleCart(product, user) {
    const cartItem = product;
    console.log(cartItem);
    dispatch(addItem(cartItem));
    toast.success("item added successfully");
  }
  console.log(product);

  return (
    <>
      <Header />
      <ToastContainer />
      {product.map((p) => {
        return (
          <>
            <div className="hidden sm:block">
              <div className="parent  flex justify-center items-center ">
                <div className="left w-[55%] border-[1px] h-[100%]">
                  <div className="big-image">
                    <img src={p.url} alt="" className="w-[600px] h-[500px]" />
                  </div>

                  {/* <div className="images flex justify-center items-center ">
        

        <img src={p[0].images[1]} alt=""  onClick={()=>{
          setImage(p[0].images[1])
        }} style={{width:"100px"}}/>
        <img src={p[0].images[2]} alt="" style={{width:"100px"}} onClick={()=>{
          setImage(p[0].images[2]) 
        }} />
        <img src={p[0].images[3]} alt="" style={{width:"100px"}} onClick={()=>{
          setImage(p[0].images[3] )
        }}  />
        <img src={p[0].images[4]} alt="" style={{width:"100px"}} onClick={()=>{
          setImage(p[0].images[4] )
        }} />
      </div> */}

                  <h1 className="text-2xl font-medium"></h1>
                  <h3 className="text-sm font-bold mt-2">Unit</h3>
                  <p className="text-gray-600">200g</p>
                  <h3 className="text-sm font-bold mt-2">Shelf life</h3>
                  <p className="text-gray-600">5 months</p>
                  <h3 className="text-sm font-bold mt-2">
                    Manufacturer Details
                  </h3>
                  <p className="text-gray-600">
                    Haldiram Foods International Private Ltd, 20 Km Stone, Vill.
                    Gumthala, Bhandara Road, Nagpur - 441104 (M.S.)
                  </p>
                  <h3 className="text-sm font-bold mt-2">Country Of Origin</h3>
                  <p className="text-gray-600">India</p>
                  <h3 className="text-sm font-bold mt-2">FSSAI License</h3>
                  <p className="text-gray-600">10014051000910</p>
                  <h3 className="text-sm font-bold mt-2">
                    Customer Care Details
                  </h3>
                  <p className="text-gray-600">Email: info@blinkit.com</p>
                  <h3 className="text-sm font-bold mt-2">Return Policy</h3>
                  <p className="text-gray-600">
                    This Item is non-returnable. For a damaged, defective,
                    incorrect or expired item, you can request a replacement
                    within 72 hours of delivery. In case of an incorrect item,
                    you may raise a replacement or return request only if the
                    item is sealed/ unopened/ unused and in original condition.
                  </p>
                  <h3 className="text-sm font-bold mt-2">Seller</h3>
                  <p className="text-gray-600">
                    SUPERWELL COMTRADE PRIVATE LIMITED
                  </p>
                  <h3 className="text-sm font-bold mt-2">Seller FSSAI</h3>
                  <p className="text-gray-600">10822005001573</p>
                  <h3 className="text-sm font-bold mt-2">Description</h3>
                  <p className="text-gray-600">
                    Haldiram's Classic Salted Peanuts, a classic combination of
                    roasted peanuts with the right amount of salt. A perfect
                    crunchy snack to binge on anytime of the day.
                  </p>
                  <h3 className="text-sm font-bold mt-2">Disclaimer</h3>
                  <p className="text-gray-600">
                    Every effort is made to maintain the accuracy of all
                    information. However, actual product packaging and materials
                    may contain more and/or different information. It is
                    recommended not to solely rely on the information presented.
                  </p>
                </div>

                {/* Right side of the page */}
                <div className="right w-[45%] pt-3 pl-10  sticky top-1">
                  <p className="text-4xl font-bold">{p.item}</p>

                  {/* <h1 className="font-bold text-2xl"></h1> */}
                  {/* <span className="bg-gray-300 text-black font-semibold p-1">{p.tim</span> */}
                  <hr className=" m-3" />
                  <div className="details flex justify-between items-center">
                    <div className="left">
                      <p className="text-base font-semibold ">{p.restaurant}</p>
                      <span>
                        MRP <p className="font-bold">₹{p.price} </p>
                        <p>(Inclusive of all taxes)</p>
                      </span>
                    </div>
                    <div className="right">
                      <button
                        className="p-3 bg-[#32BCCC] text-white rounded-xl w-[134px] font-bold"
                        onClick={() => {
                          // toast.success("item added to cart")
                          handleCart(p, user);
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="ad mt-6">
                    <h1 className="font-bold">Why order from goFood?</h1>
                    <div className="box flex items-center justify-center gap-4">
                      <div className="left flex justify-center items-center flex-col gap-1">
                        <div className="left-delivery w-[56px] h-[56px]">
                          <img
                            className="w-[56px] h-[56px]"
                            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
                            alt=""
                          />
                        </div>
                        <div className="left-price w-[56px] h-[56px]">
                          <img
                            className="w-[56px] h-[56px]"
                            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
                            alt=""
                          />
                        </div>
                        <div className="left-wideAssotment w-[56px] h-[56px]">
                          <img
                            className="w-[56px] h-[56px]"
                            src="https://blinkit.com/8d522e40eef136ba3498.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="right-delivery m-2 ">
                          <div className="heading  text-black-600 text-sm">
                            Superfast Delivery
                          </div>
                          <p className="text-gray-600 text-sm">
                            Get your order delivered to your doorstep at the
                            earliest from dark stores near you.
                          </p>
                        </div>
                        <div className="right-price m-2 ">
                          <div className="heading text-black-600 text-sm">
                            Best Prices & Offers
                          </div>
                          <p className="text-black-600 text-sm">
                            Best price destination with offers directly from the
                            manufacturers.
                          </p>
                        </div>
                        <div className="right-Assotment m-2">
                          <div className="heading text-black-600 text-sm">
                            Wide Assortment
                          </div>
                          <p className="text-black-600 text-sm">
                            Choose from 5000+ products across food, personal
                            care, household & other categories.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* {right side wala div ends here} */}
                </div>
              </div>
            </div>
            <div className=" sm:hidden mobile-display p-4 flex flex-col justify-center">
              <div className="product ">
                <img
                  src={p.url}
                  alt=""
                  className="h-[200px] w-[360px] rounded-lg"
                />
              </div>
              <div className="details flex justify-between">
                <div className="left">
                  <span className="my-3 font-bold text-xl">{p.item}</span>
                  <span>
                    <p className="font-semibold">by {p.restaurant}</p>
                  </span>
                </div>
                <div className="right">
                  <span className="font-medium"> ₹{p.price } (Inclusive of all taxes)</span>
                </div>
              </div>

              <button
                className="p-3 bg-[#32BCCC] my-3 text-white rounded-xl w-[134px] font-bold"
                onClick={() => {
                  // toast.success("item added to cart")
                  handleCart(p, user);
                }}
              >
                ADD TO CART
              </button>
              <p className="font-bold text-xl"> Food Description :</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident dolorum magni numquam, laboriosam, quibusdam dicta consequuntur saepe inventore nulla, debitis sit magnam perferendis unde? Veritatis est expedita laboriosam tenetur deleniti. Est, nisi earum consequuntur dignissimos laboriosam reiciendis magnam vero mollitia! Sit, incidunt perferendis modi rem et, quae consequatur sequi laboriosam quia magni, omnis minus impedit ducimus! Assumenda, amet doloremque neque optio esse quibusdam iste iure accusamus hic consequatur atque voluptatem, dolores exercitationem quasi rem, distinctio modi! Placeat explicabo officia quisquam nisi inventore nesciunt modi minima. Quae doloribus hic nam ducimus quod? Eius praesentium voluptatem eum, tempora quibusdam sint culpa officiis harum alias perferendis earum a vero, sapiente accusantium quae doloremque cupiditate illo nemo? Necessitatibus beatae facilis sed aperiam sapiente quidem dolore amet cupiditate rem saepe? Vel quam ad, beatae laboriosam illum obcaecati odit aperiam magni soluta, rerum unde neque!</p>
            </div>
          </>
        );
      })}

      <Footer />
    </>
  );
}
