import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
   return {
      state: state.navBar
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;