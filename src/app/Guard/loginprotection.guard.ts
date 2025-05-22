import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginprotectionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dataLogada = sessionStorage.getItem('apiUsuarios');
 const dataLogadaChecked = localStorage.getItem('valorData')
  if(dataLogada !==null){
    return true;
  }else if(dataLogadaChecked !==null){
    return true
  }
  else{
    router.navigateByUrl('login')
  }
  return true;



 
};
