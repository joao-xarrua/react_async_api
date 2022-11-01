import React from 'react'

const BtnProduto = ({texto, ...props}) => {
  return (
    <button style={{margin: '10px'}} {...props}>{texto}</button>
  )
}

export default BtnProduto
