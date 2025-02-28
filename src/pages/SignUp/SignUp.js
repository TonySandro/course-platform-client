import React from 'react';
import { SignUpSection } from '../../components';
import { homeObjOne } from './Data';

function SignUp() {
  return (
    <>
      <SignUpSection {...homeObjOne} />
    </>
  );
}

export default SignUp;