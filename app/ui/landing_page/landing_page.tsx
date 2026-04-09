import Middle from "./middle/middle";
import Top from "./top/top";
import Bottom from "./bottom/bottom";

const LandingPage = () => {
    return ( 
        <section className="flex flex-col">
            <Top/>
            <Middle/>
            <Bottom/>
        </section>
     );
}
 
export default LandingPage;