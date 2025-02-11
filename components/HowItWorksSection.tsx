import { Footer } from "@/components/footer";

const steps = [
    {
        number: "01",
        title: "Paste your long URL",
        description: "Enter the long URL you want to shorten into our easy-to-use form.",
    },
    {
        number: "02",
        title: 'Click "Shorten URL"',
        description: "Hit the button and watch as we instantly generate a short, powerful link for you.",
    },
    {
        number: "03",
        title: "Copy and share",
        description: "Copy your new short URL and share it across your platforms with confidence.",
    },
]

export function HowItWorksSection() {
    return (
        <div className="w-full">
            <section id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">How It Works</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Simple steps to shorter links
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Creating short links with ShortLink is quick and easy. Follow these simple steps:
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {steps.map((step, index) => (
                                <div key={index}>
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                            <span className="text-lg font-bold">{step.number}</span>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
