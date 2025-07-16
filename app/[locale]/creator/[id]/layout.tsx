import SingleCreator from '@/modules/SingleCreator';
import { getRequest } from '@/service/getRequest';
import React, { FC, ReactNode } from 'react'

const CreatorLayout: FC<{ children: ReactNode, params: Promise<{ id: string }> }> = async ({ children, params }) => {
  const { id } = await params
  
  const singleCreateData = await getRequest(`/user/${id}`);
  return (
    <>
      <SingleCreator singleCreateData={singleCreateData} id={id} />
      {children}
    </>
  )
}

export default CreatorLayout