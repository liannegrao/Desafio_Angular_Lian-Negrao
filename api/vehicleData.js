export default function handler(req, res) {
  // Apenas aceitar método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { vin } = req.body;

    if (!vin) {
      return res.status(400).json({
        message: "Código VIN não fornecido!"
      });
    }

    // Simulação de busca por VIN (dados mock)
    switch (vin) {
      case "2FRHDUYS2Y63NHD22454":
        return res.status(200).json({
          id: 1,
          odometro: 23344,
          nivelCombustivel: 76,
          status: "ON",
          lat: -12.2322,
          long: -35.2314
        });

      case "2RFAASDY54E4HDU34874":
        return res.status(200).json({
          id: 2,
          odometro: 130000,
          nivelCombustivel: 19,
          status: "OFF",
          lat: -12.2322,
          long: -35.2314
        });

      case "2FRHDUYS2Y63NHD22455":
        return res.status(200).json({
          id: 3,
          odometro: 50000,
          nivelCombustivel: 90,
          status: "ON",
          lat: -12.2322,
          long: -35.2314
        });

      case "2RFAASDY54E4HDU34875":
        return res.status(200).json({
          id: 4,
          odometro: 10000,
          nivelCombustivel: 25,
          status: "OFF",
          lat: -12.2322,
          long: -35.2314
        });

      case "2FRHDUYS2Y63NHD22654":
        return res.status(200).json({
          id: 5,
          odometro: 23544,
          nivelCombustivel: 76,
          status: "ON",
          lat: -12.2322,
          long: -35.2314
        });

      case "2FRHDUYS2Y63NHD22854":
        return res.status(200).json({
          id: 6,
          odometro: 23574,
          nivelCombustivel: 76,
          status: "ON",
          lat: -12.2322,
          long: -35.2314
        });

      default:
        return res.status(400).json({
          message: "Código VIN utilizado não foi encontrado!"
        });
    }

  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!"
    });
  }
}
