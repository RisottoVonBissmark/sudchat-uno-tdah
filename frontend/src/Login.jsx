import { useState } from "react";
import { User, Hash, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const defaultBg = "bg-[#bf0000]";
  const belgianBg = "bg-gradient-to-r from-black via-yellow-500 to-red-500";

  const [pseudo, setPseudo] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [bgClass, setBgClass] = useState(defaultBg); // Fond rouge par défaut

  const handleJoin = () => {
    if (!pseudo.trim() || !joinCode.trim()) return;
    alert(`Rejoindre la partie ${joinCode} en tant que ${pseudo}`);
  };

  const handleHost = () => {
    if (!pseudo.trim()) return;
    alert(`Création d'une partie en tant que ${pseudo} (hôte)`);
    navigate("/waitingRoom");
  };

  const enableBelgianBackground = () => {
    setBgClass(belgianBg);
  };

  const disableBelgianBackground = () => {
    setBgClass(defaultBg);
  };

  const isBelgianActive = bgClass === belgianBg;

  return (
    <div className={`min-h-screen ${bgClass} flex flex-col items-center justify-center px-6 py-12 text-white`}>
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-8xl md:text-9xl font-black text-yellow-300 drop-shadow-2xl">
          EEN TDAH
        </h1>
        <p className="text-2xl md:text-3xl mt-4 text-red-200 font-bold">
          Jeu multijoueur explosif
        </p>
      </div>

      {/* Contenu principal - prend toute la largeur utile */}
      <div className="w-full max-w-2xl">
        {/* Pseudo */}
        <div className="mb-10">
          <label className="block text-xl font-bold mb-3">Ton pseudo</label>
          <div className="relative">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-300 w-8 h-8" />
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              placeholder="Entre ton pseudo..."
              className="w-full pl-16 pr-6 py-5 bg-black/30 backdrop-blur-md border-2 border-yellow-500 rounded-2xl text-white text-xl placeholder-yellow-200/70 focus:outline-none focus:border-yellow-300 transition"
              maxLength={20}
            />
          </div>
        </div>

        <div className="space-y-10">

          {/* Rejoindre une partie */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Hash className="w-8 h-8" />
              Rejoindre une partie
            </h3>
            <div className="flex gap-4">
              <input
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="CODE"
                maxLength={6}
                className="flex-1 text-center text-3xl font-bold py-5 bg-black/40 backdrop-blur border-2 border-white/50 rounded-2xl tracking-widest"
              />
              <button
                onClick={handleJoin}
                disabled={!pseudo || !joinCode}
                className="px-10 py-5 bg-green-600 hover:bg-green-500 disabled:bg-gray-700 text-white font-black text-xl rounded-2xl transition transform hover:scale-105 disabled:scale-100"
              >
                GO !
              </button>
            </div>
          </div>

          <div className="text-center text-4xl font-black text-white/50">OU</div>

          {/* Créer une partie */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              Créer une partie
            </h3>
            <button
              onClick={handleHost}
              disabled={!pseudo}
              className="w-full py-6 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-500 hover:to-yellow-500 disabled:from-gray-700 disabled:to-gray-600 text-white font-black text-3xl rounded-2xl transition transform hover:scale-105 disabled:scale-100 shadow-2xl"
            >
              HÉBERGER LA PARTIE
            </button>
          </div>

          <div className="text-center text-4xl font-black text-white/50">OU</div>

          {/* Fond belge avec option de désactivation */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              {isBelgianActive ? "Fond belge activé" : "Je veux un fond belge"}
            </h3>
            <button
              onClick={isBelgianActive ? disableBelgianBackground : enableBelgianBackground}
              className="w-full py-6 bg-black/50 hover:bg-black/70 text-yellow-400 font-black text-2xl rounded-2xl border-4 border-yellow-500 transition transform hover:scale-105"
            >
              {isBelgianActive ? "DÉSACTIVER" : "ACTIVER"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-yellow-300 font-bold">
          Bonne game à toi !
        </p>
      </div>
    </div>
  );
}