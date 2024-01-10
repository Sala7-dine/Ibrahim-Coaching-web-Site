import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  "Comment brûler le maximum de gras sans passer ta vie à faire du cardio et des exercices inutiles,",
  "Comment mettre en place une alimentation gourmande, saine, et équilibrée et avoir des résultats visibles au bout de quelques semaines!",
  "Comment avoir un mental d'acier sans jamais abandonner et exploser ta confiance."
]

const Programme = () => {
  return (
    <section className="bg-pic bg-cover py-7 sm:py-32 lg:mt-52" id='programme'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center w-full px-4 mb-10 lg:w-1/2 lg:mb-0">

        <div className="relative -m-10">
                        <h1
                            className="absolute -top-16 left-20 lg:text-[80px] text-gray-900 font-bold opacity-5 lg:block hidden">
                            PROGRAMME
                        </h1>
                        <h1 className="pl-16 text-3xl font-bold border-l-8 border-blue-600 md:text-5xl">
                            au programme
                        </h1>
        </div>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-gray-100 bg-opacity-75 ring-gray-100 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
          <p className="mt-4 text-base leading-8 text-gray-900">
          Je vais te donner EN 3 JOURS LES CLÉS POUR <strong>  PERDRE DU GRAS RAPIDEMENT ET EFFICACEMENT </strong>, te sentir <strong> BIEN DANS TA PEAU, TE TONIFIER et EXPLOSER TA CONFIANCE </strong> . Tu vas emprunter le même chemin que moi pour te sentir bien dans ton corps et dans ta tête.
          </p>
            <div className="mt-5 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Durant ces 3 JOURS je vais t'expliquer :

</h4>
              <div className="h-px flex-auto bg-gray-600" /></div>
            <ul
              role="list"
              className="mt-4 gap-4 text-sm font-semibold leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 py-4">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-7 text-gray-600">
            Quelque soit ton profil, que tu sois débutant/e ou pas du tout sportif/ve, ces 3 clés que je vais te dévoiler vont te permettre de <strong>découvrir comment DÉGOMMER TON GRAS ET EXPLOSER TA CONFIANCE.</strong> 
ATTENTION! <strong>Ce n'est pas une solution miracle</strong> , mais plutôt une façon saine et durable d'appréhender ta transformation. Tu auras toutes les clés pour partir sur de <strong>bonnes bases tant</strong>  au niveau du <strong>sport</strong> , de  <strong>l'alimentation que de mental</strong> .
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}


export default Programme;