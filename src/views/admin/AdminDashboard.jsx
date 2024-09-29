import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import Chart from 'react-apexcharts'
import { Link } from "react-router-dom";


const AdminDashboard = () => {


    const state ={
        series: [
            {
                name: "Orders",
                data: [23,24,25,26,27,65,87,95,64,63,32,54],

            },
            {
                name: "Revenue",
                data: [83,24,25,26,87,65,88,95,68,63,32,55],

            },
            {
                name: "Sellers",
                data: [73,54,95,56,27,35,18,15,68,33,32,95],

            },
        ],
        options : {
            color: ['#181ee8', '#181ee8'],
            plotOptions : {
                radius : 30
            },
            chart : {
                background: 'transparent',
                foreColor : '#d0d2d6'
            },

            dataLabels : {
                enabled: false
            },
            strock : {
                show : true,
                curve : ['smooth','straight','stepline'],
                lineCap : 'butt',
                colors : '#f0f0f0',
                width : .5,
                dashArray : 0
            },
            xaxis : {
                categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',]
            },
            legend : {
                position : 'top'
            },
            responsive : [
                {
                    breakpoint : 565,
                    yaxis : {
                        categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',]
                    },
                    options : {
                        plotOptions : {
                            bar : {
                                horizontal : true
                            }
                        },
                         chart : {
                            height : "550px"
                         }

                    }
                }
            ]
        }
    }


  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-xl font-bold">ALL2.400.000</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#5c5a5a] flex justify-center items-center text-xl">
            <FcCurrencyExchange className="shadwo-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#decaf7] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#eb8686] flex justify-center items-center text-xl">
          <MdOutlineProductionQuantityLimits />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#dcf3d5] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-xl font-bold">20</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#9269f1] flex justify-center items-center text-xl">
            <FaUsers className="shadwo-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#ecc3d5] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-xl font-bold">64</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#57f398] flex justify-center items-center text-xl">
            <FaCartArrowDown className="shadwo-lg" />
          </div>
        </div>

      </div>

        <div className="w-full flex flex-wrap mt-7">
            <div className="w-full lg:w-7/12 lg:pr-3">
              <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
                <Chart options={state.options} series={state.series} type="bar" height={350}/>
              </div>
            </div>

           <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
           <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">Recent Seller Message</h2>
                <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
                <ol className="relative border-1 border-slate-600 ml-4">
                    <li className="mb-3 ml-6 ">
                        <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#d0d2d6] rounded-full z-10">
                            <img className="w-full rounded-full h-full shadow-lg" 
                        src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                        <div className="p-3 bg-slate-800 rounded-lg border border-slate-500 shadow-sm">
                        
                        <div className="flex justify-between items-center mb-2">
                         <Link className="text-md font-normal">Admin</Link>
                         <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">2 days ago</time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-500 rounded-lg border-slate-800">
                            How Are You

                        </div>
                        </div>
                    </li>

                    <li className="mb-3 ml-6 ">
                        <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#d0d2d6] rounded-full z-10">
                            <img className="w-full rounded-full h-full shadow-lg" 
                        src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                        <div className="p-3 bg-slate-800 rounded-lg border border-slate-500 shadow-sm">
                        
                        <div className="flex justify-between items-center mb-2">
                         <Link className="text-md font-normal">Admin</Link>
                         <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">4 days ago</time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-500 rounded-lg border-slate-800">
                            Where is my order?

                        </div>
                        </div>
                    </li>

                    <li className="mb-3 ml-6 ">
                        <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#d0d2d6] rounded-full z-10">
                            <img className="w-full rounded-full h-full shadow-lg" 
                        src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                        <div className="p-3 bg-slate-800 rounded-lg border border-slate-500 shadow-sm">
                        
                        <div className="flex justify-between items-center mb-2">
                         <Link className="text-md font-normal">Admin</Link>
                         <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">10 days ago</time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-500 rounded-lg border-slate-800">
                            Thank You!

                        </div>
                        </div>
                    </li>


                </ol>

            </div>

           </div>

           </div>

        </div>


    </div>
  );
};

export default AdminDashboard;
