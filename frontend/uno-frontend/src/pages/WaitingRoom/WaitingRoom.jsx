import UserWait from "./UserWait";

export default function WaitingRoom({ players, onRemovePlayer }){
    return(
        <div className="bg-red-400 rounded-xl p-10">
            <div className="mb-4 text-white font-bold">
                Joeur.euses en attente: {players.length}
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
                            onRemove={() => onRemovePlayer(index)}
                        />
                    </div>
                ))
            )}
        </div>
    )
}