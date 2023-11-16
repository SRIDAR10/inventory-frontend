import HomeNavBar from '@/components/inventory/HomeNavBar';
import React,{ReactNode} from 'react';

interface Props {
    children: ReactNode;
  }

const layout = ({children}:Props) => {
  return (
    <>
    <HomeNavBar/>
    {children}
    </>
  )
}

export default layout