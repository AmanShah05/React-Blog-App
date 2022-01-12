import "./about.css"

export default function About() {
    return (
        <>
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">About Me!</span>
            </div>
            <img
                className="headerImg"
                src="https://s27389.pcdn.co/wp-content/uploads/2017/04/AdobeStock_100000042-2.jpeg.optimal.jpeg"
                alt=""
            />
        </div>
        <div className="about">
            <p>Hello! My name is Aman Shah and this is my blogging website. I am studying Mechatronics Engineering at the University of Waterloo, where I plan to specialize in Software Engineering, AI, Machine Learning etc.</p>
            <p>I aspire to apply the knowledge I learn to create various apps, platforms, and media to change our world. In fact, this blog you reading, I have created using programming languages (JavaScript, Html, Css, etc.).</p>
            <p>I am very passionate about the Science and Technology industry, thus, my reason for creating this blog. I have created a startup that educated teenagers about starting a startup and help teenagers with startup to network. If you have any questions or comments, feel free to head over to the contact page and leave me a message.</p>
        </div>
        </>
    )
}
