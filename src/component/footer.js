import React from 'react'

export default function Footer() {
  return (
    <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
      <div>
        <h2>CUSTOMER</h2>
        <a href='/help' target='_blank' style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>HELP/FAQS</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        <h2>TOP CATEGORIES</h2>
        <a href='/men' target='_blank'  style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>MEN</a>
        <a href='/women' target='_blank'  style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>WOMEN</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>KIDS</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>BEAUTY</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>WATCHES</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>GIFT</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>HOME</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>LUXE</a>
        <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>BARGAIN</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        <h2>STORE AND SITES</h2>
            <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>ABOUT US</a>
            <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>CONTACT US</a>
            <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>CORPORATE SITE</a>
            <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>STORE LOCATOR</a>
            <a style={{color:"black",fontStyle:"normal",textDecoration:"none"}}>CAREERS</a>

      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        <h2>POLICIES</h2>
        <a>TERMS OF USE</a>
        <a>PRIVACY</a>
        <a>DELIVERY POLICY</a>
        <a>EXCHANGE & RETURN</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        <h2>FIRST CITIZEN</h2>
        <a>FIRST CITIZEN CLUB</a>
      </div>
    </div>
  )
}
