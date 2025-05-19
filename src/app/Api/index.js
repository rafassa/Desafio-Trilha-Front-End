import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));


// 📌 Rota de produtos
const resposta = [
  { nome: "macarrão", preco: 5, quantidade: 1, img: "http://localhost:3000/img/macarrao.png" },
  { nome: "feijão", preco: 6, quantidade: 1, img: "http://localhost:3000/img/feijao.png" },
  { nome: "arroz", preco: 8, quantidade: 1, img: "http://localhost:3000/img/arroz.png" },
];

app.get("/", (req, res) => res.json(resposta));

// 📌 Rota de fretes
const frete = [
  { nome: "frete1", multiplicador: 1.1 },
  { nome: "frete2", multiplicador: 1.3 },
  { nome: "frete3", multiplicador: 1.4 },
];

app.get("/frete", (req, res) => res.json(frete));

// 📌 Rota de login
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({ message: "O campo de usuário ou senha não foi preenchido!" });
  }
  
  if (usuario !== "admin" || senha !== "123456") {
    return res.status(401).json({ message: "Usuário ou senha incorretos!" });
  }

  return res.status(200).json({ id: 1, usuario: "admin", email: "admin@email.com" });
});

// 📌 Rota de veículos
const vehicles = [
  { id: 1, vehicle: "Ranger", volumetotal: 145760, connected: 70000, softwareUpdates: 27550, img: "http://localhost:3000/img/ranger.png" },
  { id: 2, vehicle: "Mustang", volumetotal: 1500, connected: 500, softwareUpdates: 750, img: "http://localhost:3000/img/mustang.png" },
  { id: 3, vehicle: "Territory", volumetotal: 4560, connected: 4000, softwareUpdates: 3050, img: "http://localhost:3000/img/territory.png" },
  { id: 4, vehicle: "Bronco Sport", volumetotal: 7560, connected: 4060, softwareUpdates: 2050, img: "http://localhost:3000/img/broncoSport.png" },
];

app.get("/vehicles", (req, res) => res.json({ vehicles }));

// 📌 Rota de dados dos veículos
app.post("/vehicleData", (req, res) => {
  const { vin } = req.body;

  const vehicleData = {
    "2FRHDUYS2Y63NHD22454": { id: 1, odometro: 23344, nivelCombustivel: 76, status: "on", lat: -12.2322, long: -35.2314 },
    "2RFAASDY54E4HDU34874": { id: 2, odometro: 130000, nivelCombustivel: 19, status: "off", lat: -12.2322, long: -35.2314 },
    "2FRHDUYS2Y63NHD22455": { id: 3, odometro: 50000, nivelCombustivel: 90, status: "on", lat: -12.2322, long: -35.2314 },
    "2RFAASDY54E4HDU34875": { id: 4, odometro: 10000, nivelCombustivel: 25, status: "off", lat: -12.2322, long: -35.2314 },
    "2FRHDUYS2Y63NHD22654": { id: 5, odometro: 23544, nivelCombustivel: 76, status: "on", lat: -12.2322, long: -35.2314 },
    "2FRHDUYS2Y63NHD22854": { id: 6, odometro: 23574, nivelCombustivel: 76, status: "on", lat: -12.2322, long: -35.2314 },
  };

  if (!vehicleData[vin]) {
    return res.status(400).json({ message: "Código VIN utilizado não foi encontrado!" });
  }

  return res.status(200).json(vehicleData[vin]);
});

const carouselImg =[
  {img: "http://localhost:3000/img/XLCabine.jpg", descricao:"Esta é a nova Ranger Ford 2022.Verifique as novidades"},
  {img: "http://localhost:3000/img/xlsdiesel.jpg", descricao:"Ford a nossa historia"},
  {img: "http://localhost:3000/img/storm.jpg", descricao:"Nova Ford Bronco Sport 2022"},
]
app.get("/carouselImg", (req, res) => res.json(carouselImg));


// Inicializa o servidor
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
