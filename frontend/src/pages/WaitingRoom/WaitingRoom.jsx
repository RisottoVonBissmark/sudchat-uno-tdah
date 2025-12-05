import { useState } from "react";
import UserWait from "./UserWait";

export default function WaitingRoom({ players: initialPlayers }){
    const [players, setPlayers] = useState(initialPlayers);
    
    const handleRemovePlayer = (indexToRemove) => {
        setPlayers(prevPlayers => 
            prevPlayers.filter((_, index) => index !== indexToRemove)
        );
    };

    return(
        <div className="bg-red-400 rounded-xl p-10">
            <div className="mb-4 text-white font-bold">
                Kitties en attente: {players.length}
            </div>
            
            {players.length === 0 ? (
                <div className="text-white italic text-center py-4">
                    Pas de joueurs en attente. Bizarre.. Comment êtes vous ici ?
                </div>
            ) : (
                players.map((player, index) => (
                    <div key={index} className="py-2">
                        <UserWait 
                            player={player}
                            onRemove={() => handleRemovePlayer(index)}
                        />
                    </div>
                ))
            )}
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Démarrer
            </button>
        </div>
    );
}