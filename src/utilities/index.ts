export const validateEmail = (value: string) => {
  let error;
  if (!value) {
      error = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Email inválido';
  }
  return error;
};

export const validateUsername = (value: string) => {
  let error;
  if (!value) {
      error = 'Campo requerido';
  }else if(value.length < 4) {
      error = 'Debe contener más de 3 caracteres'
  }
  return error;
};

export const validateMinMaxLength= (value: string, min = 0 , max?: number) => {
  let error;

  if(!value && min > 0) {
      error = "Campo requerido";
  }else if(value && value.length < min) {
      error = `El campo debe tener al menos ${min} letras`;
  }else if(value && max && value.length > max) {
      error = `El campo debe tener máximo ${max} letras`;
  }

  return error;
};

export const validatePhoneNumber = (value: string) => {
  let error;
  if(!value) {
      error = "Campo requerido";
  }else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value)) {
      error = "Número inválido"
  }

  return error;
};

export const getToday = () => {
  let today: Date | string = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  let months = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  
  return today = dd + '/' + months[Number(mm) - 1] + '/' + yyyy;

};

export const getToken = (): string | null => {
  return localStorage.getItem("apiKey");
};

export const setToken = (val: string) => {
  localStorage.setItem("apiKey", val);
};

export const deleteToken = () => {
  localStorage.removeItem("apiKey");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const setUser = (val: string) => {
  localStorage.setItem("user", val);
};

export const setLocalStorageParam = (param: string, value: string) => {
  localStorage.setItem(param, value);
};

export const getLocalStorageParam = (param: string) : string|null => {
  return localStorage.getItem(param);
};

export const setUserParam = (param: string, value: string) => {
  let user: any = getUser() || {};
  user = JSON.parse(user);
  user[param] = value;
  user = JSON.stringify(user);
  setUser(user);
};

export const deleteUser = () => {
  localStorage.removeItem("user");
};

export const existToken = () => {
  return !!localStorage.getItem("apiKey") && localStorage.getItem("apiKey") !== null;
};