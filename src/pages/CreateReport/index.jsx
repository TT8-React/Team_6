import Layout from "../../components/LayOut/index";
import NavButton from "../../components/NavButton/index";
import { Styledbtn, Styledline } from "../Report/style";
import Detailsform from "../../components/Detailsform/index";
import { StyledLink } from "../Login/style";


const index = () => {
    return (
        <Layout title="Create report">
            <StyledLink to="/createReport">
               <Styledbtn>
                <NavButton name="View details" />
            </Styledbtn>
            </StyledLink>
            <Styledline></Styledline>
            <Detailsform />
        </Layout>
    )
}

export default index;

