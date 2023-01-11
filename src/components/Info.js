import self from "./home/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Luís",
    lastName: "Ribeiro",
    nickname: "lmmr",
    initials: "lr", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    quote1: "&#34;Coding is to programming as typing is to writing.&#34;",
    quote2: "&#34;Beauty is our business&#34;",
    socials: [
        {
            link: "https://github.com/ilmmr/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/lmmribeiro",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:lmmr_@outlook.pt",
            icon: "fa fa-send",
            label: 'email'
        }
    ],
    intro: "Hi there, My name is Luís",
    bio1: "💻 An engineer grad with a Masters on Informatics Engineering @UMinho.",
    bio2: "I am very enthusiastic with the appliance of Formal Methods in computing.",
    goal:"🚀 My ultimate goal is to keep extending my knowledge in Computer Science, especially in the study of AI, while making use of Formal Methods to achieve correctness.",
    programming: [
        '⮕ python', '⮕ haskell', '⮕ javascript', '⮕ java'
    ],
    interests: [
        {
            label: 'Formal Methods',
            emoji: '⮕'
        },
        {
            label: 'Software Correctness',
            emoji: '⮕'
        },
        {
            label: 'Artificial Inteligence',
            emoji: '⮕'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ]
}