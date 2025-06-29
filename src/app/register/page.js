'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
  useEffect(() => {
    redirect('/register/1');
  }, []);
  
  return null; 
};

export default RegisterPage;
