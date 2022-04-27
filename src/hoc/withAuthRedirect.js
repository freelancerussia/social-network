import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => ({
   isAuthMe: state.auth.isAuthMe
})
export const withAuthRedirect = (Component) => {
   let RedirectContainer = (props) => {
      if (!props.isAuthMe) return <Navigate to="/login/" />
      return <Component {...props}></Component>
   }
   let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectContainer);
   return ConnectAuthRedirectComponent;
}