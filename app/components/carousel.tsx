import { ChevronLeft, ChevronRight } from 'react-feather';

export default function carousel({ children }: { children: string }) {
    return (
        <div className="overflow-hidden relative">
            <div className="flex"></div>
            <div>
                <button>
                    <ChevronLeft size={40}/>
                </button>
                <button>
                    <ChevronRight size={40}/> 
                </button>                
            </div>
        </div>
    )
}