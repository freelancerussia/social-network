import React from 'react';


class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: "q"
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false

      })
   }
   changeStatus = (e) => {
      this.setState({
         status: e.target.value
      })
      console.log(this.state);
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={(e) => { this.changeStatus(e) }} value={this.state.status} />
               </div>
            }

         </div>
      );
   }
}

export default ProfileStatus;