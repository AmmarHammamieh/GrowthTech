import React from 'react'

function FAQ() {
  return (
    <div className='px-5 md:px-14 py-8 bg-[#FBFCFB]'>
        <h2 className='text-center text-5xl'>Frequently Asked Questions</h2>
        <div className='my-10 w-full md:w-3/4  mx-auto' id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span className='text-xl'>Is Firebee Safe?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400 text-base">Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. .</p>
                </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                <span className='text-xl'>How Does Firebee work?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-base">Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.</p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-base">Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.</p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-base">Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. </p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-base">Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. </p>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-base">Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. </p>
                </div>
            </div>
           
            <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                <span className='text-xl'>Will Firebee Fit on My Head? </span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400 text-base">Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.</p>
                </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="true" aria-controls="accordion-collapse-body-4">
                <span className='text-xl'>What If I want the signal to stop?  </span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400 text-base">Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.</p>
                </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="true" aria-controls="accordion-collapse-body-5">
                <span className='text-xl'>How do you charge Firebee?  </span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400 text-base">Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ