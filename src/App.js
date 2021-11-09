import React ,{useContext} from 'react';

import AuthContextProvider ,{AuthContext} from './Context/AuthContext';
import { useState } from 'react';
import NavRoutes from './Routes/NavRoutes';




const App = ()=> {


  
  
  
  window.onclick = function(e)
  {
    if (!e.target.matches('.dropdown-menu')) {
      //   var dropdowns = document.getElementsByClassName("dropdown-content");
      var dropdowns = window.document.getElementById("myDropdown");
      dropdowns.classList.remove('show');
    }

      var modal = window.document.getElementById("myModal");


      if(e.target==modal)
      {   
          modal.style.display = "none";
          document.body.style.overflowY = 'auto'
      }
      if (!e.target.matches('#hero-input')) {
        //   var dropdowns = document.getElementsByClassName("dropdown-content");
        var inputdropdown = document.getElementById("myDropdown2");
        // inputdropdown.style.display = 'none'
        document.getElementById("myDropdown2").classList.remove("input-show");
    
        // dropdowns.classList.remove('input-show');
        console.log(e.target)
        console.log('sdfsdf')
    
      }
  } 
  return (
    
    <>
    <AuthContextProvider >
        <NavRoutes />
    </AuthContextProvider>
    </>
  );
}

export default App;



