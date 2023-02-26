import React from "react"
import Navbar from "./Navbar"
class Layout extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
      </>
    )
  }
}
export default Layout;
