import React, {useEffect, useState} from 'react';

import Avatar from '../assets/Avatar.png';
import Box from '../assets/box.png';

const Home = () => {

    const [eyeOpen, setEyesOpen] = useState(false);
    const [elementOne, setElementOne] = useState(true);
    const [elementTwo, setElementTwo] = useState(false);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setElementOne(false);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setElementTwo(true);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className='bg-[#ECFAF5] min-h-screen pb-24'>
      <header className='fixed top-0 h-16 w-full bg-[#ECFAF5] px-2 py-3 z-30 flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='mobile:w-[40px] mobile:h-[40px] w-[35px] h-[35px] mobile:mr-5 mr-2'>
                    <img src={Avatar} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
                <p className='font-semibold text-md mobile:text-xl'>Hello, Haryomi...</p>
            </div>
            <div className='flex ml-6 mobile:gap-8 gap-6 pr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc-scan" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
            </div>
      </header>
      <main className='w-full pt-[70px] px-3'>
            <div className='bg-[#30C15C] w-full h-[225px] rounded-2xl mobile:px-5 px-3 py-3 text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[13px] mobile_small:text-[15px]'>Available Balance</p>
                        {
                            eyeOpen ? (
                                <div>
                                    <svg onClick={() => {setEyesOpen(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <svg onClick={() => {setEyesOpen(true)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex items-center'>
                        <p className='text-[13px] mobile_small:text-[15px]'>Transaction history</p>
                        <span className="material-symbols-outlined text-[17px] mobile_small:text-[20px]">
                            chevron_right
                        </span>
                    </div>
                </div>
                {/*  */}
                <div>
                      <p className='text-4xl font-semibold py-3'>{eyeOpen ? '₦10,000,000.00' : '****'}</p>
                      <p>& Cashback <sup>{eyeOpen ? '₦100.90': '****'}</sup></p>
                </div>
                <div>
                    <ul className='flex justify-center gap-12 mt-5'>
                        <li className='flex flex-col items-center'>
                            <div className='bg-white w-[40px] flex items-center justify-center text-[#30C15C] rounded-lg h-[40px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg>
                            </div>
                            <p className='mobile_small:text-sm text-[13px] mt-2'>Add Money</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className='bg-white w-[40px] flex items-center justify-center text-[#30C15C] rounded-lg h-[40px]'>
                                <span className="material-symbols-outlined text-[17px]">
                                    sync_alt
                                </span>
                            </div>
                            <p className='mobile_small:text-sm text-[13px] mt-2'>Transfer</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className='bg-white w-[40px] flex items-center justify-center text-[#30C15C] rounded-lg h-[40px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                </svg>
                            </div>
                            <p className='mobile_small:text-sm text-[13px] mt-2'>Withdraw</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <div className='mt-5 w-full flex items-center justify-center'>
            <ul className='flex items-center gap-1'>
                <li className='h-[2px] w-[18px] bg-black'></li>
                <li className='h-[2px] w-[7px] bg-gray-700'></li>
                <li className='h-[2px] w-[7px] bg-gray-700'></li>
            </ul>
        </div>
        {/*  */}
        <section className='w-full h-[80px] flex items px-3 mt-3'>
            <div className='w-full h-full bg-white custom_shadow px-2 rounded-xl flex items-center gap-2 relative'>
                <div className='mobile_small:h-[70px] mobile_small:w-[70px] h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#ECFAF5]'>
                    <img src={Box} className='h-[90%]' alt="" />
                </div>
                <div>
                    <p className='font-semibold mobile_small:text-lg text-sm'>Earn ₦300 Bonus</p>
                    <p className='mobile_small:text-sm text-[13px]'>Get your Pay Me Acct for collection</p>
                </div>
                <p className='absolute top-0 right-0 px-2 bg-[#e6e8e8] rounded-tr-xl rounded-bl-xl font-semibold cursor-pointer'>x</p>
            </div>
        </section>
        {/*  */}
        <section className='px-3 mt-4 w-full'>
            <div className='bg-white w-full min-h-[210px] rounded-2xl px-5 pt-4 pb-2 custom_shadow'>
                <ul className='flex items-center justify-between flex-wrap gap-x-6 gap-y-4'>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center py-[11px]'>
                            <div className='h-full w-1/2 bg-[#30C15C] flex items-center justify-center rounded relative'>
                                <span className="material-symbols-outlined text-white text-[15px]">
                                    signal_cellular_alt
                                </span>
                                <span className='absolute bg-white bottom-[3px] w-[5px] h-[2px]'></span>
                            </div>
                        </div>
                        <p className = "text-[14px]">Airtime</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center py-[11px]'>
                            <div className='h-full w-1/2 bg-[#30C15C] flex items-center justify-center rounded relative'>
                                <span className="material-symbols-outlined text-white text-[15px] rotate-90">
                                    sync_alt
                                </span>
                                <span className='absolute bg-white bottom-[3px] w-[5px] h-[2px]'></span>
                            </div>
                        </div>
                        <p className = "text-[14px]">Data</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center relative'>
                            <span className="material-symbols-outlined text-white z-10 text-[31px] icon_filled rotate-90">
                                sports_soccer
                            </span>
                            <div className='absolute w-[28px] h-[29px] bg-[#30C15C] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                
                            </div>
                        </div>
                        <p className = "text-[14px]">Betting</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center py-[11px]'>
                            <div className='h-full w-1/2 bg-[#30C15C] flex items-center justify-center rounded relative rotate-90'>
                                <span className="material-symbols-outlined text-white text-[15px] rotate-[270deg]">
                                    play_arrow
                                </span>
                                <span className='absolute bg-white bottom-[4px] left-[4px] w-[5px] h-[2px]'></span>
                            </div>
                        </div>
                        <p className = "text-[14px]">TV</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#30C15C" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9 mt-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <p className = "text-[14px]">Electricity</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center'>
                            <div className='h-1/2 w-1/2 bg-[#30C15C] flex items-center justify-center relative rounded-full'>
                                <span className="material-symbols-outlined text-white text-lg mt-[2px]">
                                    wifi
                                </span>
                            </div>
                        </div>
                        <p className = "text-[14px]">Internet</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center'>
                            <span className="material-symbols-outlined text-[#30C15C] icon_filled text-3xl">
                                school
                            </span>
                        </div>
                        <p className = "text-[14px]">School&Exam</p>
                    </li>
                    <li className='flex flex-col gap-2 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#ECFAF5] shadow-md rounded-full flex items-center justify-center'>
                            <div className='h-[60%] w-[60%] bg-[#30C15C] flex items-center justify-center relative rounded-full'>
                                <span className="material-symbols-outlined icon_filled text-white text-xl">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                        <p className = "text-[14px]">More</p>
                    </li>
                </ul>
            </div>
        </section>
        {/*  */}
        <section className='w-full h-[40px] flex items px-3 mt-3'>
            <div className='w-full h-full bg-white custom_shadow px-2 rounded-xl flex items-center justify-between relative'>
                <div className='h-full flex items-center gap-1 mobile_small:gap-2'>
                    <span className="material-symbols-outlined text-[#30C15C] text-[17px] mobile_small:text-[20px] ">
                        campaign
                    </span>
                    <div className='text-sm overflow-hidden flex flex-col justify-center'>
                        <p className={`h-full text-[11px] mobile_small:text-sm ${elementOne ? 'block' : 'hidden'}`}>Earn up to ₦800 per referral</p>
                        <p className={`h-full text-[11px] mobile_small:text-sm ${elementTwo ? 'block' : 'hidden'}`}>Upgrade to KYC2 with higher transaction limit</p>
                    </div>
                </div>
                <span className="material-symbols-outlined text-[#c2c3c3] text-sm mobile_small:text-[20px] ">
                    chevron_right
                </span>
            </div>
        </section>
        {/*  */}
        <section className='w-full h-[80px] flex items px-3 mt-3'>
            <div className='w-full h-full bg-white custom_shadow px-2 rounded-xl flex items-center gap-3 relative'>
                <div className='mobile_small:w-[60px] mobile_small:h-[60px] w-[40px] h-[40px] bg-[#ECFAF5] border border-[#30C15C] shadow-md rounded-full flex items-center justify-center py-[11px]'>
                    <div className='h-full w-1/2 border border-[#30C15C] flex items-center flex-col justify-between rounded relative'>
                        <span className="material-symbols-outlined text-[#30C15C] text-[15px] mobile_small:text-[19px]">
                            signal_cellular_alt
                        </span>
                        <div className='w-full h-[8px] flex items-center justify-center bg-[#30C15C]'>
                            <span className='bg-white w-[6px] h-[3px]'></span>
                        </div>
                        </div>
                    </div>
                <div>
                    <p className='font-semibold mobile:text-lg text-sm'>Buy airtime, Get 3% cashback</p>
                    <p className='mobile_small:text-sm text-[13px] '>Get 3% cashback instantly on...</p>
                </div>
                <p className='absolute top-0 right-0 px-2 bg-[#e6e8e8] rounded-tr-xl rounded-bl-xl font-semibold cursor-pointer'>x</p>
            </div>
        </section>
        <div className='fixed w-full bottom-0 h-[80px] custom_shadow_two bg-white'>
            <ul className='w-full mobile_small:px-7 px-3 pt-3 flex items-center justify-between'>
                <li className='flex flex-col items-center'>
                    <div className='mobile_small:w-[40px] w-[30px] h-[30px] mobile_small:h-[40px] w-[30px] h-[30px] rounded-full bg-[#30C15C] flex items-center justify-center text-xl text-white font-[Quicksand]'>
                        P
                    </div>
                    <p className='mobile_small:text-sm text-[13px]'>Home</p>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='mobile_small:w-[40px] w-[30px] h-[30px] mobile_small:h-[40px] w-[30px] h-[30px] flex items-center justify-center'>
                        <span className="material-symbols-outlined text-[#bebfb0] text-[32px] rotate-180">
                            pentagon
                        </span>
                        <span className="material-symbols-outlined text-[#777676] absolute rotate-90 mt-2">
                            chevron_right
                        </span>
                    </div>
                    <p className='mobile_small:text-sm text-[13px]'>Rewards</p>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='mobile_small:w-[40px] w-[30px] h-[30px] mobile_small:h-[40px] w-[30px] h-[30px] flex items-center justify-center'>
                        <div className='w-[30px] h-[28px] border border-[#777676] flex items-center justify-center rounded'>
                            <span className="material-symbols-outlined text-[#777676]">
                                show_chart
                            </span>
                        </div>
                    </div>
                    <p className='mobile_small:text-sm text-[13px]'>Finances</p>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='mobile_small:w-[40px] w-[30px] h-[30px] mobile_small:h-[40px] w-[30px] h-[30px] flex items-center justify-center'>
                        <span className="material-symbols-outlined text-[#777676] text-[34px]">
                                credit_card
                        </span>
                    </div>
                    <p className='mobile_small:text-sm text-[13px]'>Cards</p>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='mobile_small:w-[40px] w-[30px] h-[30px] mobile_small:h-[40px] w-[30px] h-[30px] flex items-center justify-center'>
                        <div className='w-[30px] h-[30px] border border-[#777676] rounded-full flex items-end justify-center pb-2'>
                            <span className='w-[10px] h-[3px] bg-[#777676]'></span>
                        </div>
                    </div>
                    <p className='mobile_small:text-sm text-[13px]'>Me</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home;
