import * as img from "../Data/images";

export const main_content = [
    {
        img:img.section1,
        img_alt:'section images 1',
        h2:"Welcome to the Animal Shelter",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, explicabo cum architecto facere libero culpa fuga dolor vitae iure sint, impedit possimus nemo alias odio!",
        btn1:"Adopt",
        btn2:"What all pets do we have?",
        class:"section1"
    },
    {
        img:"",
        img_alt:'section images 2',
        h2:"We do take in pets if you can’t take care of them !",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae. Temporibus earum reprehenderit culpa aliquam. Quibusdam doloribus necessitatibus asperiores quis.",
        btn1:"",
        btn2:"Give Away",
        class:"section2"
    },
    {
        img:img.section3,
        img_alt:'section images 3',
        h2:"",
        p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sapiente consequuntur accusamus incidunt porro? Laborum hic exercitationem inventore mollitia officia.",
        btn1:"",
        btn2:"",
        class:"section3"
    }
]


export const footer_content=[
    {
        section:'col-1',
        img:'Animal_Shelter',
        p:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic animi optio ipsa. Natus molestias fugiat, laboriosam repellendus at dicta quo culpa reprehenderit harum vitae modi enim iusto nesciunt cupiditate?',
        btn:'Adopt',
        classUsed:'col-12 col-lg-4 text-center text-lg-start footer-col-1 mb-4 mb-lg-0'
    },
    {
        section:'col-2',
        h6:'GET IN TOUCH',
        h6_class:'text-white',
        contact_links:[
            {
                f_icon:'fa-solid fa-location-dot text-white pe-3',
                f_text:'Animal-Shelter Building, Bglr, Kar-560085',
                f_class:'d-block my-3 my-lg-4'
            },
            {
                f_icon:'fa-regular fa-envelope text-white pe-3',
                f_text:'animalshelter@gmail.com',
                f_class:'d-block'
            }
        ],
        follow_links:["fa-brands fa-linkedin pe-3","fa-brands fa-twitter px-3","fa-brands fa-facebook px-3"],
        classUsed:'col-12 col-lg-4 footer-col-2 mt-3 mt-lg-0'
    },
    {
        h6:'Quick Links',
        h6_class:'text-white mb-3 mb-lg-4 mt-4 mt-lg-0',
        contact_links:[
            {
                f_icon:'',
                f_text:'Home',
                f_class:'d-block mb-3 mt-1'
            },
            {
                f_icon:'',
                f_text:'Contact Us',
                f_class:''
            }
        ],
        classUsed:'col-12 col-lg-2 footer-col-3'
    }
];