export default function handler(req, res) {
  // Apenas aceitar método GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const vehicles = [
      {
        id: 1,
        vehicle: "Ranger",
        volumetotal: 145760,
        connected: 70000,
        softwareUpdates: 27550,
        img: "ranger.png"
      },
      {
        id: 2,
        vehicle: "Mustang",
        volumetotal: 1500,
        connected: 500,
        softwareUpdates: 750,
        img: "mustang.png"
      },
      {
        id: 3,
        vehicle: "Territory",
        volumetotal: 4560,
        connected: 4000,
        softwareUpdates: 3050,
        img: "territory.png"
      },
      {
        id: 4,
        vehicle: "Bronco Sport",
        volumetotal: 7560,
        connected: 4060,
        softwareUpdates: 2050,
        img: "broncoSport.png"
      }
    ];

    return res.status(200).json({ vehicles });

  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!"
    });
  }
}
