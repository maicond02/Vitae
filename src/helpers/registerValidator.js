const  registerValidator = async (name, email, password) => { 
    try {
      login = {
          username: name.value,
          email: email.value,
          password: password.value,
          role: 'USER'
      };
      console.info("Dados de Register:", login);

      const response = await  fetch(`http://192.168.0.113:8080/auth/register`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",  
          },
          body: JSON.stringify(login), // Converte o objeto para JSON
      });

      if (!response.ok) {
          throw new Error(`Erro ao buscar dados no OK: ${response.statusText}`);
      }

      const data = await  response.status;
      return data; 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error; // Repassa o erro para o componente que chamou
    }
}

export { registerValidator };