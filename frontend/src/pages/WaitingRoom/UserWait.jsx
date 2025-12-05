export default function UserWait({ player, onRemove }){
    return (
        <div className="flex items-center gap-2 bg-white/20 p-3 rounded-lg">
            <img 
                alt="Player Icon" 
                src='/Player.png'  
                width={40} 
                className="rounded-full"
            />
            <div className="text-white font-medium flex-grow">{player}</div>
            <button 
                onClick={onRemove}
                className="bg-black text-white rounded-full size-7 hover:bg-red-600 hover:cursor-pointer flex items-center justify-center transition-colors duration-200"
                aria-label={`Remove ${player}`}
            >
                ×
            </button>
        </div>
    )
}