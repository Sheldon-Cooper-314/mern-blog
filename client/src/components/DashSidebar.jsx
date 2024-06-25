import { Sidebar } from 'flowbite-react'
import React from 'react'
import {HiUser, HiArrowSmRight} from 'react-icons/hi'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function DashSidebar() {
  const location= useLocation();
  const [tab,setTab]= useState('');
  useEffect(()=>{
    const urlParams= new URLSearchParams(location.search)
    const tabFromUrl= urlParams.get('tab');
    if(tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>

            <Link>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor='dark'>
                    Profile
                </Sidebar.Item>
            </Link>

                <Sidebar.Item icon={HiArrowSmRight} label={'User'} labelColor='dark'>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>    
    </Sidebar>

  )
}
