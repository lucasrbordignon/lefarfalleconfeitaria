import { Button } from 'antd';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const FloatingButton: React.FC = () => {
  
  return (
    <Button
      href="https://wa.me/5515997205311?text=Oiii%21%20Estou%20pensando%20em%20pedir%20um%20bolo%2C%20mas%20n%C3%A3o%20sei%20exatamente%20o%20que.%20Voc%C3%AA%20pode%20me%20ajudar%20com%20algo%20surpreendente%3F"
      type='primary'
      shape='circle'
      icon={<AiOutlineWhatsApp size={24}/>}
      size='large'
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: '#25d366'
      }}
    />
  )
}