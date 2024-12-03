const API_URL =  'http://192.168.0.113:8080';
 
 const LoginValidator = async (email, password) => {
  
  login = {
      email: email.value,
      password: password.value,
  };

  try {  
      const response = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",  
          },
          body: JSON.stringify(login), // Converte o objeto para JSON
      });

      if (response.status == 400) {
          return '';
      } 
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error; // Repassa o erro para o componente que chamou
  }
};

export { LoginValidator };