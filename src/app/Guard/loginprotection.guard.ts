import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginprotectionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dataLogada = localStorage.getItem('apiUsuarios');
  const checkboxMarcada= localStorage.getItem('valor')
  if(dataLogada !==null){
    return true;
  }
  else{
    router.navigateByUrl('login')
  }

 
  return true;



 
};
