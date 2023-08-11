import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import thoughtImageUrl from '../../assets/thought.png'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedBackTypes = {
    BUG: {
        title:'Problema',
        image:{
            source:bugImageUrl,
            alt:'imagem inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'imagem lampada'
        }

    },
    OTHER:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt:'imagem balão'
        }
    }
}


export type FeedBackType = keyof typeof feedBackTypes 


export function WidgetForm(){

    const[feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)

    function handleRestartFeedback(){
        setFeedBackType (null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                
                
                {!feedBackType ?(
                   <FeedbackTypeStep onFeedBackTypeOnChanged={setFeedBackType}/>
                ):
                (<FeedbackContentStep 
                    feedbackType={feedBackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    />)
                }
                
                <footer className="text-ts text-neutral-400">
                    Feito por Carlos
                </footer>
        </div>
    )
}