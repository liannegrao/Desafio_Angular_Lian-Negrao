export default function handler(req, res) {
  // Apenas aceitar método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { nome, senha } = req.body;

    // Validação básica
    if (!nome || !senha) {
      return res.status(400).json({
        message: "O campo de usuário ou senha não foi preenchido!"
      });
    }

    // Verificação de credenciais (simples para demo)
    if (nome !== "admin" || senha !== "123456") {
      return res.status(401).json({
        message: "O nome de usuário ou senha está incorreto ou não foi cadastrado!"
      });
    }

    // Login bem-sucedido
    return res.status(200).json({
      id: 1,
      nome: "admin",
      email: "admin@email.com"
    });

  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!",
      error: String(error)
    });
  }
}
