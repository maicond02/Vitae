// URL base para a API do Spring Boot
const API_URL = "http://192.168.0.113:8080"; // Substitua com a URL real da sua API
const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Imxlb0BnbWFpbC5jb20iLCJleHAiOjE3MzMyMzIyNjR9.pm1PxKVUgow1RIyXTDZZjgLNT5LgnxbCvEWs88JqUT4";
// Função para buscar dados (GET)
const getData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${yourToken}`  
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error; // Repassa o erro para o componente que chamou
    }
};

const sendData = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Defina o tipo de conteúdo
                "Authorization": `Bearer ${yourToken}`  
            },
            body: JSON.stringify(data), // Converte o objeto para JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar dados: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
};

const updateData = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // Define o tipo de conteúdo
                "Authorization": `Bearer ${yourToken}`  
            },
            body: JSON.stringify(data), // Converte o objeto para JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
};

const deleteData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", // Defina o tipo de conteúdo, se necessário
                "Authorization": `Bearer ${yourToken}`  
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao excluir dados: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Erro ao excluir dados:", error);
        throw error;
    }
}; 

export { service };

const service = {
    getData,
    sendData,
    updateData,
    deleteData,
    loginUser,
    registerUser
};

export default service;